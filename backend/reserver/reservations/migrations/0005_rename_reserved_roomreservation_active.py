# Generated by Django 4.2.5 on 2023-10-17 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0004_rename_occupied_roomreservation_reserved'),
    ]

    operations = [
        migrations.RenameField(
            model_name='roomreservation',
            old_name='reserved',
            new_name='active',
        ),
    ]
