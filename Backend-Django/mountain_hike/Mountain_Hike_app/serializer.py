from rest_framework import serializers
from .models import Blog
from .models import Reserva
from .models import Recorridos
from .models import Guias

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

 
class RecorridosSerializer(serializers.ModelSerializer):
 class Meta:
  model= Recorridos
  fields='__all__'
  #fields=('nombre','observacion')}


class GuiasSerializer(serializers.ModelSerializer):
 class Meta:
  model= Guias
  fields='__all__'
  #fields=('nombre','observacion')}


  