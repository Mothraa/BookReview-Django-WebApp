# from django.contrib import admin
from django.urls import path

from ticket.views import (home,
                          flux,
                          posts,
                          create_ticket,
                          create_ticket_and_review,
                          create_review,
                          subscription,
                          remove_subscription,
                          ticket_edit,
                          ticket_delete,
                        #   review_reply,
                          review_edit,
                          review_delete,
                          )

urlpatterns = [
    path('home/', home, name='home'),
    path('flux/', flux, name='flux'),
    path('posts/', posts, name='posts'),
    path('subscription/', subscription, name='subscription'),
    path('subscription/remove/<int:subscription_id>/', remove_subscription, name='remove_subscription'),
    path('request/', create_ticket, name='demander_critique'),
    path('request_with_review/', create_ticket_and_review, name='create_ticket_and_review'),
    path('review/<int:review_id>/edit/', review_edit, name='edit_review'),
    path('review/<int:review_id>/delete/', review_delete, name='delete_review'),
    path('review/<int:ticket_id>/create/', create_review, name='create_review'),  # review/<int:ticket_id>
    path('<int:ticket_id>/edit/', ticket_edit, name='edit_ticket'),
    path('<int:ticket_id>/delete/', ticket_delete, name='delete_ticket'),

]
