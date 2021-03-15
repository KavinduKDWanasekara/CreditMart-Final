from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.template.context_processors import request
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .serializers import UserSerializer


# @csrf_exempt
# def register(request):
#     if request.method == 'POST':
#         username = request.POST('username')
#         email = request.POST('email')
#         password = request.POST('password')
#
#         user = User.objects.create_user(username=username, email=email, password=password)
#         user.save()
#         print('User Created!!')
#     else:
#         return render(request, 'build/index.html')


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


def financialData(request):
    financial_year = float(request.GET['financial_year'])
    current_assets = float(request.GET('current_assets'))
    current_liabilities = float(request.GET('current_liabilities'))
    working_capital = float(request.GET('working_capital'))
    total_assets = float(request.GET('total_assets'))
    cash_equivalents = float(request.GET('cash_equivalents'))
    net_income = float(request.GET('net_income'))
    receivables_turnover = float(request.GET('receivables_turnover'))
    total_shareholders_equity = float(request.GET('total_shareholders_equity'))
    total_debt = float(request.GET('total_debt'))
    interest_expenses = float(request.GET('interest_expenses'))
    return_on_equity = float(request.GET('return_on_equity'))
    ebit = float(request.GET('ebit'))
    total_liabilities = float(request.GET('total_liabilities'))
    debt_to_equity = float(request.GET('debt_to_equity'))
    long_term_debt = float(request.GET('long_term_debt'))
    company = float(request.GET('company'))

    result = getProbabilityOfDefault(current_assets, current_liabilities, working_capital, total_assets,
                                     cash_equivalents, net_income,
                                     receivables_turnover, total_shareholders_equity, total_debt, interest_expenses,
                                     return_on_equity,
                                     ebit, total_liabilities, long_term_debt)

    print(result)
