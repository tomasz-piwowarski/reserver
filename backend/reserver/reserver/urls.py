from django.contrib import admin
from django.urls import path, include
from rest_framework import routers


router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
		path('api/token/', include('authentication.urls'), name='token'),
		path('user/', include('user.urls')),
    path('api/rooms/', include('rooms.urls')),
    path('api/reservations/', include('reservations.urls')),
]

urlpatterns += router.urls  # Include the URLs generated by DefaultRouter