from django.db import models
from django.contrib.auth import get_user_model

class Room(models.Model):
	class Meta:
		verbose_name_plural = "Rooms"

	room_name = models.CharField(verbose_name="room_name", max_length=255, unique=True)
	user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

	# def __str__(self):
	# 	return f'{self}'

class RoomReservation(models.Model):
	class Meta:
		verbose_name_plural="Rooms reservations"

	room = models.ForeignKey(Room, on_delete=models.CASCADE)
	user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
	start_time = models.DateTimeField(verbose_name="start_time")
	end_time = models.DateTimeField(verbose_name="end_time")

	def __str__(self):
		return f'{self}'
