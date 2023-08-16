from django.shortcuts import render
from django.http import HttpResponse
from .data import*

def display_all_animals(request):
#     animals_list=[]
#     for animal in animals:
    return HttpResponse(animals)