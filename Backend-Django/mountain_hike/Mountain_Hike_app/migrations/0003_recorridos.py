# Generated by Django 4.2.1 on 2023-05-21 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mountain_Hike_app', '0002_blogentrada'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recorridos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('imagen', models.URLField()),
                ('descripcion', models.TextField(max_length=250)),
                ('dificultad', models.CharField(max_length=50)),
                ('precio', models.FloatField()),
            ],
            options={
                'verbose_name': 'Recorrido',
                'verbose_name_plural': 'Recorridos',
                'db_table': 'recorrido',
            },
        ),
    ]