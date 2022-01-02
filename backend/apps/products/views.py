from django.db import models
from django.db.models import Avg
from rest_framework import viewsets, mixins


from apps.products.serializers import ProductsSerializer
from .models import Product, ProductPictures


class ProductsViewSet(viewsets.GenericViewSet,
                      mixins.ListModelMixin):

    queryset = Product.objects.all()
    serializer_class = ProductsSerializer

    def get_queryset(self):
        queryset = self.queryset

        # Filtering based on gender and for_kids field
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

        # Add average rating field
        queryset = queryset.annotate(_average_rating=Avg('rating__rate'))

        return queryset
