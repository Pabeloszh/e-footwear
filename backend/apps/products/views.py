from django.db import models
from django.db.models import Avg, FloatField, F
from django.db.models.functions import Coalesce
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, mixins, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from apps.products.serializers import ProductsSerializer, ProductDetailSerializer, \
    CreateReviewSerializer, RatingSerializer
from .models import Product, ProductPictures, Rating
from .product_filters import ProductsFilter, ProductRatingFilter


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class ProductsViewSet(viewsets.GenericViewSet,
                      mixins.ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductsFilter

    def get_queryset(self):
        queryset = self.queryset

        # Prefetch product pictures only with primary placeholder set True
        queryset = queryset.prefetch_related(
            models.Prefetch(
                "pictures",
                queryset=ProductPictures.objects.filter(primary_placeholder=True)
            )
        )

        # Add average rating field
        queryset = queryset.annotate(_average_rating=Coalesce(Avg(F('rating__rate'),
                                                                  output_field=FloatField()), 0.0))
        return queryset


class ProductDetailViewSet(viewsets.GenericViewSet,
                           mixins.RetrieveModelMixin):
    queryset = Product.objects.all().annotate(_average_rating=Avg('rating__rate'))
    serializer_class = ProductDetailSerializer


class RatingViewSet(viewsets.GenericViewSet,
                    mixins.ListModelMixin):

    serializer_class = RatingSerializer
    queryset = Rating.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductRatingFilter
    pagination_class = StandardResultsSetPagination


class CreateReviewViewSet(generics.CreateAPIView):
    serializer_class = CreateReviewSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        model = Product.objects.get(id=self.request.data['model'])

        if len(Rating.objects.filter(user=self.request.user).filter(model=model)) == 0:
            serializer.save(user=self.request.user, model=model)
