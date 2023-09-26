from . import models
from rest_framework import serializers
from rest_framework.fields import BooleanField

class RoomSerializer(serializers.ModelSerializer):
	occupied = BooleanField(source="occupied", default=False)

	class Meta:
		model = models.Room
		fields = (
			'occupied'
		)