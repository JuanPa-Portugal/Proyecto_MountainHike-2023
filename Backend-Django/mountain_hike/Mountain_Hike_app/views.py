from django.shortcuts import render

# Create your views here.

#Siguiendo esta guia: https://mattermost.com/blog/user-authentication-with-the-django-rest-framework-and-angular/ - INICIO

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

#Siguiendo esta guia: https://mattermost.com/blog/user-authentication-with-the-django-rest-framework-and-angular/ - FIN

from .serializers import BlogSerializer
from .serializers import ReservaSerializer
from .serializers import RecorridoSerializer
from .serializers import GuiaSerializer
from .serializers import ClienteSerializer

from .models import Cliente
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
    

class ClienteViewSet(viewsets.ModelViewSet):
    permission_classes=[]
    queryset=Cliente.objects.all()
    serializer_class= ClienteSerializer


class BlogViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Blog.objects.all()
    serializer_class= BlogSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    queryset=Reserva.objects.all()
    serializer_class= ReservaSerializer

class RecorridoViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Recorridos.objects.all()
    serializer_class= RecorridoSerializer

class GuiaViewSet(viewsets.ModelViewSet):
    queryset=Guias.objects.all()
    serializer_class= GuiaSerializer



#Siguiendo esta guia: https://mattermost.com/blog/user-authentication-with-the-django-rest-framework-and-angular/ - INICIO

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class UserLogIn(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token = Token.objects.get(user=user)
        return Response({
            'token': token.key,
            'id': user.pk,
            'username': user.username
        })
    
#Siguiendo esta guia: https://mattermost.com/blog/user-authentication-with-the-django-rest-framework-and-angular/ - FIN