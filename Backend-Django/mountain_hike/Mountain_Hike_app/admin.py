from django.contrib import admin
from .models import Usuario
from .models import Blog
from .models import Recorridos
from .models import Reserva
from .models import Guias
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'edad', 'telefono', 'ciudad', 'estado_reserva')
admin.site.register(Usuario, UsuarioAdmin)

class RecorridosAdmin(admin.ModelAdmin):
    list_display = ['id','titulo','imagen','descripcion','dificultad','precio']
admin.site.register(Recorridos, RecorridosAdmin)

class ReservaAdmin(admin.ModelAdmin):
    list_display = ['id', 'fecha_reserva', 'nro_reserva', 'valor', 'id_usuario', 'id_recorrido']
admin.site.register(Reserva, ReservaAdmin)

class GuiasAdmin(admin.ModelAdmin):
    list_display = ('id','nombre', 'apellido', 'foto', 'descripcion')
admin.site.register(Guias, GuiasAdmin)

class BlogAdmin(admin.ModelAdmin):
    list_display = ['id', 'titulo', 'articulo', 'imagen', 'fecha']
admin.site.register(Blog, BlogAdmin)
