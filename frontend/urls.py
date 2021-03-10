from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('Register', views.index),
    path('Login', views.index),
    path('Explore', views.index),
    path('Contract', views.index),
    path('Dashboard', views.index),
    path('About', views.index),
]