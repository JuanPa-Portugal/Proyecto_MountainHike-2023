from django.contrib import admin
#from .models import Usuario
from .models import Blog
from .models import Recorridos
from .models import Reserva
from .models import Guias
from .models import Factura
from .models import User
from .models import Cliente
from .models import FechaRecorrido
#from .models import Admin

#class UsuarioAdmin(admin.ModelAdmin):
#    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'edad', 'telefono', 'ciudad', 'estado_reserva')
#admin.site.register(Usuario, UsuarioAdmin)

class FechaRecorridoAdmin(admin.ModelAdmin):
    list_display = ['id', 'recorrido','fecha','guia']
admin.site.register(FechaRecorrido,FechaRecorridoAdmin)

class RecorridosAdmin(admin.ModelAdmin):
    list_display = ['id','titulo','precio','hsDuracion','cantidadMaximaDeParticipantes']
admin.site.register(Recorridos, RecorridosAdmin)

class ReservaAdmin(admin.ModelAdmin):
    list_display = ['id', 'fecha_reserva', 'nro_reserva', 'valor']
admin.site.register(Reserva, ReservaAdmin)

class GuiasAdmin(admin.ModelAdmin):
    list_display = ('id','nombre', 'apellido')
admin.site.register(Guias, GuiasAdmin)

class BlogAdmin(admin.ModelAdmin):
    list_display = ['id', 'titulo', 'fecha']
admin.site.register(Blog, BlogAdmin)

class FacturaAdmin(admin.ModelAdmin):
    list_display = ['id','total','tipo','fecha']
admin.site.register(Factura, FacturaAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = ['username','email']
admin.site.register(User, UserAdmin)

class ClienteAdmin(admin.ModelAdmin):
    list_display = ['username','email','telefono','ciudad']
admin.site.register(Cliente, ClienteAdmin)

'''
class AdminAdmin(admin.ModelAdmin):
    list_display = ['id', 'correo', 'contraseña']
admin.site.register(Admin, AdminAdmin)
'''

'''

'''




























































