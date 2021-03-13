from django.contrib import admin
from .models import Company, FinancialDetails


admin.site.register(Company)
admin.site.register(FinancialDetails)