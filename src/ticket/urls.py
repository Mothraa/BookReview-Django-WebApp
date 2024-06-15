# from django.contrib import admin
from django.urls import path

from ticket.views import home, flux, posts, abonnements

urlpatterns = [
    path('home/', home, name='home'),
    path('flux/', flux, name='flux'),
    path('posts', posts, name='posts'),
    path('abonnements', abonnements, name='abonnements'),
]
