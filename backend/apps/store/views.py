from rest_framework import viewsets, mixins, generics, status
from rest_framework.response import Response

from django.db import models
from .serializers import OrderSerializer, OrderItemSerializer, ShippingAddressSerializer
from .models import Order, OrderItem, ShippingAddress
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class OrderViewSet(viewsets.GenericViewSet,
                   mixins.ListModelMixin,
                   mixins.CreateModelMixin):

    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(customer=self.request.user)

        return queryset

    def create(self, request, *args, **kwargs):
        serializer = OrderItemSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        total_price = 0
        for item in serializer.data:
            if item["discount_price"] is None:
                total_price += item["price"] * item["quantity"]
            else:
                total_price += item["discount_price"] * item["quantity"]
        if request.user.is_anonymous:
            order = Order.objects.create(total_value=total_price)
        else:
            order = Order.objects.create(customer=self.request.user,
                                         total_value=total_price)
        serializer.save(order=order)
        return Response(serializer.data)


class ListOrderByNumber(viewsets.GenericViewSet,
                        mixins.ListModelMixin):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def get_queryset(self):
        queryset = self.queryset

        order_number = self.request.query_params.get("order_number")
        queryset = queryset.filter(detail_id=order_number)

        return queryset


class ShippingAddressViewSet(viewsets.GenericViewSet,
                             mixins.CreateModelMixin):

    serializer_class = ShippingAddressSerializer
