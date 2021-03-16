# Generated by Django 3.1.7 on 2021-03-15 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20210315_2127'),
    ]

    operations = [
        migrations.AddField(
            model_name='financialdetails',
            name='credit_limit',
            field=models.FloatField(default=0, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='financialdetails',
            name='pd',
            field=models.FloatField(default=0, max_length=255),
            preserve_default=False,
        ),
    ]
