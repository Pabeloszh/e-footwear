from django.urls import path

from . import views


urlpatterns = [
    path('products/', views.ProductList.as_view(), name='products', kwargs={'slug': ''}),
    path('products/<slug:slug>', views.ProductList.as_view(), name='products'),
    path('product/<int:pk>', views.ProductDetail.as_view(), name='product'),

]