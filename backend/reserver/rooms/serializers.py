from . import models
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

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