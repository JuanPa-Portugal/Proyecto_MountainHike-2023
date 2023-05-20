import { Component, OnInit } from '@angular/core';
/* import { MOCK_BLOGS } from './MockBlogs'; */
import { MOCK_GUIAS } from './MockGuias';
import { Guias } from './InterfaceGuias';
import { Recorridos } from './InterfaceRecorridos';
import { Blogs } from './InterfaceBlogs';
import { AdminRecorridosService } from 'src/app/admin-recorridos.service';
import { AdminBlogsService } from 'src/app/admin-blogs.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  blogs: Blogs[] = [];
  recorridos: Recorridos[] = [];
  guias: Guias[] = []

  crearBlog:Blogs = { id: 0, titulo: '', imagen:'', articulo : '', fecha:''};
  editarBlog:Blogs = { id: 0, titulo: ' ', imagen:' ', articulo : ' ', fecha:''};
  
  crearRecorrido:Recorridos = { id: 0, titulo: ' ', imagen:' ', descripcion: ' ', dificultad:'', precio:0};
  editarRecorrido: Recorridos = { id: 0, titulo: ' ', imagen:' ', descripcion: ' ', dificultad:'', precio:0};
  constructor(private apiRecorridos:AdminRecorridosService, private apiBlogs:AdminBlogsService ) { }

  
  ngOnInit(): void {
    /* Por el momento es para una prueba muy básica de trabajo con *ngFor, y no se crea un servicio  */
    // this.blogs = MOCK_BLOGS
    this.guias = MOCK_GUIAS

    /* Acá esta la modificacion haciendo un get al inicio  */
    this.apiRecorridos.getRecorridos().subscribe((data: Recorridos[]) => {this.recorridos = data});
    this.apiBlogs.getBlogs().subscribe((data: Blogs[]) => {this.blogs = data});
  }
  /*Esta funcion se usa para hacer una igualdad al momento de trabajar con los modales*/
  editar(id: any, imagen: string, titulo: string, descripcion:string, dificultad:string, precio:number) {
    this.editarRecorrido.id = id
    this.editarRecorrido.imagen = imagen
    this.editarRecorrido.titulo = titulo
    this.editarRecorrido.descripcion = descripcion
    this.editarRecorrido.dificultad = dificultad
    this.editarRecorrido.precio = precio
  }

  editRecorrido(){
    this.apiRecorridos.patchRecorrido(this.editarRecorrido, this.editarRecorrido.id).subscribe();
    window.location.reload()
  }

  borrarRecorrido(id:string){
      this.apiRecorridos.deleteRecorrido(id).subscribe( data => {return data});
      window.location.reload()
  }

  agregarRecorrido(){
    this.apiRecorridos.postRecorrido(this.crearRecorrido).subscribe();
    window.location.reload()
  }




  editarBlogF(id: any, imagen: string, titulo: string, articulo: string, fecha: string){
    this.editarBlog.id = id
    this.editarBlog.articulo = articulo
    this.editarBlog.imagen = imagen
    this.editarBlog.titulo = titulo
    this.editarBlog.fecha = fecha 
  }

  borrarBlog(id:string){
    this.apiBlogs.deleteBlog(id).subscribe( data => {return data});
    window.location.reload()
}

  agregarBlog(){
    this.apiBlogs.postBlog(this.crearBlog).subscribe();
    window.location.reload()
  }

  editBlog(){
    this.apiBlogs.patchBlog(this.editarBlog, this.editarBlog.id).subscribe();
    window.location.reload()
  }  


  }





