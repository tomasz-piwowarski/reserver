from . import models
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

class RoomReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.RoomReservation
		fields = "__all__"