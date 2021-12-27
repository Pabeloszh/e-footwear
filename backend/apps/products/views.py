from rest_framework import viewsets, mixins
from django.db import models

from .models import Product, ProductPictures
from apps.products.serializers import ProductsSerializer


class ProductsViewSet(viewsets.GenericViewSet,
                      mixins.ListModelMixin):

    queryset = Product.objects.all()
    serializer_class = ProductsSerializer

    def get_queryset(self):
        queryset = self.queryset

        gender = self.request.query_params.get('gender')
        if gender:
            queryset = queryset.filter(gender=gender)

        kids = self.request.query_params.get('kids')
        if kids:
            queryset = queryset.filter(for_kids=True)

        # Prefetch product pictures only with primary placeholder set True
        queryset = queryset.prefetch_related(
            models.Prefetch(
                "pictures",
                queryset=ProductPictures.objects.filter(primary_placeholder=True)
            )
        )

        return queryset
