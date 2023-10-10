from django.db import models
from django.contrib.auth import get_user_model

class Room(models.Model):
	class Meta:
		verbose_name_plural = "Rooms"

	room_name = models.CharField(verbose_name="room_name", max_length=255, unique=True)
	user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
