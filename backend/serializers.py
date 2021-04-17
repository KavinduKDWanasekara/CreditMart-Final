from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Company, FinancialDetails


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]


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
                  "total_assets",
                  "profit_on_sales",
                  "interest_expenses",
                  "ebitda",
                  "ebit",
                  "cost_of_products_sold",
                  "sales",
                  "depreciation",
                  "profit_on_operating_activities",
                  "extraordinary_items",
                  "total_expenses",
                  "short_term_liabilities",
                  "total_liabilities",
                  "pd",
                  "credit_limit"]


class PDSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialDetails
        fields = ["financial_year", "pd"]


class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialDetails
        fields = ["financial_year", "sales"]
