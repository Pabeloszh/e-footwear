from django_filters import rest_framework as filters
from .models import Product


# For postgres ArrayField filtering
class CharArrayFilter(filters.BaseCSVFilter, filters.CharFilter):
    pass


class ProductsFilter(filters.FilterSet):

    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')

    colors = CharArrayFilter(lookup_expr='overlap')
    sizes = CharArrayFilter(lookup_expr='overlap')


    class Meta:
        model = Product
        fields = {
            'brand': ['in'],
            'model': ['in'],

        }


