from django.urls import path
from . import views


urlpatterns = [
		path('', views.RoomApiListView.as_view(), name="room-api-list"),
    path('<int:pk>/', views.RoomApiDetailView.as_view(), name='room-api-detail'),
		path('reservation/', views.RoomReservationListView.as_view(), name="room-reservation-api-list"),
		path('reservation/<uuid:pk>/', views.RoomReservationDetailView.as_view(), name="room-reservation-api-detail"),
		path('check-room/<int:id>/', views.CheckIfRoomIsReserved.as_view(), name="room-check")
]