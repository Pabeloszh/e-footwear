from django.db import models
from django.db.models import query
from django.db.models.fields import NOT_PROVIDED
from django.shortcuts import render
from rest_framework import response

from .models import Product, ProductPictures, Rating

from rest_framework import decorators, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .serializers import ProductPicturesSerializer, ProductDetailSerializer, ProductsSerializer
# Create your views here.



class ProductList(APIView):

    def get(self, request, slug, format=None):

        if slug == '':
            queryset = Product.objects.all()

        elif slug == 'male':
            queryset = Product.objects.filter(gender='male')

        elif slug == 'female':
            queryset = Product.objects.filter(gender='female')

        elif slug == 'kids':
            queryset = Product.objects.filter(for_kids=True)

        queryset = queryset.prefetch_related(
            models.Prefetch(
                "pictures",
                queryset=ProductPictures.objects.filter(primary_placeholder=True)
            )
        ).order_by('date_added')

        serializer = ProductsSerializer(queryset, many=True)

        return Response(serializer.data)


class ProductDetail(APIView):

   def get(self, request, pk, format=None):
       product = Product.objects.get(pk=pk)
       serializer = ProductDetailSerializer(product, many=False)
       return Response(serializer.data)
