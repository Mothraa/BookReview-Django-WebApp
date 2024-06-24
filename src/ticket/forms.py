from django import forms

from .models import Ticket, Review, UserFollows


# class PhotoForm(forms.ModelForm):
#     class Meta:
#         model = Ticket
#         fields = ("image",)


class TicketForm(forms.ModelForm):
    # edit_ticket = forms.BooleanField(widget=forms.HiddenInput, initial=True)

    class Meta:
        model = Ticket
        fields = ['title', 'description', 'image']


class EditTicketForm(TicketForm):
    edit_ticket = forms.BooleanField(widget=forms.HiddenInput, initial=True)


class DeleteTicketForm(forms.Form):
    delete_ticket = forms.BooleanField(widget=forms.HiddenInput, initial=True)


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['rating', 'headline', 'body', 'ticket']
        exclude = ['ticket']


class FollowerForm(forms.Form):
    followed_user = forms.CharField(
        widget=forms.TextInput(attrs={
            # TODO : a revoir, pas eu besoin de ca pour l'authentification
            'class': 'form-input w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        })
    )

    class Meta:
        model = UserFollows
        fields = ['user', 'followed_user']
