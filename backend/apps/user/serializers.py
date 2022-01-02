from rest_framework import serializers
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()

        fields = ['email', 'password', 'first_name', 'last_name', 'phone_number']
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 6}
        }

    def create(self, validated_data):
        # Create a new user with encrypted password and return it
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        # Update user setting the password correctly and return it
        # Remove password from display
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user

