from django.urls import path

from apps.store.views import OrderViewSet, CreateOrderViewSet,\
                             ShippingAddressViewSet, ListOrderByNumber


urlpatterns = [
    path('orders/',
         OrderViewSet.as_view({'get': 'list'}),
         name='all_orders'),

    path('orders/create_order/',
         CreateOrderViewSet.as_view({'post': 'create'}),
         name='all_orders'),

    path('orders/add_shipping/',
         ShippingAddressViewSet.as_view({'post': 'create'}),
         name='add_shipping'),

    path('orders/order_detail/',
         ListOrderByNumber.as_view({'get': 'list'}),
         name='order_track'),

]
