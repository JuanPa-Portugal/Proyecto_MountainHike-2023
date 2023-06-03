from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','password']

    class Meta:
        db_table = 'customUser'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    def __str__(self):
        return self.username+" ("+self.email+")"


class Cliente(CustomUser):
    edad = models.IntegerField()
    telefono = models.CharField(max_length=20)
    ciudad = models.CharField(max_length=30)
    estado_reserva = models.BooleanField(default=False)

    class Meta:
        db_table = 'cliente'
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'

    def __str__(self):
        return "Cliente "+self.username+" ("+self.email+")"

  # Agrega el atributo related_name a los campos groups y user_permissions, porque al estar extendiendo de AbstractUser, se pasa a usar tambien las otras clases de django, Group y Permission, solicitan este cambio, sino da error al querer hacer python manage.py makemigrations y python manage.py migrate 
    '''
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
    '''

    #A partir de aqui colocar el resto de modelos.

class Blog(models.Model):
    id = models.AutoField(primary_key= True)
    titulo = models.CharField(max_length=150)
    articulo = models.TextField()
    imagen =  models.URLField()
    fecha = models.DateTimeField()

    class Meta:
        db_table = 'blog'
        verbose_name = 'Blog'
        verbose_name_plural = 'Blogs'

    def __str__(self):
        return 'Entrada "'+self.titulo+'" del '+self.fecha.strftime("%Y/%m/%d a las %H:%M:%S")
    
class Recorridos(models.Model):
    id = models.AutoField(primary_key=True)
    titulo= models.CharField(max_length=100)
    imagen=  models.URLField()
    descripcion=  models.TextField()
    dificultad= models.CharField(max_length=50)
    precio=  models.FloatField()

    class Meta:
        db_table = 'recorrido'
        verbose_name = 'Recorrido'
        verbose_name_plural = 'Recorridos'

    def __str__(self):
        return self.titulo

class Reserva(models.Model):
    id= models.AutoField(primary_key= True)
    fecha_reserva= models.DateTimeField()
    nro_reserva= models.IntegerField()
    valor = models.FloatField()
    id_factura = models.ForeignKey('Factura', on_delete=models.CASCADE)
    id_usuario= models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    id_recorrido = models.ForeignKey('Recorridos', on_delete=models.CASCADE)
    class Meta:
        db_table = 'reserva'
        verbose_name = 'Reserva'
        verbose_name_plural = 'Reservas'

 
    # def __str__(self):
    #     return self.nro_reserva
class Guias(models.Model):
    id = models.AutoField(primary_key= True)
    nombre= models.CharField(max_length=150)
    apellido = models.CharField(max_length=150)
    foto = models.URLField()
    descripcion = models.TextField()

    class Meta:
        db_table = 'guia'
        verbose_name = 'Guia'
        verbose_name_plural = 'Guias'

    def __str__(self):
        return self.nombre
class Factura(models.Model):
    id = models.AutoField(primary_key=True)
    total = models.FloatField()
    tipo =  models.CharField(max_length= 1)
    fecha_apertura =  models.DateTimeField()
    fecha_cierre = models.DateTimeField()
    id_usuario= models.ForeignKey('CustomUser', on_delete=models.CASCADE)

    class Meta:
            db_table = 'factura'
            verbose_name = 'Factura'
            verbose_name_plural = 'Facturas'

    def __str__(self):
            return self.tipo


    
    '''
class Admin(models.Model):
    id = models.AutoField(primary_key=True)
    correo = models.CharField(max_length=30)
    contraseña = models.CharField(max_length=30)
    
    class Meta:
            db_table = 'admin'
            verbose_name = 'Admin'
            verbose_name_plural = 'Admins'

    def __str__(self):
            return self.correo

            '''