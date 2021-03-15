from django.urls import path
from . import views
from rest_framework import routers
from .views import UserViewSet, CompanyViewSet, Logout
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('companies', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('logout', Logout.as_view())
]
