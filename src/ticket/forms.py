from django import forms

from .models import Ticket, Review


class PhotoForm(forms.ModelForm):
    class Meta:
        model = Ticket
        fields = ("image",)


class TicketForm(forms.ModelForm):
    class Meta:
        model = Ticket
        fields = ['title', 'description', 'image']


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['rating', 'headline', 'body'] # 'ticket', 
        # exclude = ['ticket']
