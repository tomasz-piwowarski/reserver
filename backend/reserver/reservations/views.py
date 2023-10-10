from .serializers import RoomReservationSerializer
from .models import RoomReservation
from datetime import datetime
from rest_framework import views, generics
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
		
class CheckIfRoomIsReserved(views.APIView):
	permission_classes = (IsAuthenticated,)

	def get(self, request, id):
		try:
			room = RoomReservation.objects.filter(room=id).latest("end_time")
		except RoomReservation.DoesNotExist:
			return Response({})	

		poland = timezone('Europe/Warsaw')

		current_datetime = datetime.now(poland)
		if room.end_time > current_datetime:
			print(room.end_time, current_datetime)

			room = RoomReservationSerializer(room)
			return Response(room.data)
		else:
			return Response({})
