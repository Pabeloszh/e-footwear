import random

from django.shortcuts import redirect
from apps.user.models import User
from apps.products.models import ProductPictures, Product
from .models import Rating


def populate_db(request):
    """Function populating database with randomized shoes"""

    amount = int(request.GET.get('amount', None))
    gen = request.GET.get('gender')
    kds = bool(request.GET.get('kids', False))

    sizes_pool_male = [39, 40, 41, 42, 43, 44, 45, 46]
    sizes_pool_female = [35, 36, 37, 38, 39, 40, 41, 42]
    sizes_pool_kids = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    brands_pool = ["Nike", "Adidas", 'New Balance', 'Puma', 'Reebok']
    models_pool = ['random_1', 'random_2', 'random_3', 'random_4', 'random_5']
    colors_pool = ["red", "black", "blue", "purple", "brown", 'green']
    type_pool = ['lifestyle', 'skateboarding', 'sport', 'sneakers']
    pic = ProductPictures.objects.filter().first()

    description = "Lorem ipsum dolor sit amet consectetur, adipisicing" \
                  " elit. Vero velit atque tempora vitae ipsum veritatis" \
                  " quas dolore quod tempore possimus, molestias voluptate" \
                  " natus distinctio asperiores est adipisci laboriosam suscipit." \
                  " Eius? Tempore maxime inventore doloremque cum hic reprehenderit" \
                  " sint molestias nesciunt, animi corrupti id voluptatum, expedita" \
                  " dolorem, aliquid quas unde temporibus! Tempora velit odit harum!" \
                  " Tenetur odit corrupti vitae animi veniam."

    random_sizes_range = []
    print(kds)
    for i in range(amount):

        if kds:
            random_sizes_range = sizes_pool_kids[random.randint(0, 6):random.randint(7, 14)]

        elif gen == "female":
            random_sizes_range = sizes_pool_female[random.randint(0, 4):random.randint(5, 7)]

        elif gen == "male":
            random_sizes_range = sizes_pool_male[random.randint(0, 4):random.randint(5, 7)]

        random_colors = []
        for x in range(4):
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


def populate_with_users(request):
    """Populate database with users to be used in creating reviews"""
    amount = int(request.GET.get('amount', None))
    if amount > 15:
        raise ConnectionRefusedError
    for i in range(amount):
        User.objects.create(email=f'test{i}@test{i}.com',
                            password='password123')

    return redirect("products_all")


def populate_reviews(request):
    """Create reviews with random rating for every shoe in database"""
    users = User.objects.all()
    products = Product.objects.all()
    message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." \
              " Fusce est tortor, cursus sed arcu sit amet, porta pulvinar" \
              " arcu. Nam varius ut sem id tempor." \
              " Donec placerat turpis ac metus rhoncus, in pellentesque augue" \
              " egestas. Lorem ipsum dolor sit amet."

    for product in products:
        for user in users:
            rate = random.randint(1, 5)
            Rating.objects.create(model=product,
                                  user=user,
                                  rate=rate,
                                  message=message)
    return redirect("list_reviews")
