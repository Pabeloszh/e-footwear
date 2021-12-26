from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.fields import CharField
from .models import Product, ProductPictures, Rating


class RatingSerializer(serializers.ModelSerializer):

    user = CharField()

    class Meta:
        model = Rating
        fields = ['user', 'rate', 'message']


class ProductPicturesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductPictures
        fields = ['color', 'picture', 'primary_placeholder', 'color_placeholder']


class ProductsSerializer(serializers.ModelSerializer):
   
    pictures = ProductPicturesSerializer(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = ['brand', 'model', 'price', 'date_added', 'pictures']


class ProductDetailSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)
    rating = RatingSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['brand', 'model', 'desc', 'price', 'date_added', 'gender', 'for_kids', 'pictures', 'rating']
