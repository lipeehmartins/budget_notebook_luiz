from django.urls import path
from . import views

urlpatterns = [
    path('', views.TransactionList.as_view(), name='transaction_list'),
    path('add/', views.TransactionAdd.as_view(), name='transaction_add'),
    path('<int:pk>/update/', views.TransactionUpdate.as_view(), name='transaction_update'),
    path('<int:pk>/delete/', views.TransactionDelete.as_view(), name='transaction_delete'),
]
