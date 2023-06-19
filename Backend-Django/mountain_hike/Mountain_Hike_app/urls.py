from django.urls import path, include
from rest_framework import routers
#from Blog.views import BlogViewSet
from Mountain_Hike_app import views

from .views import LoginView, LogoutView,ProcessPaymentAPIView,CarritoComprasVista

router= routers.DefaultRouter()
router.register(r'Blogs',views.BlogViewSet)
router.register(r'Reservas',views.ReservaViewSet)
router.register(r'Recorridos',views.RecorridoViewSet)
router.register(r'Clientes',views.ClienteViewSet)
router.register(r'Guias',views.GuiaViewSet)
router.register(r'Users',views.UserViewSet)
router.register(r'FechaRecorridos',views.FechaRecorridoViewSet)

#----
urlpatterns = [
     path('auth/login/',LoginView.as_view(),name='auth_login'),
     path('auth/logout/',LogoutView.as_view(), name='auth_logout'),
     path('auth/reserva/',ProcessPaymentAPIView.as_view(), name='auth_mercadopago'),
     path('auth/carrito/',CarritoComprasVista.as_view(), name='auth_carritodecompras'),
     path('', include(router.urls)),
]

