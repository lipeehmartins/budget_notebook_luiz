from rest_framework import generics
from .serializers import UserSignUpSerializer, UserSignInSerializer
from django.http import JsonResponse
from .models import User

class UserSignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer

class UserSignIn(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignInSerializer
