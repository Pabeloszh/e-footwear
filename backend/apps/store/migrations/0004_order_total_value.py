# Generated by Django 3.2.3 on 2022-01-03 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_auto_20220103_1049'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='total_value',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]