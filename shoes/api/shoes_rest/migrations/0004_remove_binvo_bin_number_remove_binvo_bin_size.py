# Generated by Django 4.0.3 on 2023-03-03 02:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0003_alter_binvo_bin_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='binvo',
            name='bin_number',
        ),
        migrations.RemoveField(
            model_name='binvo',
            name='bin_size',
        ),
    ]
