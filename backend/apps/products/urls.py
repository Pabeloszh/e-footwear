from rest_framework.routers import DefaultRouter

from apps.products import views


router = DefaultRouter()
router.register('shoes', views.ProductsViewSet)


urlpatterns = router.urls
