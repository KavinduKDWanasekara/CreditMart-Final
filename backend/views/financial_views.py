from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.models import Company, FinancialDetails
from backend.serializers import FinancialDetailSerializer, PDSerializer, SalesSerializer, CreditLimitSerializer
import traceback
import os
import math
from pathlib import Path
from . import credit_limit_model
BASE_DIR = Path(__file__).resolve().parent.parent


# getting PD prediction for company data
def getProbabilityOfDefault(total_assets,
                            profit_on_sales,
                            interest_expenses,
                            ebitda,
                            ebit,
                            cost_of_products_sold,
                            sales,
                            depreciation,
                            profit_on_operating_activities,
                            extraordinary_items,
                            total_expenses,
                            short_term_liabilities,
                            total_liabilities):
    gross_profit = sales - cost_of_products_sold
    net_profit = gross_profit - total_expenses

    indicator1 = net_profit / total_assets
    indicator2 = profit_on_sales / total_assets
    indicator3 = math.log(total_assets)
    indicator4 = (gross_profit + interest_expenses) / total_assets
    indicator5 = ebit / total_assets
    indicator6 = (gross_profit + extraordinary_items + total_expenses) / total_assets
    indicator7 = profit_on_operating_activities / total_assets
    indicator8 = (sales - cost_of_products_sold) / sales
    indicator9 = profit_on_sales / sales
    indicator10 = gross_profit / total_assets
    indicator11 = gross_profit / short_term_liabilities
    indicator12 = (net_profit + depreciation) / total_liabilities
    indicator13 = (gross_profit + depreciation) / total_liabilities
    indicator14 = (ebitda * (profit_on_operating_activities - depreciation)) / total_assets

    import pickle
    with open(os.path.join(BASE_DIR, 'views/probability_of_default_model-14-features.pkl'), 'rb') as file:
        PD_Model = pickle.load(file)

    prediction = PD_Model.predict_proba([[indicator1, indicator2, indicator3, indicator4,
                                          indicator5, indicator6, indicator7, indicator8, indicator9,
                                          indicator10, indicator11, indicator12, indicator13, indicator14]])

    return prediction


class FinancialDetail(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    """
    https//:xxx/api/fdetails

    """

    def get(self, request):
        token = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token[6:])
        user_obj = token_obj.user
        try:
            company = Company.objects.get(user=user_obj)
            queryset = FinancialDetails.objects.filter(company=company).order_by("financial_year").reverse()
            financial_d_serializer = FinancialDetailSerializer(queryset, many=True)
            return Response({
                "financial_details": financial_d_serializer.data
            })

        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "Company profile not yet created",
                "detail": "Cannot get financial details since company has not been created yet"
            }, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        global company_obj, financial_year, total_assets, profit_on_sales, interest_expenses, ebitda, ebit, cost_of_products_sold, sales, depreciation, profit_on_operating_activities, extraordinary_items, total_expenses, short_term_liabilities, total_liabilities, pd_val, credit_limit
        token = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token[6:])
        user_obj = token_obj.user
        data_dict = request.data
        try:
            company_obj = Company.objects.get(user=user_obj)
            financial_year = int(data_dict["financial_year"])
            total_assets = float(data_dict["total_assets"])
            interest_expenses = float(data_dict["interest_expenses"])
            profit_on_sales = float(data_dict["profit_on_sales"])
            ebitda = float(data_dict["ebitda"])
            ebit = float(data_dict["ebit"])
            cost_of_products_sold = float(data_dict["cost_of_products_sold"])
            sales = float(data_dict["sales"])
            short_term_liabilities = float(data_dict["short_term_liabilities"])
            depreciation = float(data_dict["depreciation"])
            profit_on_operating_activities = float(data_dict["profit_on_operating_activities"])
            extraordinary_items = float(data_dict["extraordinary_items"])
            total_liabilities = float(data_dict["total_liabilities"])
            total_expenses = float(data_dict["total_expenses"])

            pd = getProbabilityOfDefault(total_assets,
                                         profit_on_sales,
                                         interest_expenses,
                                         ebitda,
                                         ebit,
                                         cost_of_products_sold,
                                         sales,
                                         depreciation,
                                         profit_on_operating_activities,
                                         extraordinary_items,
                                         total_expenses,
                                         short_term_liabilities,
                                         total_liabilities)
            pd_val = pd[0][1]
            credit_limit = credit_limit_model.margin(pd_val, sales)

            # Update existing details in a particular year
            financial_d = FinancialDetails.objects.get(company=company_obj, financial_year=financial_year)
            financial_d.total_assets = total_assets
            financial_d.interest_expenses = interest_expenses
            financial_d.profit_on_sales = profit_on_sales
            financial_d.ebitda = ebitda
            financial_d.ebit = ebit
            financial_d.cost_of_products_sold = cost_of_products_sold
            financial_d.sales = sales
            financial_d.short_term_liabilities = short_term_liabilities
            financial_d.depreciation = depreciation
            financial_d.profit_on_operating_activities = profit_on_operating_activities
            financial_d.extraordinary_items = extraordinary_items
            financial_d.pd_val = pd_val
            financial_d.credit_limit = credit_limit
            financial_d.save()
            financial_d_serializer = FinancialDetailSerializer(financial_d)

            print("Company financial details for the year ", financial_year, " updated")

            return Response({
                "message": "financial details for the year " + str(financial_year) + " updated",
                "detail": financial_d_serializer.data
            })
        except FinancialDetails.DoesNotExist as e:
            print(e)
            financial_d = FinancialDetails.objects.create(company=company_obj,
                                                          financial_year=financial_year,
                                                          total_assets=total_assets,
                                                          profit_on_sales=profit_on_sales,
                                                          interest_expenses=interest_expenses,
                                                          ebitda=ebitda,
                                                          ebit=ebit,
                                                          cost_of_products_sold=cost_of_products_sold,
                                                          sales=sales,
                                                          depreciation=depreciation,
                                                          profit_on_operating_activities=profit_on_operating_activities,
                                                          extraordinary_items=extraordinary_items,
                                                          total_expenses=total_expenses,
                                                          short_term_liabilities=short_term_liabilities,
                                                          total_liabilities=total_liabilities,
                                                          pd=pd_val,
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
                "message": "Company data not yet specified",
                "detail": "Cannot create financial details since company has not yet been created"
            }, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            print(e)
            traceback.print_exc()
            return Response({
                "message": "An unexpected error has occurred",
            }, status=status.HTTP_400_BAD_REQUEST)


class ProbabilityOFDefault(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token_var = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token_var[6:])
        user_obj = token_obj.user
        try:
            company_obj = Company.objects.get(user=user_obj)
            queryset = FinancialDetails.objects.filter(company=company_obj).order_by('financial_year')
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
            traceback.print_exc()
            return Response({
                "message": "An unexpected error has occurred",
            }, status=status.HTTP_400_BAD_REQUEST)


class Sales(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token_var = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token_var[6:])
        user_obj = token_obj.user
        try:
            company = Company.objects.get(user=user_obj)
            queryset = FinancialDetails.objects.filter(company=company).order_by('financial_year')
            sales_serializer = SalesSerializer(queryset, many=True)
            return Response({
                "financial_data": sales_serializer.data
            })

        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "Company profile not yet created"
            }, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            print(e)
            traceback.print_exc()
            return Response({
                "message": "An unexpected error has occurred",
            }, status=status.HTTP_400_BAD_REQUEST)


class CreditLimit(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        token_var = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token_var[6:])
        user_obj = token_obj.user
        try:
            company = Company.objects.get(user=user_obj)
            queryset = FinancialDetails.objects.filter(company=company).order_by('financial_year').reverse()[:1]
            credit_limit_serializer = CreditLimitSerializer(queryset, many=True)
            return Response({
                "message": credit_limit_serializer.data
            })

        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "Company profile not yet created"
            })
