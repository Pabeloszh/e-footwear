from django.test import TestCase
from .utils import sample_product, sample_rating, sample_user, sample_product_picture
from django.urls import reverse
from rest_framework.test import APIClient

from rest_framework import status
from rest_framework.test import requests
from apps.products.serializers import ProductsSerializer
import json


def products_all_url():
    """Return url for all products"""
    return reverse("products:products_all")


def product_detail_url(pk):
    """Return url for shoe detail"""
    return reverse("products:product_detail", args=[pk])


def create_product_review_url():
    """Create product review url"""
    return reverse("products:create_review")


def list_product_reviews(prod_id):
    """List product reviews url"""
    return reverse("products:list_reviews") + f'?model_id={prod_id}'


class PublicProductsViewsTests(TestCase):
    """Tests for public products app endpoints"""

    def setUp(self) -> None:
        self.client = APIClient()
        self.product = sample_product()
        sample_product_picture(self.product, True)
        sample_product_picture(self.product, False)

        self.user = sample_user("test@test.com")
        self.user1 = sample_user("test1@test1.com")
        sample_rating(self.product, self.user, 5)
        sample_rating(self.product, self.user1, 1)

    def test_products_view(self):
        """Test main page view"""
        serializer = ProductsSerializer(self.product)
        res = self.client.get(products_all_url())
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        res = json.dumps(res.data['results'][0])
        res = json.loads(res)
        self.assertEqual(res['id'], serializer.data['id'])
        self.assertEqual(res['discount_price'], serializer.data['discount_price'])
        self.assertEqual(len(res['sizes']), len(serializer.data['sizes']))
        self.assertEqual(len(res['pictures']), 1)
        self.assertEqual(res['average_rating'], 3)

    def test_products_detail_view(self):
        """Test products detail view"""
        res = self.client.get(product_detail_url(self.product.id))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        res = json.dumps(res.data)
        res = json.loads(res)
        self.assertEqual(len(res['pictures']), 2)
        self.assertEqual(res['is_reviewed'], False)

    def test_retrieving_product_reviews(self):
        """Test retrieving product reviews"""
        res = self.client.get(list_product_reviews(self.product.id))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data['results']), 2)

    def test_adding_review_no_auth_fails(self):
        """Test adding review without logging in fails"""
        data = {
            "model": self.product.id,
            "message": "example message",
            "rate": 1
        }
        res = self.client.post(create_product_review_url(), data)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)


class PrivateProductsViewsTests(TestCase):
    """Tests for private products app endpoints"""

    def setUp(self) -> None:
        self.product = sample_product()
        self.client = APIClient()
        self.user = sample_user("test@test.com")
        self.client.force_authenticate(self.user)

    def test_is_reviewed_parameter_false(self):
        """Test is_reviewed is false when user did not review product"""
        res = self.client.get(product_detail_url(self.product.id))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data['is_reviewed'], False)

    def test_is_reviewed_parameter_true(self):
        """Test is_reviewed is true if user has reviewed product"""
        sample_rating(self.product, self.user, 5)
        res = self.client.get(product_detail_url(self.product.id))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data['is_reviewed'], True)

    def test_add_product_review_authorized(self):
        """Test adding product review works when authorized"""
        data = {
            "model": self.product.id,
            "message": "example message",
            "rate": 1
        }

        res = self.client.post(create_product_review_url(), data, format='json')
        self.assertEqual(res.status_code, status.HTTP_200_OK)
