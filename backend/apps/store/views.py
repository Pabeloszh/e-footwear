from rest_framework import viewsets, mixins, generics, status
from rest_framework import permissions
from rest_framework.response import Response

from django.db import models
from .serializers import OrderSerializer, OrderItemSerializer, ShippingAddressSerializer
from .models import Order, OrderItem, ShippingAddress
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


# class ListOrdersViewSet(viewsets.GenericViewSet,
#                         mixins.ListModelMixin):

#     serializer_class = OrderSerializer
#     queryset = Order.objects.all()
#     permission_classes = (IsAuthenticated,)
#     authentication_classes = (JWTAuthentication,)

#     def get_queryset(self):
#         queryset = self.queryset
#         queryset = queryset.filter(customer=self.request.user)

#         return queryset

class ListOrdersViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permissions_classes = (IsAuthenticated, )
    authentication_classes = (JWTAuthentication, )
    serializer_class = OrderSerializer
    http_method_names = ['get', 'post']

    def get_queryset(self):
        queryset = self.queryset.filter(customer=self.request.user)
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = OrderItemSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        if request.user.is_anonymous:
            order = Order.objects.create()
        else:
            order = Order.objects.create(customer=self.request.user)
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
