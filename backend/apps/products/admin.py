from django.contrib import admin
from .models import Product, ProductPictures, Rating


admin.site.register(Product)
admin.site.register(ProductPictures)
admin.site.register(Rating)
