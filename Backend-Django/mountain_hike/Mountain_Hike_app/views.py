from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializer import BlogSerializer
from .serializer import ReservaSerializer
from .serializer import RecorridosSerializer
from .serializer import GuiasSerializer
from .models import Blog
from .models import Reserva
from .models import Recorridos
from .models import Guias

from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        if user:
            login (request, user)
            return Response(
                status =status.HTTP_200_OK)
        
        return Response(
            status=status.HTTP_401_UNAUTHORIZED)
        

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    

class BlogViewSet(viewsets.ModelViewSet):
    queryset=Blog.objects.all()
    serializer_class= BlogSerializer


class ReservaViewSet(viewsets.ModelViewSet):
    queryset=Reserva.objects.all()
    serializer_class= ReservaSerializer

class RecorridosViewSet(viewsets.ModelViewSet):
    queryset=Recorridos.objects.all()
    serializer_class= RecorridosSerializer

class GuiasViewSet(viewsets.ModelViewSet):
    queryset=Guias.objects.all()
    serializer_class= GuiasSerializer
