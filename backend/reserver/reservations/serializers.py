from . import models
from rest_framework import serializers

class RoomReservationSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.RoomReservation
		fields = "__all__"