# Generated by Django 3.1.7 on 2021-10-05 04:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20211004_2240'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='user_name',
        ),
    ]