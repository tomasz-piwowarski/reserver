from json import JSONDecodeError
from django.http import JsonResponse
from .serializers import RoomSerializer, RoomReservationSerializer
from .models import Room, RoomReservation
from django.http import Http404
from datetime import datetime
from rest_framework.parsers import JSONParser
from rest_framework import views, status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import pytz


class RoomApiDetailView(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get_object(self, pk):
		try:
			return Room.objects.get(user=pk)
		except Room.DoesNotExist:
			raise Http404

	def get(self, request, pk):
		room = self.get_object(request.user.id)
		serializer = RoomSerializer(room)
		return Response(serializer.data)
		
	def patch(self, request, pk):
		print(request)
		try:
			room = Room.objects.get(pk=pk)
			data = JSONParser().parse(request)
			serializer = RoomSerializer(room, data=data, partial=True)
			if serializer.is_valid():
				serializer.save()
				return Response(serializer.data)
			else:
				return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		except JSONDecodeError:
			return JsonResponse({'result': 'error', 'message': 'Json decoding error'}, status=400)


class RoomApiListView(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get(self, request):
		rooms = Room.objects.all()
		serializer = RoomSerializer(rooms, many=True)
		return Response(serializer.data)

	def post(self, request):
		try:
			data = JSONParser().parse(request)
			data['user'] = request.user.id
			serializer = RoomSerializer(data=data)

			if serializer.is_valid():
				serializer.save()
				return Response(serializer.data)

			else:
				return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		except JSONDecodeError:
			return JsonResponse({'result': 'error', 'message': 'Json decoding error'}, status=400)

class RoomReservationListView(generics.ListCreateAPIView):
	permission_classes = (IsAuthenticated,)
	
	queryset = RoomReservation.objects.all()
	serializer_class = RoomReservationSerializer

	def create(self, request, *args, **kwargs):
		request.data['user'] = request.user.id
		return super().create(request, *args, **kwargs)

# class RoomReservationListView(views.APIView):

# 	def post(self, request):
# 		try:
# 			data = JSONParser().parse(request)
# 			data['user'] = request.user.id
# 			serializer = RoomReservationSerializer(data=data)

# 			if serializer.is_valid():
# 				serializer.save()
# 				return Response(serializer.data)
# 			else:
# 				return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# 		except JSONDecodeError:
# 			return JsonResponse({'result': 'error', 'message': 'Json decoding error'}, status=400)

	# def get(self, request):
	# 	reservations = RoomReservation.objects.all()
	# 	serializer = RoomReservationSerializer(reservations, many=True)
	# 	return Response(serializer.data)

class RoomReservationDetailView(generics.RetrieveUpdateDestroyAPIView):
	permission_classes = (IsAuthenticated,)

	serializer_class = RoomReservationSerializer
	queryset = RoomReservation.objects.all()
		
class CheckIfRoomIsReserved(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get(self, request, id):
		room = RoomReservation.objects.filter(room=id).latest("end_time")

		if not room:
			return Response({})

		utc = pytz.UTC
		current_datetime = utc.localize(datetime.now())

		if room.end_time < current_datetime:
			room = RoomReservationSerializer(room)
			return Response(room.data)
		else:
			return Response({})
