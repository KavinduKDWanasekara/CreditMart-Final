from django.urls import path
from . import views
from rest_framework import routers
from .views import UserViewSet, CompanyViewSet, Logout, Profile, probability_of_default, FinancialDetail
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('companies', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('logout', Logout.as_view()),
    path('profile', Profile.as_view()),
    path('fdetails', FinancialDetail.as_view()),
    path('pd', probability_of_default)
]
