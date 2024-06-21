# pour la génération de thumbnails
# snippet récupéré ici : http://mathieu.agopian.info/blog/django-redimensionner-une-image-a-la-volee-en-preservant-son-ratio.html
from os import path
from io import BytesIO, StringIO

from django.core.files.uploadedfile import SimpleUploadedFile
from django.conf import settings

from PIL import Image


def has_changed(instance, field, manager='objects'):
    """Returns true if a field has changed in a model

    May be used in a model.save() method.

    """
    if not instance.pk:
        return True
    manager = getattr(instance.__class__, manager)
    old = getattr(manager.get(pk=instance.pk), field)
    return not getattr(instance, field) == old


def save(self, *args, **kwargs):
    if has_changed(self, 'photo'):
        # on va convertir l'image en jpg
        filename = path.splitext(path.split(self.photo.name)[-1])[0]
        filename = "%s.jpg" % filename

        image = Image.open(self.photo.file)

        if image.mode not in ('L', 'RGB'):
            image = image.convert('RGB')

        # d'abord la photo elle-même
        self.photo.save(
                filename,
                create_thumb(image, settings.IMAGE_MAX_SIZE),
                save=False)

        # puis le thumbnail
        self.thumbnail.save(
                '_%s' % filename,
                create_thumb(image, settings.THUMB_MAX_SIZE),
                save=False)


def create_thumb(image, size):
    """Returns the image resized to fit inside a box of the given size"""
    image.thumbnail(size, Image.LANCZOS)
    # print("toto")
    temp = BytesIO()#StringIO()
    image.save(temp, 'jpeg')
    temp.seek(0)
    return SimpleUploadedFile('temp', temp.read())
