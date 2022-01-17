from django.db import models
from django.contrib.auth.models import User
from apps.products.models import Product, ProductPictures
from django.conf import settings
import uuid


class Order(models.Model):
    customer = models.ForeignKey(settings.AUTH_USER_MODEL,
                                 on_delete=models.SET_NULL,
                                 blank=True, null=True)

    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    detail_id = models.UUIDField(default=uuid.uuid4, unique=True, db_index=True)
    total_value = models.IntegerField(null=True, blank=True)

    def __str__(self):
        if self.customer is None:
            return str(self.detail_id)
        return str(self.customer)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="order_items",
                              on_delete=models.SET_NULL,
                              blank=True, null=True)

    product = models.ForeignKey(Product, related_name="orderitem",
                                on_delete=models.SET_NULL,
                                blank=True, null=True)

    size = models.IntegerField()
    color = models.CharField(max_length=25)
    quantity = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.product.model

    @property
    def primary_picture(self):
        pic = ProductPictures.objects.filter(model=self.product).get(primary_placeholder=True)
        return str(pic.picture.url)


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
