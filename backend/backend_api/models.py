from django.db import models
import os
import sys
import requests
import sqlite3
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


class Vacancy(models.Model):
    title = models.CharField(max_length=255)
    city = models.CharField(max_length=255, null=True, blank=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    requirement = models.TextField(null=True, blank=True)
    responsibility = models.TextField(null=True, blank=True)
    salary_min = models.IntegerField(null=True, blank=True, default=None)
    salary_max = models.IntegerField(null=True, blank=True, default=None)
    alternate_url = models.URLField(null=True, blank=True)
    experience = models.CharField(max_length=255, null=True, blank=True)
    graf = models.CharField(max_length=255, null=True, blank=True)
    def __str__(self):
        return self.title
