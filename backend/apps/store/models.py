from django.db import models
from django.contrib.auth.models import User
from django.db.models import Sum, F
from apps.products.models import Product
from django.conf import settings
import uuid


class Order(models.Model):
    customer = models.ForeignKey(settings.AUTH_USER_MODEL,
                                 on_delete=models.SET_NULL,
                                 blank=True, null=True)

    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    detail_id = models.UUIDField(default=uuid.uuid4, unique=True, db_index=True)
    
    @property
    def total_value(self):
        items = self.orderitem.filter(order=self)
        total = 0
        for item in items:
            total += item.price
        return total
    

    def __str__(self):
        return str(self.customer)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="orderitem",
                              on_delete=models.SET_NULL,
                              blank=True, null=True)

    product = models.ForeignKey(Product, related_name="product",
                                on_delete=models.SET_NULL,
                                blank=True, null=True)

    size = models.IntegerField()
    color = models.CharField(max_length=25)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    
    @property
    def price(self):
        if self.product.discount_price:
            return self.product.discount_price * self.quantity
        else:
            return self.product.price * self.quantity


    def __str__(self):
        return self.product.model


class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, related_name="shipping_address_details",
                                 on_delete=models.SET_NULL,
                                 blank=True, null=True)

    email = models.EmailField(null=True, blank=True, default=None)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=9)

    address = models.CharField(max_length=200, null=False)
    city = models.CharField(max_length=200, null=False)
    vovoideship = models.CharField(max_length=200, null=False)
    zip_code = models.CharField(max_length=200, null=False)
    date_added = models.DateTimeField(auto_now_add=True)   

    def __str__(self):
        return self.address
