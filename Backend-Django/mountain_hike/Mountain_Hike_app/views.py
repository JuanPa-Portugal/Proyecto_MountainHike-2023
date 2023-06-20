from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

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
from .serializers import FechaRecorridoSerializer

from .models import Cliente
from .models import Blog
from .models import Reserva
from .models import Recorridos
from .models import Guias
from .models import FechaRecorrido


from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import mercadopago
import json


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
    permission_classes=[IsAuthenticated]
    queryset=Cliente.objects.all()
    serializer_class= ClienteSerializer


class BlogViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Blog.objects.all()
    serializer_class= BlogSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset=Reserva.objects.all()
    serializer_class= ReservaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','cliente','vendedor','fechaRecorrido']


class RecorridoViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Recorridos.objects.all()
    serializer_class= RecorridoSerializer

class GuiaViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=Guias.objects.all()
    serializer_class= GuiaSerializer

class FechaRecorridoViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset=FechaRecorrido.objects.all()
    serializer_class=FechaRecorridoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id','recorrido','guia']


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


class ProcessPaymentAPIView(APIView):
    def post(self, request):
        try:
            request_values = json.loads(request.body)
            payment_data = {
                "transaction_amount": float(request_values["transaction_amount"]),
                "token": request_values["token"],
                "installments": int(request_values["installments"]),
                "payment_method_id": request_values["payment_method_id"],
                "issuer_id": request_values["issuer_id"],
                "payer": {
                    "email": request_values["payer"]["email"],
                    "identification": {
                        "type": request_values["payer"]["identification"]["type"],
                        "number": request_values["payer"]["identification"]["number"],
                    },
                },
            }

            sdk = mercadopago.SDK("")

            payment_response = sdk.payment().create(payment_data)

            payment = payment_response["response"]
            status = {
                "id": payment["id"],
                "status": payment["status"],
                "status_detail": payment["status_detail"],
            }

            return Response(data={"body": status, "statusCode": payment_response["status"]}, status=201)
        except Exception as e:
            return Response(data={"body": payment_response}, status=400)

class retornarPagado(APIView):  # Retornar custom json 
    def get(self, request):
        return Response({"respuesta": "aprobado"})    
