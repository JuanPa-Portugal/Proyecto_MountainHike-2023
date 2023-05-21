from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    edad = models.IntegerField()
    telefono = models.CharField(max_length=20)
    ciudad = models.CharField(max_length=30)
    estado_reserva = models.BooleanField(default=False)

  # Agrega el atributo related_name a los campos groups y user_permissions, porque al estar extendiendo de AbstractUser, se pasa a usar tambien las otras clases de django, Group y Permission, solicitan este cambio, sino da error al querer hacer python manage.py makemigrations y python manage.py migrate 
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="usuario_set",
        related_query_name="usuario",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="usuario_set",
        related_query_name="usuario",
    )

    class Meta:
        db_table = 'usuario'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    def __str__(self):
        return self.username
    
    #A partir de aqui colocar el resto de modelos.

class BlogEntrada(models.Model):
    #id = models.IntegerField()
    titulo = models.CharField(max_length=150)
    articulo = models.CharField(max_length=2000)
    imagen = models.CharField(max_length=250) 
    fecha = models.DateTimeField()

