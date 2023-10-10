from django.urls import path
from . import views


urlpatterns = [
		path('', views.RoomReservationListView.as_view(), name="room-reservation-api-list"),
		path('<int:pk>/', views.RoomReservationDetailView.as_view(), name="room-reservation-api-detail"),
		path('check-room/<int:id>/', views.CheckIfRoomIsReserved.as_view(), name="room-check")
]