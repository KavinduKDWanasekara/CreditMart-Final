from django.db import models


class Company(models.Model):
    company_name = models.CharField(max_length=225)
    email = models.CharField(max_length=225)
    contact_number = models.IntegerField(max_length=10)

    def __str__(self):
        return self.company_name


class FinancialDetails(models.Model):
    current_assets = models.FloatField(max_length=255)
    current_liabilities = models.FloatField(max_length=255)
    working_capital = models.FloatField(max_length=255)
    total_assets = models.FloatField(max_length=255)
    net_income = models.FloatField(max_length=255)
    return_on_equity = models.FloatField(max_length=255)
    ebit = models.FloatField(max_length=255)
    total_equity_shareholders = models.FloatField(max_length=255)
    total_debt = models.FloatField(max_length=255)
    interest_expenses = models.FloatField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE())


