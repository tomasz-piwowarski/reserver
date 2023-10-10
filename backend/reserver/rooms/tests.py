from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from .models import Room

User = get_user_model()

class RoomApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client.force_authenticate(user=self.user)
        self.url = '/api/rooms/'  # Added URL property
        self.room_data = {'room_name': 'Test Room'}

    def test_create_room(self):
        response = self.client.post(self.url, self.room_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Room.objects.count(), 1)
        self.assertEqual(Room.objects.get().room_name, 'Test Room')
        self.assertEqual(Room.objects.get().user, self.user)

    def test_get_room_list(self):
        Room.objects.create(room_name='Room 1', user=self.user)
        Room.objects.create(room_name='Room 2', user=self.user)
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_get_room_detail(self):
        room = Room.objects.create(room_name='Test Room', user=self.user)
        detail_url = f'{self.url}{room.pk}/'  # Updated URL for detail view
        response = self.client.get(detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['room_name'], 'Test Room')

    def test_update_room(self):
        room = Room.objects.create(room_name='Old Name', user=self.user)
        detail_url = f'{self.url}{room.pk}/'  # Updated URL for detail view
        updated_data = {'room_name': 'New Name'}
        response = self.client.patch(detail_url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Room.objects.get(pk=room.pk).room_name, 'New Name')

    def test_delete_room(self):
        room = Room.objects.create(room_name='Test Room', user=self.user)
        detail_url = f'{self.url}{room.pk}/'  # Updated URL for detail view
        response = self.client.delete(detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Room.objects.count(), 0)
