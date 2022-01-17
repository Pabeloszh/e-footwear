from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import LikedProducts
from .serializers import UserSerializer, LikedProductsSerializer, AddLikedProductSerializer


class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer


class ManageUserView(RetrieveUpdateAPIView):
    # Manage authenticated user
    serializer_class = UserSerializer

    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        # Retrieve and return authenticated user
        return self.request.user


class LikedProductsView(ListAPIView):

    serializer_class = LikedProductsSerializer
    queryset = LikedProducts.objects.all()

    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = self.queryset

        queryset = queryset.filter(user=self.request.user)

        return queryset


class AddLikedProduct(CreateAPIView):

    serializer_class = AddLikedProductSerializer

    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        data = request.data
        data["user"] = self.request.user.id
        serializer = self.get_serializer(data=data)
        return super().create(request, *args, **kwargs)
