from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.db import models
import os
import sys
import requests
import sqlite3

@csrf_exempt
def search_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        search_text = data.get('searchText', '')
        # Здесь вы можете выполнить необходимую обработку данных и вернуть ответ
        # Например, выполнить поиск по тексту и вернуть результат
        
        response_data = {
            'message': 'Данные успешно получены и обработаны',
            'search_text': search_text
        }
        
        return JsonResponse(response_data)

from .models import Vacancy

def parse_vacancies(request):
    
    base_url = 'https://api.hh.ru/vacancies'
    text_param = request.GET.get('text', '')
    # Удаление всех записей, если параметр text присутствует
    if text_param:
        Vacancy.objects.all().delete()

    for page in range(20):
        params = {
            'text': text_param,
            'area': 113,
            'per_page': 100,
            'page': page,
            "currency": "RUR"
        }

        response = requests.get(base_url, params=params)
        vacancies = response.json()['items']

        for vacancy in vacancies:

            salary = vacancy.get('salary', {})
            salary_min = salary.get('from') if salary else None
            salary_max = salary.get('to') if salary else None
            Vacancy.objects.create(
                title=vacancy['name'],
                city=vacancy['area']['name'],
                company_name=vacancy['employer']['name'],
                salary_min=salary_min,
                salary_max=salary_max,
                requirement=vacancy["snippet"].get("requirement", ""),
                responsibility=vacancy["snippet"].get("responsibility", ""),
                alternate_url=vacancy['alternate_url'],
                experience=vacancy['experience']['name'],
                graf = vacancy['schedule']['name'],
            )

    return JsonResponse({'status': 'success'})

def get_all_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_list = list(vacancies.values())
    return JsonResponse(vacancies_list, safe=False)


