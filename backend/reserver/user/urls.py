from django.urls import path, include
from .views import RegisterApi
urlpatterns = [
      path('register/', RegisterApi.as_view()),
]