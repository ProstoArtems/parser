# Generated by Django 5.0.6 on 2024-07-06 01:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0014_vacancy_employment_vacancy_experience'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vacancy',
            old_name='employment',
            new_name='graf',
        ),
    ]
