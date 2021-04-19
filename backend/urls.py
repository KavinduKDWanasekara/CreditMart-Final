from django.urls import path
from backend.views.user_views import UserSignUp, Logout, Profile, SearchProfile, UserDetails
from backend.views.financial_views import ProbabilityOFDefault, FinancialDetail, Sales, CreditLimit


urlpatterns = [
    path('signup', UserSignUp.as_view(), name="user_signup"),
    path('user', UserDetails.as_view(), name="user_details"),
    path('logout', Logout.as_view(), name="logout"),
    path('profile', Profile.as_view(), name="company_profile"),
    path('fdetails', FinancialDetail.as_view(), name="financial_details"),
    path('pd', ProbabilityOFDefault.as_view(), name="probability_of_default"),
    path('sales', Sales.as_view(), name="sales_details"),
    path('climit', CreditLimit.as_view(), name="credit_limit"),
    path('search', SearchProfile.as_view(), name="search_profile")
]
