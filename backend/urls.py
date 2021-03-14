from django.urls import path
from . import views
from rest_framework import routers
from .views import UserViewSet
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('pd', include(views.financialData)),
]
