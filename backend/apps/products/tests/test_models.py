from django.test import TestCase
from django.contrib.auth import get_user_model
from apps.products.models import Product, ProductPictures, Rating
from django.core.files.uploadedfile import SimpleUploadedFile
from .utils import sample_product, sample_rating, sample_product_picture


class ProductsModelsTests(TestCase):
    """Tests for models in products app"""

    def test_create_new_product_successful(self):
        """Test creating new product is successful"""
        product = sample_product()
        res = Product.objects.all().first()

        self.assertEqual(product, res)

    def test_product_first_color_property(self):
        """Test first color property for display version of project"""
        product = sample_product()
        self.assertEqual(product.first_color, "red")

    def test_add_product_picture_successful(self):
        """Test adding product picture and uploading it to minio is successful"""
        product = sample_product()

        picture = sample_product_picture(product, True)
        res = ProductPictures.objects.all().first()
        self.assertEqual(picture, res)

    def test_creating_review_is_successful(self):
        """Test creating new review is successful"""
        user = get_user_model().objects.create_user(email="mati@mati.com",
                                                    password="password12345")
        product = sample_product()
        rating = sample_rating(product=product, user=user, rate=5)
        res = Rating.objects.all().first()

        self.assertEqual(rating, res)

    def test_reviews_unique_together(self):
        """Test user can only create one review per product"""
        user = get_user_model().objects.create_user(email="mati@mati.com",
                                                    password="password12345")
        product = sample_product()
        sample_rating(product=product, user=user, rate=5)

        with self.assertRaises(Exception):
            sample_rating(product=product, user=user)
