# Generated by Django 5.0.6 on 2024-07-05 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0010_remove_vacancy_alternate_url_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancy',
            name='alternate_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='company_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='requirement',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='responsibility',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='salary_max',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='salary_min',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
