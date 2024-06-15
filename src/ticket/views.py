from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
    return render(request, 'ticket/home.html')


@login_required
def flux(request):
    return render(request, 'ticket/flux.html')


@login_required
def posts(request):
    return render(request, 'ticket/home.html')


@login_required
def abonnements(request):
    return render(request, 'ticket/home.html')
