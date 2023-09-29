from . import models
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.fields import CharField, SerializerMethodField, UUIDField, DateTimeField
from rest_framework.validators import UniqueTogetherValidator

class RoomSerializer(serializers.ModelSerializer):
	room_name = CharField(required=True)

	class Meta:
		model = models.Room
		fields = (
			'id',
			'room_name',
		)

		validators = [
			UniqueTogetherValidator(
				queryset=models.Room.objects.all(),
				fields=['room_name']
			)
		]

class RoomReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.RoomReservation
		fields = "__all__"