# Generated by Django 3.2.3 on 2022-01-11 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0008_auto_20220108_1543'),
    ]

    operations = [
        migrations.AddField(
            model_name='shippingaddress',
            name='first_name',
            field=models.CharField(default='xd', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='last_name',
            field=models.CharField(default='xd', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='phone_number',
            field=models.CharField(default='123456789', max_length=9),
            preserve_default=False,
        ),
    ]
