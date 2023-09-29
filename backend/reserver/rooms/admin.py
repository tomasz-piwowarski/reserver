from django.contrib import admin
from .models import Room, RoomReservation

# Register your models here.

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
	list_display = ('id', "room_name")

@admin.register(RoomReservation)
class RoomReservationAdmin(admin.ModelAdmin):
	list_display = ('id', 'user', 'room', 'start_time', 'end_time')