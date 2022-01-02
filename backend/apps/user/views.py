from django.shortcuts import render
from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


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
