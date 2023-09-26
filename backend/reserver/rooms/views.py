from json import JSONDecodeError
from django.http import JsonResponse
from .serializers import RoomSerializer
from rest_framework.parsers import JSONParser
from rest_framework import views, status
from rest_framework.response import Response


class RoomApiView(views.APIView):
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