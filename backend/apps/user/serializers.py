from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import LikedProducts
from apps.products.serializers import ProductsSerializer
from apps.products.models import Product


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()

        fields = ['email', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 8}
        }

    def create(self, validated_data):
        # Create a new user with encrypted password and return it
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        # Update user setting the password correctly and return it
        # Remove password from display
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user


class ModifiedProductSerializer(ProductsSerializer):

    first_color = serializers.StringRelatedField()
    class Meta:
        model = Product
        fields = ['id', 'brand', 'model', 'price', 'discount_price', 'pictures', 'first_color']


class AddLikedProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = LikedProducts
        fields = ['user', 'product']


class LikedProductsSerializer(AddLikedProductSerializer):

    product = ModifiedProductSerializer(read_only=True)
