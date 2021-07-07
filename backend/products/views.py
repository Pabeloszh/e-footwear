from django.shortcuts import render

from .models import Product

from rest_framework import decorators, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductSerializer
# Create your views here.

class ProductList(APIView):

    def get(self, request, format=None):
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)


class ProductDetail(APIView):

   def get(self, request, pk, format=None):
       product = Product.objects.get(pk=pk)
       serializer = ProductSerializer(product, many=False)
       return Response(serializer.data)