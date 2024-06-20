from django import template
from django.utils.safestring import mark_safe
from django.forms.boundfield import BoundField

register = template.Library()

@register.filter(name='add_attributes')
def add_attributes(field, css_and_placeholder):
    if isinstance(field, BoundField):  # Vérifie si field est un objet de champ de formulaire lié
        if ';' in css_and_placeholder:
            css, placeholder = css_and_placeholder.split(';')
        else:
            css = css_and_placeholder
            placeholder = ''

        # Ajoute les attributs CSS et placeholder au widget du champ
        field.field.widget.attrs.update({'class': css.strip(), 'placeholder': placeholder.strip()})
        return field.as_widget()  # Utilise la méthode as_widget() pour rendre le champ avec les nouveaux attributs
    else:
        return field  # Renvoie la valeur d'origine si ce n'est pas un champ de formulaire
