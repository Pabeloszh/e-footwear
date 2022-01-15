from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin
from django.conf import settings
from apps.products.models import Product

class UserManager(BaseUserManager):

    def create_user(self, email, password=None):
        # Creates and saves a new user
        if not email:
            raise ValueError('No email address provided.')
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        # Creates and saves new superuser
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    # Custom user model that supports using email instead of username
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class LikedProducts(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="liked_by",
                             on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name="liked_product", on_delete=models.CASCADE)
