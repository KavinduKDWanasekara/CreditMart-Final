from django.urls import path
from rest_framework import routers
from backend.views.user_views import UserViewSet, Logout, Profile
from backend.views.financial_views import ProbabilityOFDefault, FinancialDetail
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('logout', Logout.as_view()),
    path('profile', Profile.as_view()),
    path('fdetails', FinancialDetail.as_view()),
    path('pd', ProbabilityOFDefault.as_view())
]
