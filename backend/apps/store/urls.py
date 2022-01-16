from django.urls import path

from . import views


urlpatterns = [
    path('orders/',
         views.OrderViewSet.as_view({'get': 'list', 'post': 'create'}),
         name='all_orders'),

    path('add_shipping/',
         views.ShippingAddressViewSet.as_view({'post': 'create'}),
         name='add_shipping'),

    path('order_detail/',
         views.ListOrderByNumber.as_view({'get': 'list'}),
         name='order_track'),

]
