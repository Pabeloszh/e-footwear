import random

from django.db import models
from django.db.models import Avg, FloatField, F
from django.db.models.functions import Coalesce
from django.shortcuts import redirect
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, mixins, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from apps.products.serializers import ProductsSerializer, ProductDetailSerializer,\
                                      CreateReviewSerializer, RatingSerializer
from .models import Product, ProductPictures, Rating
from .product_filters import ProductsFilter, ProductRatingFilter


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class ProductsViewSet(viewsets.GenericViewSet,
                      mixins.ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductsFilter

    def get_queryset(self):
        queryset = self.queryset

        # Prefetch product pictures only with primary placeholder set True
        queryset = queryset.prefetch_related(
            models.Prefetch(
                "pictures",
                queryset=ProductPictures.objects.filter(primary_placeholder=True)
            )
        )

        # Add average rating field
        queryset = queryset.annotate(_average_rating=Coalesce(Avg(F('rating__rate'),
                                                                  output_field=FloatField()), 0.0))
        return queryset


class ProductDetailViewSet(viewsets.GenericViewSet,
                           mixins.RetrieveModelMixin):
    queryset = Product.objects.all().annotate(_average_rating=Avg('rating__rate'))
    serializer_class = ProductDetailSerializer


class RatingViewSet(viewsets.GenericViewSet,
                    mixins.ListModelMixin):

    serializer_class = RatingSerializer
    queryset = Rating.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductRatingFilter
    pagination_class = StandardResultsSetPagination


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

    sizes_pool_male = [39, 40, 41, 42, 43, 44, 45, 46]
    sizes_pool_female = [35, 36, 37, 38, 39, 40, 41, 42]
    brands_pool = ["Nike", "Adidas", 'New Balance', 'Puma', 'Reebok']
    models_pool = ['random_1', 'random_2', 'random_3', 'random_4', 'random_5']
    colors_pool = ["red", "black", "blue", "purple", "orange", "white", "magenta"]
    type_pool = ['lifestyle', 'skateboarding', 'sport', 'sneakers']
    pic = ProductPictures.objects.get(id=1)

    description = "Lorem ipsum dolor sit amet consectetur, adipisicing" \
                  " elit. Vero velit atque tempora vitae ipsum veritatis" \
                  " quas dolore quod tempore possimus, molestias voluptate" \
                  " natus distinctio asperiores est adipisci laboriosam suscipit." \
                  " Eius? Tempore maxime inventore doloremque cum hic reprehenderit" \
                  " sint molestias nesciunt, animi corrupti id voluptatum, expedita" \
                  " dolorem, aliquid quas unde temporibus! Tempora velit odit harum!" \
                  " Tenetur odit corrupti vitae animi veniam."

    random_sizes_range = []
    for i in range(amount):
        if gen == "female":
            random_sizes_range = sizes_pool_female[random.randint(0, 4):random.randint(5, 7)]

        if gen == "male":
            random_sizes_range = sizes_pool_male[random.randint(0, 4):random.randint(5, 7)]

        random_colors = []
        for x in range(5):
            random_choice_color = random.choice(colors_pool)
            if random_choice_color not in random_colors:
                random_colors.append(random_choice_color)

        random_price = random.randrange(6, 90) * 10
        random_discount = random.randint(1, 3)

        if random_discount == 3:
            random_discount = random_price / 2 + 9.99

        else:
            random_discount = None

        random_price = random_price + 9.99

        prod = Product.objects.create(brand=random.choice(brands_pool),
                                      model=random.choice(models_pool),
                                      price=random_price,
                                      gender=gen,
                                      sizes=random_sizes_range,
                                      colors=random_colors,
                                      for_kids=kds,
                                      type=random.choice(type_pool),
                                      desc=description,
                                      discount_price=random_discount
                                      )

        ProductPictures.objects.create(model=prod,
                                       picture=pic.picture,
                                       primary_placeholder=True
                                       )

    return redirect("products_all")
