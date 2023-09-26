from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from rest_framework import status
import json
from .models import Room

class RoomTestCase(APITestCase):
	def setUp(self):
		self.client = APIClient()
		self.data = {"occupied": False, "room_name": "Room #1"}
		self.url = "/room/"

	def test_create_room(self):
		data = self.data
		response = self.client.post(self.url, data, format="json")
		print(response.content)
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(Room.objects.count(), 1)
		self.assertEqual(Room.objects.get().room_name, "Room #1")