from .serializers import RoomReservationSerializer
from .models import RoomReservation
from rooms.models import Room
from rooms.serializers import RoomSerializer
from datetime import datetime
from rest_framework.parsers import JSONParser
from rest_framework import views, generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from pytz import timezone

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
	lookup_url_kwarg = 'pk'

	def patch(self, request, *args, **kwargs):
		instance = self.get_object()
		if instance.user != request.user:
			return Response({"detail": "You do not have permission to perform this action."}, status=status.HTTP_403_FORBIDDEN)
			
		serializer = self.get_serializer(instance, data=request.data, partial=True)
		serializer.is_valid(raise_exception=True)
		self.perform_update(serializer)
		return Response(serializer.data)

class CheckIfRoomIsReserved(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get(self, request, room_id):
		try:
			reservation = RoomReservation.objects.filter(room=room_id).latest("end_time")
		except RoomReservation.DoesNotExist:
			return Response({})	

		poland = timezone('Europe/Warsaw')

		current_datetime = datetime.now(poland)
		if reservation.end_time > current_datetime and reservation.active:

			reservation = RoomReservationSerializer(reservation)
			print(reservation.data)

			return Response(reservation.data)
		else:
			return Response({})

class CheckReservation(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get(self, request, reservation_id):
		try:
			reservation = RoomReservation.objects.get(id=reservation_id)
		except RoomReservation.DoesNotExist:
			return Response({})	

		poland = timezone('Europe/Warsaw')
		current_datetime = datetime.now(poland)
		if reservation.end_time > current_datetime and reservation.active:

			reservation = RoomReservationSerializer(reservation)
			print(reservation.data)

			return Response(reservation.data)
		else:
			return Response({})

class CheckUser(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get(self, request):
		try:
			reservation = RoomReservation.objects.filter(user=request.user).latest("end_time")
			
		except RoomReservation.DoesNotExist:
			return Response({})	

		poland = timezone('Europe/Warsaw')
		current_datetime = datetime.now(poland)
		if reservation.end_time > current_datetime and reservation.active:
			reservation_serializer = RoomReservationSerializer(reservation)
			reservation_data = reservation_serializer.data

			room = Room.objects.get(id=reservation_data['room'])
			room_serializer = RoomSerializer(room)
			room_data = room_serializer.data

			reservation_data['room'] = room_data
			print(reservation_data)
			return Response(reservation_data)
		else:
			return Response({})