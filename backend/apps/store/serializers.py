from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Order, OrderItem, ShippingAddress


class OrderItemSerializer(serializers.ModelSerializer):

    price = serializers.ReadOnlyField(source="product.price")
    discount_price = serializers.ReadOnlyField(source="product.discount_price")
    brand = serializers.ReadOnlyField(source="product.brand")
    model = serializers.ReadOnlyField(source="product.model")

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'brand', 'model', 'product', 'discount_price',
                  'price', 'size', 'color',
                  'quantity']


class ShippingAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShippingAddress
        fields = ['email', 'first_name', 'last_name',
                  'phone_number', 'order', 'address',
                  'city', 'vovoideship', 'zip_code']


class OrderSerializer(serializers.ModelSerializer):

    orderitem = OrderItemSerializer(many=True, read_only=True)
    shipping_address_details = ShippingAddressSerializer(read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'orderitem',
                  'date_ordered', 'complete', 'detail_id',
                  'total_value', 'shipping_address_details']
