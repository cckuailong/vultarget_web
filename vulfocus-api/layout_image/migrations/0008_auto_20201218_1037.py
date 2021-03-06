# Generated by Django 2.2.10 on 2020-12-18 10:37

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('layout_image', '0007_auto_20201218_1034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='layout',
            name='layout_id',
            field=models.UUIDField(default=uuid.UUID('161c4a82-9a46-4468-b3da-aeec2418a360'), editable=False, primary_key=True, serialize=False, verbose_name='编排UUID'),
        ),
        migrations.AlterField(
            model_name='layoutdata',
            name='layout_user_id',
            field=models.UUIDField(default=uuid.UUID('9b781c9d-8cbd-4497-a5df-1e78acb7e4cf'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservice',
            name='service_id',
            field=models.UUIDField(default=uuid.UUID('f01f6a6a-9506-4723-ae84-6c245576106e'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservicecontainer',
            name='service_container_id',
            field=models.UUIDField(default=uuid.UUID('2e36ec7b-9f23-44e8-adab-bf47d3f24c08'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservicecontainerscore',
            name='layout_service_container_score_id',
            field=models.UUIDField(default=uuid.UUID('38efeda6-1644-41fb-951b-1483069a6829'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='layoutservicenetwork',
            name='layout_service_network_id',
            field=models.UUIDField(default=uuid.UUID('31fb7882-8365-415e-92c3-7f00691f0b14'), editable=False, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
