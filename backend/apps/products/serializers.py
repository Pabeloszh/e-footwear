from rest_framework import serializers
from .models import Product, ProductPictures


class ProductPicturesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductPictures
        fields = ['color', 'picture', 'primary_placeholder', 'color_placeholder']


class ProductsSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = ['brand', 'model', 'price',
                  'date_added', 'for_kids', 'gender',
                  'pictures']
