from django.db import models
from django.contrib.auth.models import User
'''
Company class includes company details and
has a one to one relationship with django user authentication
'''


class Company(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=225)
    contact_number = models.IntegerField()
    location = models.CharField(max_length=255, default='Sri Lanka')
    business_type = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.company_name


'''
Company class has a one to many relationship with FinancialDetails
Financial details of a company can be differentiated using financial years
--------------------------- 
Calculated Financial Ratios
---------------------------
ReturnOnEquity = NetIncome/ShareholderEquity
EBIT = Revenue - (CostOFGoodsSold + OperatingExpenses)
EBIT = NetIncome + Interest + Tax
receicables_turnover = net_credit_sales / accounts_receivables
'''


class FinancialDetails(models.Model):
    financial_year = models.IntegerField()
    total_assets = models.FloatField(max_length=255)
    interest_expenses = models.FloatField(max_length=255)
    profit_on_sales = models.FloatField(max_length=255)
    ebitda = models.FloatField(max_length=255)
    ebit = models.FloatField(max_length=255)
    cost_of_products_sold = models.FloatField(max_length=255)
    sales = models.FloatField(max_length=255)
    short_term_liabilities = models.FloatField(max_length=255)
    depreciation = models.FloatField(max_length=255)
    profit_on_operating_activities = models.FloatField(max_length=255)
    extraordinary_items = models.FloatField(max_length=255)
    total_expenses = models.FloatField(max_length=255)
    total_liabilities = models.FloatField(max_length=255)
    pd = models.FloatField(max_length=255)
    credit_limit = models.FloatField(max_length=255)

    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.company, " financial info - ", self.financial_year
