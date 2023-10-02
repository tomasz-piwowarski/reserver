from . import models
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.fields import CharField
from rest_framework.validators import UniqueTogetherValidator
from user.serializer import UserSerializer

class RoomSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Room
		fields = '__all__'

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