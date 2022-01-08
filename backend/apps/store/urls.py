from django.urls import path

from . import views


urlpatterns = [
    path('orders/', views.ListOrdersViewSet.as_view({'get': 'list'}), name='all_orders'),
    path('create_order/', views.CreateOrderViewSet.as_view(), name='create_order'),
    path('add_shipping/', views.ShippingAddressViewSet.as_view({'post': 'create'}), name='add_shipping'),
    path('order_detail/', views.ListOrderByNumber.as_view({'get': 'list'}), name='order_track'),

]
