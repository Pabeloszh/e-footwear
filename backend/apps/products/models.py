from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db.models import Avg

GENDER_CHOICES = [
    ('male', 'Male'),
    ('female', 'Female'),
]


class Product(models.Model):
    brand = models.CharField(max_length=40)
    model = models.CharField(max_length=40)
    price = models.IntegerField(default=0)
    date_added = models.DateTimeField(auto_now_add=True)
    desc = models.TextField(default=None, blank=True, null=True)
    gender = models.CharField(choices=GENDER_CHOICES, blank=True, null=True, max_length=10)
    for_kids = models.BooleanField(blank=True, null=True)

    @property
    def average_rating(self):
        if hasattr(self, '_average_rating'):
            return self._average_rating
        return self.reviews.aggregate(Avg('rating'))

    def __str__(self):
        return self.model


class ProductPictures(models.Model):
    model = models.ForeignKey(Product, related_name='pictures', on_delete=models.CASCADE, blank=True, null=True)
    color = models.CharField(max_length=30, default=None, null=True, blank=True)
    picture = models.ImageField(upload_to="pictures/product_pictures")
    primary_placeholder = models.BooleanField(default=False)
    color_placeholder = models.BooleanField(default=False)

    def __str__(self):
        return '%s: %s' % (self.color, self.picture)


class Rating(models.Model):
    model = models.ForeignKey(Product, related_name='rating', on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    rate = models.SmallIntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    message = models.TextField(max_length=1000)

    def __str__(self):
        return self.user.username





