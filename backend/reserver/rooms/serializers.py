from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, BooleanField, UUIDField, DateTimeField, IntegerField
from rest_framework.validators import UniqueTogetherValidator

class RoomSerializer(serializers.ModelSerializer):
	room_name = CharField(required=True)

	class Meta:
		model = models.Room
		fields = (
			'room_name',
		)

		validators = [
			UniqueTogetherValidator(
				queryset=models.Room.objects.all(),
				fields=['room_name']
			)
		]

class RoomReservationSerializer(serializers.ModelSerializer):
	room = UUIDField(required=True)
	user = IntegerField(required=True)
	start_time = DateTimeField(required=True)
	end_time = DateTimeField(required=True)

	class Meta:
		model = models.RoomReservation
		fields = (
			'room', 'user', 'start_time', 'end_time'
		)