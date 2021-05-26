from django.db import models
from django.contrib.auth.models import User
import uuid


class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True)
    surname = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=200, null=True)

    def __str__(self):
        return self.email

