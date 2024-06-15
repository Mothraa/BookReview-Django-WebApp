from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.conf import settings

from authentication.forms import LoginForm, UserRegistrationForm


def login_page(request):
    if request.user.is_authenticated:
        return redirect('home')

    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(
                username=form.cleaned_data['email'],
                password=form.cleaned_data['password'],
            )
            if user:
                login(request, user)
                return redirect(settings.LOGIN_REDIRECT_URL)
            else:
                form.add_error(None, "Identifiant ou mot de passe invalide.")
    return render(
        request, 'authentication/login.html', context={'form': form}
    )



def logout_user(request):
    logout(request)
    return redirect("authentication-login")


def signup(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            # TODO connecter l'utilisateur
            return redirect('authentication-login')
    else:
        # on affiche le formulaire vide
        form = UserRegistrationForm()

    return render(request, "authentication/signup.html", {"form": form})
