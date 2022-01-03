from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Order, OrderItem, ShippingAddress


class OrderItemSerializer(serializers.ModelSerializer):

    # order = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'size', 'color', 'quantity', 'date_added']


class OrderSerializer(serializers.ModelSerializer):

    orderitem = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'orderitem', 'date_ordered', 'complete', 'transaction_id']

