from django.urls import path
from apps.products import views


urlpatterns = [
    path('shoes/',
         views.ProductsViewSet.as_view({'get': 'list'}),
         name='products_all'),

    path('shoe/<pk>',
         views.ProductDetailViewSet.as_view({'get': 'retrieve'}),
         name='product_detail'),

    path('rate_product/',
         views.CreateReviewViewSet.as_view(),
         name='create_review'),

    path('product_reviews/',
         views.RatingViewSet.as_view({'get': 'list'}),
         name='list_reviews'),

    path('populate/', views.populate_db, name="populate_db"),
]
