# Generated by Django 5.0.6 on 2024-07-05 21:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0011_vacancy_alternate_url_vacancy_company_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vacancy',
            name='alternate_url',
        ),
    ]
