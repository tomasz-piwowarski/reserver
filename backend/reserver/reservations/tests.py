from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from .models import RoomReservation
from rooms.models import Room
from datetime import datetime, timedelta
from pytz import timezone

User = get_user_model()

class RoomReservationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client.force_authenticate(user=self.user)
        self.room = Room.objects.create(room_name='Test Room', user=self.user)
        self.url = '/api/reservations/'

        # Create a reservation 1 hour from now for the test room
        poland = timezone('Europe/Warsaw')
        current_datetime = datetime.now(poland)
        start_time = current_datetime + timedelta(hours=1)
        end_time = start_time + timedelta(hours=1)
        self.reservation_data = {
            'room': self.room.pk,
            'user': self.user.pk,
            'start_time': start_time,
            'end_time': end_time
        }

    def test_create_reservation(self):
        response = self.client.post(self.url, self.reservation_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(RoomReservation.objects.count(), 1)
        self.assertEqual(RoomReservation.objects.get().room, self.room)
        self.assertEqual(RoomReservation.objects.get().user, self.user)

    def test_get_reservation_list(self):
        RoomReservation.objects.create(room=self.room, user=self.user, start_time='2023-10-10T12:00:00Z', end_time='2023-10-10T13:00:00Z')
        RoomReservation.objects.create(room=self.room, user=self.user, start_time='2023-10-11T12:00:00Z', end_time='2023-10-11T13:00:00Z')
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_get_reservation_detail(self):
        reservation = RoomReservation.objects.create(room=self.room, user=self.user, start_time='2023-10-10T12:00:00Z', end_time='2023-10-10T13:00:00Z')
        detail_url = f'{self.url}{reservation.pk}/'
        response = self.client.get(detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['room'], self.room.pk)

    # def test_update_reservation(self):
    #     reservation = RoomReservation.objects.create(room=self.room, user=self.user, start_time='2023-10-10T12:00:00Z', end_time='2023-10-10T13:00:00Z')
    #     updated_data = {
    #         'room': self.room.pk,
    #         'user': self.user.pk,
    #         'start_time': '2023-10-10T14:00:00Z',
    #         'end_time': '2023-10-10T15:00:00Z'
    #     }
    #     detail_url = f'{self.url}/{reservation.pk}'
    #     response = self.client.put(detail_url, updated_data, format='json')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(RoomReservation.objects.get(pk=reservation.pk).start_time, datetime.fromisoformat('2023-10-10T14:00:00+00:00'))

    # def test_delete_reservation(self):
    #     reservation = RoomReservation.objects.create(room=self.room, user=self.user, start_time='2023-10-10T12:00:00Z', end_time='2023-10-10T13:00:00Z')
    #     detail_url = f'{self.url}/{reservation.pk}/'
    #     response = self.client.delete(detail_url)
    #     self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
    #     self.assertEqual(RoomReservation.objects.count(), 0)

    def test_check_if_room_is_reserved(self):
        start_time = datetime.now()
        end_time = start_time + timedelta(hours=1)
        reservation = RoomReservation.objects.create(room=self.room, user=self.user, start_time=start_time, end_time=end_time)
        check_url = f'{self.url}check-room/{reservation.pk}/'
        response = self.client.get(check_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['room'], self.room.pk)

        reservation.end_time = datetime.fromisoformat('2023-10-10T11:00:00+00:00')
        reservation.save()

        response = self.client.get(check_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'ended': True})

        reservation.delete()

        response = self.client.get(check_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {})
