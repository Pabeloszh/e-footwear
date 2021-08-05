from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt.views import TokenObtainPairView




urlpatterns = [
    path('api/users/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
    path('api/', include('products.urls')),

]
