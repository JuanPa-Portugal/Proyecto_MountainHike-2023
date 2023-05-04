import { Component, OnInit } from '@angular/core';
import { MOCK_BLOGS } from './MockBlogs';
import { MOCK_RECORRIDOS } from './MockRecorridos';
import { MOCK_GUIAS } from './MockGuias';
import { Guias } from './InterfaceGuias';
import { Recorridos } from './InterfaceRecorridos';
import { Blogs } from './InterfaceBlogs';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

blogs:Blogs[]=[];
recorridos:Recorridos[]=[]
guias:Guias[]=[]

  constructor() { }

  ngOnInit(): void {
      /* Por el momento es para una prueba muy básica de trabajo con *ngFor, y no se crea un servicio  */
    this.blogs = MOCK_BLOGS
    this.recorridos = MOCK_RECORRIDOS
    this.guias = MOCK_GUIAS
  }

}
