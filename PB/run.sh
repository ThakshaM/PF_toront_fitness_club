#!/bin/sh

cd toronto_fitness_club
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver