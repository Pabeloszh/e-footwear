
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, ProductPictures, Rating
from rest_framework.validators import UniqueValidator


#HOMEPAGE SHOES SERIALIZER
class FilteredPicsSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(primary_placeholder=True)
        return super(FilteredPicsSerializer, self).to_representation(data)

class ProductPicturesSerializer(serializers.ModelSerializer):

    class Meta:
        list_serializer_class = FilteredPicsSerializer
        model = ProductPictures
        fields = ['color', 'picture', 'primary_placeholder', 'color_placeholder']

class ProductsSerializer(serializers.ModelSerializer):
   
    pictures = ProductPicturesSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['brand', 'model', 'price', 'pictures']





class ProductDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'
        depth = 1
        