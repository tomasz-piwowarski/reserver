from django.db import models
from django.contrib.auth import get_user_model
from rooms.models import Room

class RoomReservation(models.Model):
	class Meta:
		verbose_name_plural="Rooms reservations"

	room = models.ForeignKey(Room, on_delete=models.CASCADE)
	user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
	start_time = models.DateTimeField(verbose_name="start_time")
	end_time = models.DateTimeField(verbose_name="end_time")