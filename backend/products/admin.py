from django.contrib import admin
from .models import Product, ProductVariant, ProductColor, ProductDesc, ProductPictures, Rating


admin.site.register(Product)
admin.site.register(ProductVariant)
admin.site.register(ProductColor)
admin.site.register(ProductDesc)
admin.site.register(ProductPictures)
admin.site.register(Rating)