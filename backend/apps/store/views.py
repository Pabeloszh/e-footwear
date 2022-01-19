from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Order
from .serializers import OrderSerializer, OrderItemSerializer, ShippingAddressSerializer


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


class CreateOrderViewSet(viewsets.GenericViewSet,
                         mixins.CreateModelMixin):
    serializer_class = OrderItemSerializer

    def create(self, request, *args, **kwargs):

        serializer = self.serializer_class(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        total_price = 18.99
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
        return Response(serializer.data + [{'order_id': order.id, 'detail_id': order.detail_id}])


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
