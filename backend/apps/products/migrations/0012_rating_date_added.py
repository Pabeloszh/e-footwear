# Generated by Django 3.2.3 on 2022-01-18 13:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20220117_1457'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating',
            name='date_added',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
