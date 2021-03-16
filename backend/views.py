from django.shortcuts import render
from django.contrib.auth.models import User, auth
from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, CompanySerializer, TokenSerializer, FinancialDetailSerializer, PDSerializer
from .models import Company, FinancialDetails



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



# getting PD prediction for company data
def getProbabilityOfDefault(current_assets, current_liabilities, working_capital, total_assets, cash_equivalents,
                            net_income,
                            receivables_turnover, total_shareholders_equity, total_debt, interest_expenses,
                            return_on_equity,
                            ebit, total_liabilities, long_term_debt):
    indicator01 = current_assets / current_liabilities
    indicator02 = working_capital / total_assets
    indicator03 = current_liabilities / current_assets
    indicator04 = current_liabilities / total_assets
    indicator05 = cash_equivalents / current_liabilities
    indicator06 = net_income / total_assets
    indicator07 = net_income / return_on_equity
    indicator08 = net_income / receivables_turnover
    indicator09 = ebit / total_assets
    indicator10 = total_debt / total_shareholders_equity
    indicator11 = total_debt / total_assets
    indicator12 = ebit / interest_expenses
    indicator13 = total_liabilities / total_assets
    indicator14 = total_shareholders_equity / total_assets
    indicator15 = long_term_debt / total_assets
    indicator16 = total_debt / total_debt
    indicator17 = total_debt / current_assets
    indicator18 = total_debt / (total_assets - total_debt)
    indicator19 = total_debt / total_liabilities

    import pickle
    with open("probability_of_default_model.pkl", 'rb') as file:
        PD_Model = pickle.load(file)

    with open("scaler.pkl", 'rb') as file:
        scaler = pickle.load(file)
#    prediction = PD_Model.predict(scaler.transform([[indicator01, indicator02, indicator02, indicator03, indicator04,
#                                                 indicator05, indicator06, indicator07, indicator08, indicator09,
#                                                  indicator10, indicator11, indicator12, indicator13, indicator14,
#                                                  indicator15, indicator16, indicator17, indicator18, indicator19]]))

    prediction = PD_Model.predict_proba([[indicator01, indicator02, indicator02, indicator03, indicator04,
                                                     indicator05, indicator06, indicator07, indicator08, indicator09,
                                                     indicator10, indicator11, indicator12, indicator13, indicator14,
                                                     indicator15, indicator16, indicator17, indicator18, indicator19]])

    return prediction



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
            return Response(content, status=status.HTTP_403_FORBIDDEN)


class Profile(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token_var = request.headers.get('Authorization')
        try:
            token = Token.objects.get(key=token_var[6:])
            user = token.user
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
            return Response({
                "message": "an unexpected error has occurred",
                "details": e
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
            try:
                company = Company.objects.get(user=user)
                company.company_name = company_name
                company.contact_number = contact_number
                company.location = location
                company.business_type = business_type
                company.description = description
                company.save()
                print("Company updated")
            except Company.DoesNotExist as e:
                print(e)
                company = Company.objects.create(company_name=company_name,
                                                 contact_number=contact_number,
                                                 location=location,
                                                 business_type=business_type,
                                                 description=description,
                                                 user=user)
                company.save()
                print("Company created")
            finally:
                company_serializer = CompanySerializer(company)
                content = {"company": company_serializer.data}
                return Response(content, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e)
            return Response({
                "message": "an unexpected error has occurred",
                "details": e
            }, status=status.HTTP_400_BAD_REQUEST)


class FinancialDetail(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token_var = request.headers.get('Authorization')
        token = Token.objects.get(key=token_var[6:])
        user_obj = token.user
        try:
            company_obj = Company.objects.get(user=user_obj)
            queryset = FinancialDetails.objects.filter(company=company_obj)
            financial_d_serializer = FinancialDetailSerializer(queryset, many=True)
            return Response({
                "financial_details": financial_d_serializer.data
            })
        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "Company data not yet specified"
            }, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        token_var = request.headers.get('Authorization')
        token = Token.objects.get(key=token_var[6:])
        user_obj = token.user
        data_dict = request.data
        try:
            company_obj = Company.objects.get(user=user_obj)
            financial_year = int(data_dict["financial_year"])
            current_assets = float(data_dict["current_assets"])
            current_liabilities = float(data_dict["current_liabilities"])
            working_capital = float(data_dict["working_capital"])
            total_assets = float(data_dict["total_assets"])
            net_income = float(data_dict["net_income"])
            total_shareholders_equity = float(data_dict["total_shareholders_equity"])
            total_debt = float(data_dict["total_debt"])
            long_term_debt = float(data_dict["long_term_debt"])
            interest_expenses = float(data_dict["interest_expenses"])
            cash_equivalents = float(data_dict["cash_equivalents"])
            total_liabilities = float(data_dict["total_liabilities"])
            net_credit_sales = float(data_dict["net_credit_sales"])
            accounts_receivables = float(data_dict["accounts_receivables"])
            ebit = float(data_dict["ebit"])
            pd = float(data_dict["pd"])
            credit_limit = float(data_dict["credit_limit"])

            financial_d = FinancialDetails.objects.create(company=company_obj,
                                                          financial_year=financial_year,
                                                          current_assets=current_assets,
                                                          current_liabilities=current_liabilities,
                                                          working_capital=working_capital,
                                                          total_assets=total_assets,
                                                          net_income=net_income,
                                                          total_shareholders_equity=total_shareholders_equity,
                                                          total_debt=total_debt,
                                                          long_term_debt=long_term_debt,
                                                          interest_expenses=interest_expenses,
                                                          cash_equivalents=cash_equivalents,
                                                          total_liabilities=total_liabilities,
                                                          net_credit_sales=net_credit_sales,
                                                          accounts_receivables=accounts_receivables,
                                                          ebit=ebit,
                                                          pd=pd,
                                                          credit_limit=credit_limit)
            financial_d.save()
            financial_d_serializer = FinancialDetailSerializer(financial_d)
            return Response({
                "message": "financial details created",
                "detail": financial_d_serializer.data
            }, status=status.HTTP_201_CREATED)
        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "Company data not yet specified"
            }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response({
                "message": "An unexpected error has occurred",
                "detail": e
            }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes((TokenAuthentication,))
def probability_of_default(request):
    token_var = request.headers.get('Authorization')
    token_obj = Token.objects.get(key=token_var[6:])
    user_obj = token_obj.user
    try:
        company_obj = Company.objects.get(user=user_obj)
        queryset = FinancialDetails.objects.filter(company=company_obj)
        pd_serializer = PDSerializer(queryset, many=True)
        return Response({
            "financial_data": pd_serializer.data
        })
    except Company.DoesNotExist as e:
        print(e)
        return Response({
            "message": "Company data not yet specified"
        }, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        print(e)
        return Response({
            "message": "An unexpected error has occurred",
            "details": e
        }, status=status.HTTP_400_BAD_REQUEST)
