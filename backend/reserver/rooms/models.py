from django.db import models
from utils.model_abstracts import Model

class Room(Model):
	class Meta:
		verbose_name_plural = "Rooms"

	occupied = models.BooleanField(verbose_name="occupied")
	room_name = models.CharField(verbose_name="room_name", max_length=255, unique=True)

	def __str__(self):
		return f'{self}'