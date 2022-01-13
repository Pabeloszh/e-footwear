from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Product, ProductPictures, Rating
from apps.user.models import User


class RatingSerializer(serializers.ModelSerializer):

    # user = serializers.StringRelatedField()
    name = serializers.ReadOnlyField(source="user.first_name")

    class Meta:
        model = Rating
        fields = ['user', 'name', 'rate', 'message']


class CreateReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = ['user', 'model', 'rate', 'message']


class ProductPicturesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductPictures
        fields = ['color', 'picture', 'primary_placeholder', 'color_placeholder']


class ProductsSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)
    average_rating = serializers.SerializerMethodField()

    def get_average_rating(self, obj):
        return obj.average_rating

    class Meta:
        model = Product
        fields = ['id', 'brand', 'model', 'price', 'discount_price',
                  'date_added', 'for_kids', 'gender',
                  'average_rating', 'sizes', 'colors', 'pictures']


class ProductDetailSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)
    rating = RatingSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['brand', 'model', 'desc', 'price', 'discount_price',
                  'date_added', 'for_kids', 'gender',
                  'average_rating', 'specs', 'pictures', 'rating']
