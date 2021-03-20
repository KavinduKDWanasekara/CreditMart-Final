from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.models import Company
from backend.serializers import UserSerializer, CompanySerializer
import traceback


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class Logout(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # simply delete the token to force a login
        token = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token[6:])
        user_serializer = UserSerializer(token_obj.user)
        token_obj.delete()
        return Response({
            "message": "user logged out",
            "user-data": user_serializer.data
        })


class Profile(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    """
    https//:xxx/api/profile
    The profile api accepts 'GET' and 'POST' request 
    ONLY authorized(logged in) users can use this api
    GET - returns company details
    POST - creates company or updates existing company details 
    """

    def get(self, request):
        token = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token[6:])
        user = token_obj.user

        try:
            company = Company.objects.get(user=user)
            company_serializer = CompanySerializer(company)
            return Response({
                "company": company_serializer.data
            })

        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "no company added"
            })

        except Exception as e:
            print(e)
            traceback.print_exc()
            return Response({
                "message": "an unexpected error has occurred"
            }, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        token_var = request.headers.get('Authorization')
        token = Token.objects.get(key=token_var[6:])
        user = token.user
        try:
            company_name = request.data["company_name"]
            contact_number = request.data["contact_number"]
            location = request.data["location"]
            business_type = request.data["business_type"]
            description = request.data["description"]
            """
            Get existing company and update or create new company 
            if company does not exist 
            """

            company = Company.objects.get(user=user)
            company.company_name = company_name
            company.contact_number = contact_number
            company.location = location
            company.business_type = business_type
            company.description = description
            company.save()
            company_serializer = CompanySerializer(company)
            print("Company updated", company)
            return Response({
                "message": "company details updated",
                "detail": company_serializer.data
            })

        except Company.DoesNotExist as e:
            print(e)
            company = Company.objects.create(company_name=company_name,
                                             contact_number=contact_number,
                                             location=location,
                                             business_type=business_type,
                                             description=description,
                                             user=user)
            company.save()
            print("Company created", company)
            company_serializer = CompanySerializer(company)
            content = {"company": company_serializer.data}
            return Response(content, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e)
            traceback.print_exc()
            return Response({
                "message": "an unexpected error has occurred",
            }, status=status.HTTP_400_BAD_REQUEST)
