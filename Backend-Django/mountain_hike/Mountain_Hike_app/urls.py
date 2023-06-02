from django.urls import path, include
from rest_framework import routers
#from Blog.views import BlogViewSet
from Mountain_Hike_app import views

router= routers.DefaultRouter()
router.register(r'Blog',views.BlogViewSet)
router.register(r'Reserva',views.ReservaViewSet)
router.register(r'Recorridos',views.RecorridosViewSet)
router.register(r'Guias',views.GuiasViewSet)

#----
urlpatterns = [
     path('', include(router.urls)),
]

