# Generated by Django 4.2.5 on 2023-10-17 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0002_roomreservation_occupied'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roomreservation',
            name='occupied',
            field=models.BooleanField(default=True),
        ),
    ]
