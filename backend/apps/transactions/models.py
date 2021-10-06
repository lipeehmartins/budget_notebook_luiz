from django.db import models
from apps.users.models import User
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Transaction(models.Model):
    class Meta(object):
        db_table = 'transaction'
    class Option(models.TextChoices): 
        EXPENSES = 'EX', _('expenses')
        INCOME = 'IN', _('income')
        
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True
    )
    type = models.CharField(
        'Type', blank=False, null=False, max_length=14, choices=Option.choices
    )
    amount = models.DecimalField(
       'Amount', max_digits=10, decimal_places=2
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True 
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name