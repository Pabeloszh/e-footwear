from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import viewsets, status
from rest_framework import mixins
from django.shortcuts import get_object_or_404
from .models import LikedProducts
from apps.products.models import Product
from .serializers import UserSerializer, LikedProductsSerializer, AddLikedProductSerializer


class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer


class ManageUserView(RetrieveUpdateAPIView):
    # Manage authenticated user
    serializer_class = UserSerializer

    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        # Retrieve and return authenticated user
        return self.request.user


class LikedProductsView(viewsets.GenericViewSet,
                        mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.DestroyModelMixin,
                        ):

    serializer_class = LikedProductsSerializer
    queryset = LikedProducts.objects.all()

    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = self.queryset

        queryset = queryset.filter(user=self.request.user)

        return queryset

    def create(self, request, *args, **kwargs):
        data = request.data
        data['user'] = self.request.user.id
        serializer = AddLikedProductSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        data = request.data
        prod = Product.objects.get(id=data['product'])

        to_deletion = LikedProducts.objects.filter(product=prod, user=self.request.user)
        to_deletion.delete()
        return Response("DELETED", status=status.HTTP_202_ACCEPTED)

