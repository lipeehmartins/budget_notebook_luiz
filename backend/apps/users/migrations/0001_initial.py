# Generated by Django 3.1.7 on 2021-10-05 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, default='Anonymous', max_length=14, verbose_name='Name')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('password', models.CharField(max_length=500, verbose_name='Password')),
                ('token', models.CharField(max_length=500, verbose_name='Token')),
                ('token_expires_at', models.DateTimeField(verbose_name='Token expires at')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated Datetime')),
            ],
        ),
    ]