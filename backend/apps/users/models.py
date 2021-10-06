from django.db import models


class User(models.Model):
    class Meta(object):
        db_table = 'user'
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )
    email = models.EmailField(
        'Email', blank=False, null=False, max_length=254
    )
    password = models.CharField(
        'Password', blank=False, null=False, max_length=500
    )
    token = models.CharField(
        'Token', blank=False, null=False, max_length=500
    )
    token_expires_at = models.DateTimeField(
        'Token expires at', blank=False, null=False
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True 
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    def __str__(self):
        return self.name

