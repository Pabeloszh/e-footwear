from django.urls import path
from apps.user.views import CreateUserView, ManageUserView, LikedProductsView, AddLikedProduct

urlpatterns = [
    path('users/create_user/',
         CreateUserView.as_view(),
         name='create_user'),

    path('users/edit/',
         ManageUserView.as_view(),
         name='manage_user'),

    path('users/liked_products_get/',
         LikedProductsView.as_view(),
         name='liked_products'),

    path('users/liked_products_add/',
         AddLikedProduct.as_view(),
         name='liked_products_add')
]