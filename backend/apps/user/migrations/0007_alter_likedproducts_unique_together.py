# Generated by Django 3.2.3 on 2022-01-17 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20220117_1457'),
        ('user', '0006_rename_model_likedproducts_product'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='likedproducts',
            unique_together={('user', 'product')},
        ),
    ]
