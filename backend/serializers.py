from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Company, FinancialDetails


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["company_name",
                  "contact_number",
                  "location",
                  "business_type",
                  "description"]


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ["key", "user"]


class FinancialDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialDetails
        fields = ["financial_year",
                  "current_assets",
                  "current_liabilities",
                  "working_capital",
                  "total_assets",
                  "net_income",
                  "total_shareholders_equity",
                  "total_debt",
                  "long_term_debt",
                  "interest_expenses",
                  "cash_equivalents",
                  "total_liabilities",
                  "net_credit_sales",
                  "accounts_receivables",
                  "ebit",
                  "pd",
                  "credit_limit"]


class PDSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialDetails
        fields = ["financial_year", "pd"]
