from django.contrib import admin
from .models import Usuario

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'edad', 'telefono', 'ciudad', 'estado_reserva')

admin.site.register(Usuario, UsuarioAdmin)