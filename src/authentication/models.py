from django.contrib.auth.models import BaseUserManager, AbstractUser
from django.db import models


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):  # **kwargs
        if not email:
            raise ValueError("Entrer un email")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(email=email, password=password)
        user.is_superuser = True
        # user.is_admin = True
        user.is_staff = True
        user.save()
        return user


class CustomUser(AbstractUser):

    # utilisation de l'email comme identifiant à la place du username par défaut dans AbstractUser
    email = models.EmailField(max_length=150, unique=True, blank=False)
    # db_index=True ?

    username = None
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    nickname = models.CharField(max_length=80, unique=True, blank=False, verbose_name='Pseudo')
    profil_photo = models.ImageField(verbose_name='Photo de profil')

    objects = CustomUserManager()

    # CREATOR = 'CREATOR'
    # SUBSCRIBER = 'SUBSCRIBER'

    # ROLE_CHOICES = (
    #     (CREATOR, 'Créateur'),
    #     (SUBSCRIBER, 'Abonné'),
    # )

    # zip_code = models.CharField(blank=True, max_length=5)

    # role = models.CharField(max_length=30, choices=ROLE_CHOICES, verbose_name='Rôle')

    # pour calculer un champ a l'enregistrement, surcharger la methode save
    # def save(self, *args, **kwargs):

    #     if not self.nickname:
    #         self.nickame = "toto"

    #     super().save(*args, **kwargs)