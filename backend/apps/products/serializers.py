from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Product, ProductPictures, Rating


class RatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = ['user', 'rate', 'message']


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
        fields = ['brand', 'model', 'price',
                  'date_added', 'for_kids', 'gender',
                  'average_rating', 'specs', 'pictures']


class ProductDetailSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)
    rating = RatingSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['brand', 'model', 'desc', 'price',
                  'date_added', 'for_kids', 'gender',
                  'average_rating', 'specs', 'pictures', 'rating']