from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import CustomUser


class LoginForm(forms.Form):
    email = forms.CharField(max_length=127, label="E-mail")
    password = forms.CharField(max_length=63, widget=forms.PasswordInput, label="Mot de passe")


class UserRegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ("email", "nickname",)
