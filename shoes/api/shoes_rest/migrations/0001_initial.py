# Generated by Django 4.0.3 on 2023-03-02 21:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BinVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('closet_name', models.CharField(blank=True, max_length=200, null=True)),
                ('bin_number', models.PositiveSmallIntegerField()),
                ('bin_size', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Season',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=15)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Shoes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(blank=True, max_length=100, null=True)),
                ('model_name', models.CharField(blank=True, max_length=100, null=True)),
                ('color', models.CharField(blank=True, max_length=100, null=True)),
                ('style', models.CharField(max_length=50)),
                ('photo_url', models.URLField(null=True)),
                ('bin_storage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shoes', to='shoes_rest.binvo')),
                ('season', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='season', to='shoes_rest.season')),
            ],
        ),
    ]
