from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Product(models.Model):
    model = models.CharField(max_length=40)

class ProductDesc(models.Model):
    model = models.OneToOneField(Product, on_delete=models.CASCADE, blank=True, null=True)
    desc = models.TextField()

class Rating(models.Model):
    model = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    rate = models.SmallIntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    message = models.TextField(max_length=1000)

class ProductColor(models.Model):
    color = models.CharField(max_length=30)

class ProductPictures(models.Model):
    model = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
    color = models.ForeignKey(ProductColor, on_delete=models.SET_NULL, blank=True, null=True)
    picture = models.ImageField(upload_to="pictures/product_pictures")


GENDER_CHOICES= [
    ('male', 'Male'),
    ('female', 'Female'),
]

class ProductVariant(models.Model):
    model = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
    color = models.ForeignKey(ProductColor, on_delete=models.SET_NULL, blank=True, null=True)
    price = models.IntegerField(default=0)
    size = models.SmallIntegerField(blank=True, null=True)
    for_kids = models.BooleanField(blank=True, null=True)
    gender = models.CharField(choices=GENDER_CHOICES, blank=True, null=True, max_length=10)