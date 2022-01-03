from rest_framework.routers import DefaultRouter
from django.urls import path
from apps.products import views


urlpatterns = [
    path('shoes/', views.ProductsViewSet.as_view({'get': 'list'}), name='products_all'),
    path('shoe/<pk>', views.ProductDetailApiView.as_view({'get': 'retrieve'}), name='product_detail')
]