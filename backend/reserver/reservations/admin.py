from django.contrib import admin
from .models import RoomReservation

@admin.register(RoomReservation)
class RoomReservationAdmin(admin.ModelAdmin):
	list_display = ('id', 'user', 'room', 'start_time', 'end_time')