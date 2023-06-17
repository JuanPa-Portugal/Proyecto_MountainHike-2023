# Generated by Django 4.2.1 on 2023-06-17 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mountain_Hike_app', '0003_alter_fecharecorrido_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='recorridos',
            name='cantidadMaximaDeParticipantes',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recorridos',
            name='hsDuracion',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]
