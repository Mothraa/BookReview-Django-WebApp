from django import template
from django.utils.safestring import mark_safe

register = template.Library()

@register.filter(name='add_attributes')
def add_attributes(field, css_and_placeholder):
    # Django ne permet pas directement d'utiliser plusieurs arguments dans les filtres de modèle, a creuser
    css, placeholder = css_and_placeholder.split(',')
    return mark_safe(field.as_widget(attrs={"class": css, "placeholder": placeholder}))


# from django import template
# from django.utils.safestring import mark_safe

# register = template.Library()


# @register.filter(name='add_class')
# def add_class(field, css):
#     return mark_safe(field.as_widget(attrs={"class": css}))


# @register.filter(name='add_placeholder')
# def add_placeholder(field, text):
#     return mark_safe(field.as_widget(attrs={"placeholder": text}))
