from django.test import TestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from apps.products.models import Product, ProductPictures, Rating
from django.core.files.uploadedfile import SimpleUploadedFile


def sample_product():
    prod = Product.objects.create(
        brand="Nike",
        model="random_1",
        type="sneakers",
        price=149.99,
        colors=['red', 'blue', 'brown'],
        sizes=[41, 42, 43, 44, 45],
        discount_price=None,
        desc="Sample description",
        gender="male",
        for_kids=True
    )
    return prod


def create_sample_product_rating(product, user):
    rating = Rating.objects.create(model=product,
                                   user=user,
                                   title="Good shoes!",
                                   message="Sample message for test",
                                   rate=5)
    return rating


class TestProductsModels(TestCase):
    """Tests for models in products app"""

    def test_create_new_product_successful(self):
        """Test creating new product is successful"""
        product = sample_product()
        res = Product.objects.all().first()

        self.assertEqual(product, res)

    def test_product_first_color_property(self):
        product = sample_product()
        self.assertEqual(product.first_color, "red")

    def test_add_product_picture_successful(self):
        """Test adding product picture and uploading it to minio is successful"""
        product = sample_product()
        picture_file = SimpleUploadedFile("picture1.jpg", b"xqc", content_type="image/jpg")
        picture = ProductPictures.objects.create(
            model=product,
            color="red",
            picture=picture_file,
            primary_placeholder=True,
            color_placeholder=False
        )

        res = ProductPictures.objects.get(id=1)
        self.assertEqual(picture, res)

    def test_creating_review_is_successful(self):
        """Test creating new review is successful"""
        user = get_user_model().objects.create_user(email="mati@mati.com",
                                                    password="password12345")
        product = sample_product()
        rating = create_sample_product_rating(product=product, user=user)
        res = Rating.objects.all().first()

        self.assertEqual(rating, res)

    def test_reviews_unique_together(self):
        """Test user can only create one review per product"""
        user = get_user_model().objects.create_user(email="mati@mati.com",
                                                    password="password12345")
        product = sample_product()

        rating = create_sample_product_rating(product=product, user=user)

        with self.assertRaises(Exception):
            create_sample_product_rating(product=product, user=user)
