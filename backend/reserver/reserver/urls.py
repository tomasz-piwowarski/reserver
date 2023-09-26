from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rooms import views as rooms_views

router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
		path('room/', rooms_views.RoomApiView.as_view())
]
