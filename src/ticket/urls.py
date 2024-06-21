# from django.contrib import admin
from django.urls import path

from ticket.views import (home,
                          flux,
                          posts,
                          create_ticket,
                          create_review,
                          subscription,
                          remove_subscription,
                          ticket_edit,
                          ticket_delete,
                          review_edit,
                          review_delete,
                          )

urlpatterns = [
    path('home/', home, name='home'),
    path('flux/', flux, name='flux'),


    path('request/', create_ticket, name='demander_critique'),
    path('create/', create_review, name='creer_critique'),
    # path('edit_ticket/<int:ticket_id>/', views.edit_ticket, name='edit_ticket'),
    # path('delete_ticket/<int:ticket_id>/', views.delete_ticket, name='delete_ticket'),
    # path('edit_review/<int:review_id>/', views.edit_review, name='edit_review'),
    # path('delete_review/<int:review_id>/', views.delete_review, name='delete_review'),
    # path('unsubscribe/<int:subscription_id>/', views.unsubscribe, name='unsubscribe'),


    path('posts/', posts, name='posts'),
    path('ticket/<int:ticket_id>/edit/', ticket_edit, name='edit_ticket'),
    path('ticket/<int:ticket_id>/delete/', ticket_delete, name='delete_ticket'),
    path('review/<int:ticket_id>/edit/', review_edit, name='edit_review'),
    path('review/<int:ticket_id>/delete/', review_delete, name='delete_review'),
    path('subscription/', subscription, name='subscription'),
    path('subscription/remove/<int:subscription_id>/', remove_subscription, name='remove_subscription'),
]
