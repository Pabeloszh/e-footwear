from django.urls import path
from apps.user.views import CreateUserView, ManageUserView, LikedProductsView

urlpatterns = [
    path('users/create_user/',
         CreateUserView.as_view(),
         name='create_user'),

    path('users/edit/',
         ManageUserView.as_view(),
         name='manage_user'),

    path('users/liked_products/',
         LikedProductsView.as_view({'get': 'list', 'post': 'create', 'delete': 'destroy'}),
         name='liked_products'),
]
