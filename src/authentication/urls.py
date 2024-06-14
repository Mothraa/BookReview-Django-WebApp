# from django.contrib import admin
from django.urls import path

from .views import login_page, logout_user, signup

urlpatterns = [
    # path('', index, name="authentication-index"),
    path('', login_page, name='authentication-login'),
    path('logout/', logout_user, name='authentication-logout'),
    path('account/create/', signup, name="signup"),
]
