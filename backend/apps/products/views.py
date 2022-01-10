import random

from django.db import models
from django.db.models import Avg
from django.shortcuts import redirect
from rest_framework import viewsets, mixins, generics

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from apps.products.serializers import ProductsSerializer, ProductDetailSerializer, CreateReviewSerializer
from .models import Product, ProductPictures, Rating


class ProductsViewSet(viewsets.GenericViewSet,
                      mixins.ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer

    def get_queryset(self):
        queryset = self.queryset

        # Filtering based on gender and for_kids field
        gender = self.request.query_params.get('gender')
        if gender:
            queryset = queryset.filter(gender=gender)

        kids = self.request.query_params.get('kids')
        if kids and kids == "Y":
            queryset = queryset.filter(for_kids=True)

        # Prefetch product pictures only with primary placeholder set True
        queryset = queryset.prefetch_related(
            models.Prefetch(
                "pictures",
                queryset=ProductPictures.objects.filter(primary_placeholder=True)
            )
        )

        # Add average rating field
        queryset = queryset.annotate(_average_rating=Avg('rating__rate'))

        return queryset


class ProductDetailViewSet(viewsets.GenericViewSet,
                           mixins.RetrieveModelMixin):
    queryset = Product.objects.all().annotate(_average_rating=Avg('rating__rate'))
    serializer_class = ProductDetailSerializer


class CreateReviewViewSet(generics.CreateAPIView):
    serializer_class = CreateReviewSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        model = Product.objects.get(id=self.request.data['model'])

        if len(Rating.objects.filter(user=self.request.user).filter(model=model)) == 0:
            serializer.save(user=self.request.user, model=model)


def populate_db(request):
    amount = int(request.GET.get('amount', None))
    gen = request.GET.get('gender')
    kds = bool(request.GET.get('kids', None))

    test_json = {"sizes": [41, 42, 43, 44, 45], "colors": ["red", "black", "blue", "purple", "orange", "white"]}

    SIZES_POOL_MALE = [39, 40, 41, 42, 43, 44, 45, 46]
    SIZES_POOL_FEMALE = [35, 36, 37, 38, 39, 40, 41, 42]
    BRANDS_POOL = ["Nike", "Adidas", 'New Balance', 'Lasocki', 'Lacoste']
    MODELS_POOL = ['random_1', 'random_2', 'random_3', 'random_4', 'random_5']
    COLORS_POOL = ["red", "black", "blue", "purple", "orange", "white", "magenta"]
    PICUTRE = ProductPictures.objects.get(id=1)

    for i in range(amount):
        if gen == "female":
            random_sizes_range = SIZES_POOL_FEMALE[random.randint(0, 4):random.randint(5, 7)]

        if gen == "male":
            random_sizes_range = SIZES_POOL_MALE[random.randint(0, 4):random.randint(5, 7)]

        random_colors = []
        for x in range(5):
            random_choice_color = random.choice(COLORS_POOL)
            if random_choice_color not in random_colors:
                random_colors.append(random_choice_color)

        random_specs = {"sizes": random_sizes_range, "colors": random_colors}

        prod = Product.objects.create(brand=random.choice(BRANDS_POOL),
                                      model=random.choice(MODELS_POOL),
                                      price=random.randrange(6, 90) * 10,
                                      gender=gen,
                                      specs=random_specs,
                                      for_kids=kds
                                      )

        ProductPictures.objects.create(model=prod,
                                       picture=PICUTRE.picture,
                                       primary_placeholder=True)

    return redirect("products_all")
