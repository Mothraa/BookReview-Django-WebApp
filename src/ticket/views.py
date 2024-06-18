from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from .forms import Ticket, TicketForm, ReviewForm

@login_required
def home(request):
    return render(request, 'ticket/home.html')


@login_required
def flux(request):
    tickets = Ticket.objects.all()
    return render(request, 'ticket/flux.html', context={'tickets': tickets})


@login_required
def posts(request):
    return render(request, 'ticket/home.html')


@login_required
def abonnements(request):
    return render(request, 'ticket/home.html')


@login_required
def create_ticket(request):
    if request.method == 'POST':
        form = TicketForm(request.POST, request.FILES)
        if form.is_valid():
            ticket = form.save(commit=False)
            ticket.user = request.user
            ticket.save()
            return redirect('flux')
    else:
        form = TicketForm()
    return render(request, 'ticket/create_ticket.html', {'form': form})


@login_required
def create_review(request):
    if request.method == 'POST':
        ticket_form = TicketForm(request.POST, request.FILES)
        review_form = ReviewForm(request.POST)
        if all([ticket_form.is_valid(), review_form.is_valid()]):
            ticket = ticket_form.save(commit=False)
            ticket.user = request.user
            ticket.save()

            review = review_form.save(commit=False)
            review.user = request.user
            review.ticket = ticket  # on récupère le ticket qui vient d'etre créé pour y assigner la review
            review.save()

            messages.success(request, "Ticket et critique créées avec succès.")
            return redirect('flux')
        else:
            messages.error(
                request,
                "Erreur lors de la création du ticket.\
                Si l'erreur persiste veuillez prendre contact avec votre administrateur."
            )
    else:
        ticket_form = TicketForm()
        review_form = ReviewForm()
    return render(request, 'ticket/create_review.html', {
        'ticket_form': ticket_form,
        'review_form': review_form,
    })