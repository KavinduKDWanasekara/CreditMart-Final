from django.shortcuts import render
from django.contrib.auth.models import User, auth
from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, CompanySerializer, TokenSerializer
from .models import Company


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]


class Logout(APIView):

    def get(self, request):
        # simply delete the token to force a login
        token_var = request.headers.get('Authorization')
        try:
            queryset = Token.objects.get(key=token_var[6:])
            user_serializer = UserSerializer(queryset.user)
            queryset.delete()
            return Response({
                "message": "user logged out",
                "user-data": user_serializer.data
            })
        except Token.DoesNotExist as ex:
            print(ex)
            content = {"message": "Token does not exist"}
            return Response(content)
