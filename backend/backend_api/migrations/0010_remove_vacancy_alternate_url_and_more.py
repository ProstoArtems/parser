# Generated by Django 5.0.6 on 2024-07-05 21:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0009_remove_vacancy_published_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vacancy',
            name='alternate_url',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='company_name',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='requirement',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='responsibility',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='salary_max',
        ),
        migrations.RemoveField(
            model_name='vacancy',
            name='salary_min',
        ),
    ]
