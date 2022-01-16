from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from apps.store.views import ListOrdersViewSet

router = DefaultRouter()
router.register(r'orders', ListOrdersViewSet)

urlpatterns = [
    path('', include(router.get_urls())),
    path('create_order/', views.CreateOrderViewSet.as_view(), name='create_order'),
    path('add_shipping/', views.ShippingAddressViewSet.as_view({'post': 'create'}), name='add_shipping'),
    path('order_detail/', views.ListOrderByNumber.as_view({'get': 'list'}), name='order_track'),

]
