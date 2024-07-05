# Développez une application Web en utilisant Django

## À propos

Formation OpenClassRooms - Utilisation de Django - Projet 9

Application pour publier des critiques de livres et articles

## Prérequis

Sans

## Installation

Cloner le repository
```bash
git clone https://github.com/Mothraa/OCR_projet9.git
```
Créer l'environnement avec [venv](https://docs.python.org/fr/3/library/venv.html)
```bash
python -m venv env
```
Activer l'environnement

- sous linux ou mac
```bash
source env/bin/activate
```
- sous windows
```bash
env/scripts/activate
```
Utiliser le gestionnaire de package [pip](https://docs.python.org/fr/dev/installing/index.html) pour installer les librairies python
```bash
pip install -r requirements.txt
```

## Utilisation

* Démarrer le serveur en local :
```bash
cd src
python manage.py runserver
```
* Accès au serveur en local depuis un navigateur :
http://localhost:8000/

* Compte utilisateur de test :
nom d'utilisateur : testeur@oc.com
mot de passe : bKH4tnZNFU!#fnk6

Présence de 2 autres utilisateurs : John et Michel
La création de nouveaux comptes est possible.

## Langages & Librairies

Front-End :
* [Django-Tailwind](https://django-tailwind.readthedocs.io/en/latest/installation.html) pour utiliser [TailwindCSS](https://tailwindcss.com/) dans l'environnement Django
* Javascript (Vanilla)

Back-End :
* Python avec [Django](https://www.djangoproject.com/) (architecture MVT)
* [PIL/Pillow](https://pypi.org/project/pillow/) pour le redimensionnement des images
* [SQLite](https://www.sqlite.org/) : stockage des données via l'ORM de Django


## Documentation

De manière exceptionnelle et a titre d'exemple, la base de donnée (.\db.sqlite3) ainsi que le repertoire media ( .\src\media) est livré avec le repository.
Les données présentes sont fictives et issues d'images open-source.

L'application est paramétrée en mode developpement et debug ; elle n'est pas faite telle quelle pour un déploiement et une mise en production.



## Gestion des versions

La dénomination des versions suit la spécification décrite par la [Gestion sémantique de version](https://semver.org/lang/fr/)

Les versions disponibles ainsi que les journaux décrivant les changements apportés sont disponibles depuis [la section releases](https://github.com/Mothraa/OCR_projet4/releases)

## Licence

Voir le fichier [LICENSE](./LICENSE.md) du dépôt.