from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, BooleanField
from rest_framework.validators import UniqueTogetherValidator

class RoomSerializer(serializers.ModelSerializer):
	room_name = CharField(required=True)
	occupied = BooleanField(default=False)

	class Meta:
		model = models.Room
		fields = (
			'room_name',
			'occupied',
		)
		validators = [
			UniqueTogetherValidator(
				queryset=models.Room.objects.all(),
				fields=['room_name']
			)
		]