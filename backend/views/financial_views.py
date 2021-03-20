from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.models import Company, FinancialDetails
from backend.serializers import FinancialDetailSerializer, PDSerializer
import traceback
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


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
    with open(os.path.join(BASE_DIR, 'views/probability_of_default_model.pkl'), 'rb') as file:
        PD_Model = pickle.load(file)

    prediction = PD_Model.predict_proba([[indicator01, indicator02, indicator02, indicator03, indicator04,
                                          indicator05, indicator06, indicator07, indicator08, indicator09,
                                          indicator10, indicator11, indicator12, indicator13, indicator14,
                                          indicator15, indicator16, indicator17, indicator18, indicator19]])

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
            company_obj = Company.objects.get(user=user_obj)
            queryset = FinancialDetails.objects.filter(company=company_obj)
            financial_d_serializer = FinancialDetailSerializer(queryset, many=True)
            return Response({
                "financial_details": financial_d_serializer.data
            })

        except Company.DoesNotExist as e:
            print(e)
            return Response({
                "message": "Company data not yet specified",
                "detail": "Cannot get financial details since company has not been created yet"
            }, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        token = request.headers.get('Authorization')
        token_obj = Token.objects.get(key=token[6:])
        user_obj = token_obj.user
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

            receivables_turnover = net_credit_sales / accounts_receivables
            return_on_equity = net_income / total_shareholders_equity
            pd = getProbabilityOfDefault(current_assets, current_liabilities, working_capital,
                                         total_assets, cash_equivalents, net_income, receivables_turnover,
                                         total_shareholders_equity, total_debt, interest_expenses, return_on_equity,
                                         ebit, total_liabilities, long_term_debt)
            pd_val = pd[0][1]
            credit_limit = 0

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
