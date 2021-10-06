from rest_framework import generics
from .serializers import TransactionSerializer
from django.http import JsonResponse
from .models import Transaction

class TransactionList(generics.ListAPIView):
    # Get all transactions, limit = 20
    queryset = Transaction.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = TransactionSerializer


class TransactionAdd(generics.CreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class TransactionUpdate(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class TransactionDelete(generics.DestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
