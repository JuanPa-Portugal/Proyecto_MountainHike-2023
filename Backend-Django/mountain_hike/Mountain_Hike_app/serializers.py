from rest_framework import serializers
from .models import User
from .models import Cliente
from .models import Blog
from .models import Reserva
from .models import Recorridos
from .models import Guias
from .models import FechaRecorrido
from .models import CarritoCompras

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name','email')
        #read_only_fields = ('username', )

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'username', 'first_name', 'last_name','email', 'edad', 'telefono', 'ciudad')


class BlogSerializer(serializers.ModelSerializer):
 class Meta:
  model= Blog
  fields='__all__'
  #fields=('nombre','observacion')}

class ReservaSerializer(serializers.ModelSerializer):
 class Meta:
  model= Reserva
  fields='__all__'
  #fields=('nombre','observacion')}

 
class RecorridoSerializer(serializers.ModelSerializer):
 class Meta:
  model= Recorridos
  fields='__all__'
  #fields=('nombre','observacion')}


class GuiaSerializer(serializers.ModelSerializer):
 class Meta:
  model= Guias
  fields='__all__'
  #fields=('nombre','observacion')}

class FechaRecorridoSerializer(serializers.ModelSerializer):
  class Meta:
    model= FechaRecorrido
    fields='__all__'


class CarritoCompraSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.CharField(max_length=200)
    producto_precio = serializers.FloatField()
    producto_cantidad = serializers.IntegerField(required=False, default=1)

    class Meta:
        model = CarritoCompras
        fields = ('__all__') 
