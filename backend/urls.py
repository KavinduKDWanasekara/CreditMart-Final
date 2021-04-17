from django.urls import path
from backend.views.user_views import UserSignUp, Logout, Profile, SearchProfile
from backend.views.financial_views import ProbabilityOFDefault, FinancialDetail, Sales


urlpatterns = [
    path('signup', UserSignUp.as_view(), name="user_signup"),
    path('logout', Logout.as_view(), name="logout"),
    path('profile', Profile.as_view(), name="profile"),
    path('fdetails', FinancialDetail.as_view(), name="financial_details"),
    path('pd', ProbabilityOFDefault.as_view(), name="probability_of_default"),
    path('sales', Sales.as_view(), name="sales_details"),
    path('search', SearchProfile.as_view(), name="search_profile"),
]
