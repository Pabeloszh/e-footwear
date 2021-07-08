from django.shortcuts import render
from rest_framework import response

from .models import Product, ProductPictures

from rest_framework import decorators, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductPicturesSerializer, ProductDetailSerializer, ProductsSerializer
# Create your views here.



class ProductList(APIView):

    def get(self, request, format=None):
        product = Product.objects.all()
        serializer = ProductsSerializer(product, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        queryset = Product.objects.all()
        queryset = queryset.filter(picture__primary_picture=True)
        return queryset


class ProductDetail(APIView):

   def get(self, request, pk, format=None):
       product = Product.objects.get(pk=pk)
       serializer = ProductDetailSerializer(product, many=False)
       return Response(serializer.data)
       