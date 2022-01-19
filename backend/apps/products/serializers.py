from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Product, ProductPictures, Rating
from apps.user.models import User


class RatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = ['model', 'title', 'message', 'rate', 'date_added']


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
        fields = ['id', 'brand', 'model', 'type', 'price', 'discount_price',
                  'date_added', 'for_kids', 'gender',
                  'average_rating', 'sizes', 'colors', 'pictures']


class ProductDetailSerializer(serializers.ModelSerializer):

    pictures = ProductPicturesSerializer(many=True, read_only=True)
    is_reviewed = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['brand', 'model', 'desc', 'price', 'discount_price',
                  'date_added', 'for_kids', 'gender',
                  'average_rating', 'colors', 'sizes', 'pictures', 'is_reviewed']

    def get_is_reviewed(self, obj):
        if self.context['request'].user.is_anonymous:
            return False
        else:
            user = self.context['request'].user
            is_reviewed = Rating.objects.filter(model=obj, user=user)
            if not is_reviewed:
                return False
        return True
