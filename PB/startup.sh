#!/bin/sh

cd toronto_fitness_club
python3 -m pip install virtualenv
python3 -m virtualenv -p /local/bin/python3.10 venv
source venv/bin/activate
pip3 install -r requirements.txt
cd ..