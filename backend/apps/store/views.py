from rest_framework import viewsets, mixins, generics, status
from rest_framework.response import Response

from django.db import models
from .serializers import OrderSerializer, OrderItemSerializer, ShippingAddressSerializer
from .models import Order, OrderItem, ShippingAddress
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class ListOrdersViewSet(viewsets.GenericViewSet,
                        mixins.ListModelMixin):

    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def get_queryset(self):
        queryset = self.queryset
        queryset = queryset.filter(customer=self.request.user)

        return queryset


class ListOrderByNumber(viewsets.GenericViewSet,
                        mixins.ListModelMixin):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def get_queryset(self):
        queryset = self.queryset

        order_number = self.request.query_params.get("order_number")
        queryset = queryset.filter(detail_id=order_number)

        return queryset


class CreateOrderViewSet(generics.CreateAPIView):

    serializer_class = OrderItemSerializer

    def create(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            order = Order.objects.create()

        else:
            order = Order.objects.create(customer=self.request.user)

        data = request.data

        for item in data:
            item["order"] = order.id

        serializer = self.get_serializer(data=data, many=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        response_data = serializer.data

        total_price = 0
        for product in response_data:
            if product["discount_price"] is None:
                total_price += product["price"] * product["quantity"]
            else:
                total_price += product["discount_price"] * product["quantity"]

        order.total_value = total_price
        order.save()
        additional_data = {"detail_id": order.detail_id,
                           "total_price": total_price}

        if request.user.is_anonymous is not True:
            additional_data["user"] = self.request.user.id

        response_data.append(additional_data)

        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)


class ShippingAddressViewSet(viewsets.GenericViewSet,
                             mixins.CreateModelMixin):

    serializer_class = ShippingAddressSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)
