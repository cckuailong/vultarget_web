# Generated by Django 2.2.10 on 2020-12-23 21:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dockerapi', '0002_imageinfo_is_share'),
    ]

    operations = [
        migrations.AlterField(
            model_name='containervul',
            name='image_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dockerapi.ImageInfo', verbose_name='镜像ID'),
        ),
    ]
