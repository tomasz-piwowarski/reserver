from django.urls import path
from . import views


urlpatterns = [
		path('', views.RoomApiListView.as_view(), name="room-api-list"),
    path('<uuid:pk>/', views.RoomApiDetailView.as_view(), name='room-api-detail'),
		path('reservation/', views.RoomReservationListView.as_view(), name="room-reservation-api-list"),
		path('reservation/<int:pk>/', views.RoomReservationDetailView.as_view(), name="room-reservation-api-detail")
]