from django.urls import path
from .views import index

#main url
urlpatterns = [
    path('', index), #'home page'
    path('user', index),
    path('wellness', index),
    path('goal', index)
]
