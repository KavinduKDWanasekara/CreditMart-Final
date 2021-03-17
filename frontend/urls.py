from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.index),
    path('login', views.index),
    path('explore', views.index),
    path('contract', views.index),
    path('dashboard', views.index),
    path('about', views.index),
    path('profile', views.index),
    path('profileaddinfo', views.index),
    path('editinfo', views.index)
]