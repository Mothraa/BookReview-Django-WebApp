# from django.contrib import admin
from django.urls import path

from ticket.views import home, flux, posts, create_ticket, create_review, subscription, remove_subscription

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
    path('subscription/', subscription, name='subscription'),
    path('subscription/remove/<int:subscription_id>/', remove_subscription, name='remove_subscription'),
]