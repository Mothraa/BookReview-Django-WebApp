# from django.contrib import admin
from django.urls import path

from ticket.views import home

urlpatterns = [
    path('home/', home, name='home'),
]
