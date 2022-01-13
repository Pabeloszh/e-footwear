from django_filters import rest_framework as filters
from .models import Product


# For postgres ArrayField filtering
class CharArrayFilter(filters.BaseCSVFilter, filters.CharFilter):
    pass


class ProductsFilter(filters.FilterSet):

    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')
    discount_price = filters.NumberFilter(field_name='discount_price', lookup_expr='isnull', exclude=True)

    colors = CharArrayFilter(lookup_expr='overlap')
    sizes = CharArrayFilter(lookup_expr='overlap')

    o = filters.OrderingFilter(
        fields=(
            ('price', 'price'),
            ('date_added', 'date_added'),
            ('_average_rating', '_average_rating'),
            ('discount_price', 'discount_price')
        )
    )

    class Meta:
        model = Product
        fields = {
            'brand': ['in'],
            'model': ['in'],
            'type': ['in'],
            'gender': ['contains'],
            'for_kids': ['contains'],

        }


