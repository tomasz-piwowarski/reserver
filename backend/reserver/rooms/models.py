from django.db import models
from utils.model_abstracts import Model
from django.contrib.auth import get_user_model

class Room(Model):
	class Meta:
		verbose_name_plural = "Rooms"

	room_name = models.CharField(verbose_name="room_name", max_length=255, unique=True)

	def __str__(self):
		return f'{self}'
class RoomReservation(Model):
	class Meta:
		verbose_name_plural="Rooms reservations"

	room = models.ForeignKey(Room, on_delete=models.CASCADE)
	user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
	start_time = models.DateTimeField(verbose_name="start_time")
	end_time = models.DateTimeField(verbose_name="end_time")

	def __str__(self):
		return f'{self}'
