from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.fields import ReadOnlyField
from .models import Product, ProductPictures



class ProductPicturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPictures
        fields = ['color', 'picture', 'primary_placeholder', 'color_placeholder']



class ProductSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
        