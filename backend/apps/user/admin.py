from django.contrib import admin
from .models import User, LikedProducts
# Register your models here.

admin.site.register(User)

admin.site.register(LikedProducts)