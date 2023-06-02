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
