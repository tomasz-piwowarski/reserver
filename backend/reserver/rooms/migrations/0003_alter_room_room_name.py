# Generated by Django 4.2.5 on 2023-09-26 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0002_room_room_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='room_name',
            field=models.CharField(max_length=255, unique=True, verbose_name='room_name'),
        ),
    ]
