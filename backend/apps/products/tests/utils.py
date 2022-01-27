from django.core.files.uploadedfile import SimpleUploadedFile

from apps.products.models import Product, Rating, ProductPictures
from django.contrib.auth import get_user_model


def sample_product(**params):
    """Create sample product"""
    defaults = {
        "brand": "Nike",
        "model": "random_1",
        "type": "sneakers",
        "price": 149.99,
        "colors": ['red', 'blue', 'brown'],
        "sizes": [41, 42, 43, 44, 45],
        "discount_price": None,
        "desc": "Sample description",
        "gender": "male",
        "for_kids": True
    }
    defaults.update(params)

    return Product.objects.create(**defaults)


def sample_rating(product, user, rate):
    """Create sample review"""
    rating = Rating.objects.create(model=product,
                                   user=user,
                                   message="Sample review message",
                                   rate=rate)
    return rating


def sample_product_picture(product, primary_placeholder):
    picture_file = SimpleUploadedFile("picture1.jpg", b"xqc", content_type="image/jpg")
    picture = ProductPictures.objects.create(
        model=product,
        color="red",
        picture=picture_file,
        primary_placeholder=primary_placeholder,
        color_placeholder=False
    )
    return picture


def sample_user(email):
    """Create sample user"""
    return get_user_model().objects.create_user(email=email, password="password123")