from django.contrib import admin
from .models import Order, OrderItem, ShippingAddress
# Register your models here.

admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(ShippingAddress)