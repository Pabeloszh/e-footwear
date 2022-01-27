from django.test import TestCase
from .utils import sample_product, sample_rating, sample_user, sample_product_picture
from apps.products.serializers import RatingSerializer, CreateReviewSerializer,\
                                      ProductsSerializer, ProductDetailSerializer,\
                                      ProductPicturesSerializer
from apps.products.models import Rating


class ProductsSerializersTests(TestCase):
    """Tests for products app serializers"""

    def test_product_serializer(self):
        """Test product serializer"""
        prod = sample_product(discount_price=130)
        pic = sample_product_picture(prod, True)

        serializer = ProductsSerializer(prod)
        self.assertEqual(serializer.data['model'], prod.model)
        self.assertEqual(serializer.data['price'], prod.price)
        self.assertEqual(serializer.data['discount_price'], 130)
        self.assertEqual(len(serializer.data['pictures']), 1)

    def test_product_detail_serializer(self):
        """Test product detail serializer"""
        prod = sample_product()
        pic1 = sample_product_picture(prod, True)
        pic2 = sample_product_picture(prod, False)

        serializer = ProductDetailSerializer(prod)
        self.assertEqual(serializer.data['brand'], prod.brand)
        self.assertEqual(len(serializer.data['pictures']), 2)
        self.assertEqual(serializer.data['is_reviewed'], False),
        self.assertEqual(serializer.data['desc'], prod.desc)

    def test_product_pictures_serializer(self):
        """Test product pictures serializer"""
        prod = sample_product()
        pic = sample_product_picture(product=prod, primary_placeholder=True)
        serializer = ProductPicturesSerializer(pic)
        self.assertEqual(serializer.data['color'], pic.color)

    def test_rating_serializer(self):
        """Test rating serializer"""
        prod = sample_product()
        user = sample_user("test@test.com")
        rating = sample_rating(prod, user, 5)
        serializer = RatingSerializer(rating)
        self.assertEqual(serializer.data['model'], prod.id)
        self.assertEqual(serializer.data['rate'], rating.rate)
        self.assertEqual(serializer.data['message'], rating.message)

    def test_create_review_serializer(self):
        """Test creating new review"""
        user = sample_user("test@test.com")
        prod = sample_product()
        data = {
            "user": user.id,
            "model": prod.id,
            "message": "example message",
            "rate": 5
        }

        serializer = CreateReviewSerializer(data=data)
        serializer.is_valid()
        serializer.save()
        rev = Rating.objects.all().first()
        self.assertEqual(rev.rate, data['rate'])
        self.assertEqual(rev.user, user)
        self.assertEqual(rev.model, prod)
