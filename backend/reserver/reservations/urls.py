from django.urls import path
from . import views


urlpatterns = [
		path('', views.RoomReservationListView.as_view(), name="room-reservation-api-list"),
		path('<int:pk>/', views.RoomReservationDetailView.as_view(), name="room-reservation-api-detail"),
		path('check-room/<int:room_id>/', views.CheckIfRoomIsReserved.as_view(), name="room-check"),
		path('check-reservation/<int:reservation_id>/', views.CheckReservation.as_view(), name="reservation-check"),
		path('check-user/', views.CheckUser.as_view(), name="user-check")
]