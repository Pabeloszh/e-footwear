from django.urls import path
from . import views

urlpatterns = [
    path('users/create_user/',
         views.CreateUserView.as_view(),
         name='create_user'),

    path('users/edit/',
         views.ManageUserView.as_view(),
         name='manage_user'),

    path('users/liked_products_get/',
         views.LikedProductsView.as_view(),
         name='liked_products'),

    path('users/liked_products_add/',
         views.AddLikedProduct.as_view(),
         name='liked_products_add')
]