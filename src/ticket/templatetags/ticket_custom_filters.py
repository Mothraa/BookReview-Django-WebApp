from django import template
from ..models import Review

register = template.Library()


@register.filter
def get(dictionary, key):
    return dictionary.get(key)


@register.filter(name='user_has_reviewed')
def user_has_reviewed(ticket, user):
    """
    Custom filter to check if the user has reviewed the given ticket.
    """
    return Review.objects.filter(ticket=ticket, user=user).exists()