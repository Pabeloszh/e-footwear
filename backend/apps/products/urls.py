from django.urls import path
from apps.products.views import ProductsViewSet, ProductDetailViewSet,\
                                CreateReviewViewSet, RatingViewSet

from .dev_utils import populate_db, populate_with_users, populate_reviews


urlpatterns = [
    path('shoes/',
         ProductsViewSet.as_view({'get': 'list'}),
         name='products_all'),

    path('shoe/<pk>',
         ProductDetailViewSet.as_view({'get': 'retrieve'}),
         name='product_detail'),

    path('rate_product/',
         CreateReviewViewSet.as_view(),
         name='create_review'),

    path('product_reviews/',
         RatingViewSet.as_view({'get': 'list'}),
         name='list_reviews'),



    path('populate/', populate_db, name="populate_db"),
    path('populate_users/', populate_with_users, name="populate_users"),
    path('populate_reviews/', populate_reviews, name="populate_reviews"),
]
