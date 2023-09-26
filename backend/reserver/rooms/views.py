from json import JSONDecodeError
from django.http import JsonResponse
from .serializers import RoomSerializer
from .models import Room
from django.http import Http404
from rest_framework.parsers import JSONParser
from rest_framework import views, status
from rest_framework.response import Response


class RoomApiDetailView(views.APIView):
	def get_object(self, pk):
		try:
			return Room.objects.get(pk=pk)
		except Room.DoesNotExist:
			raise Http404

	def get(self, request, pk):
		room = self.get_object(pk)
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
	def get(self, request):
		rooms = Room.objects.all()
		serializer = RoomSerializer(rooms, many=True)
		return Response(serializer.data)

	def post(self, request):
		try:
			data = JSONParser().parse(request)
			serializer = RoomSerializer(data=data)
			if serializer.is_valid(raise_exception=True):
				serializer.save()
				return Response(serializer.data)
			else:
				return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		except JSONDecodeError:
			return JsonResponse({'result': 'error', 'message': 'Json decoding error'}, status=400)