import { Component, OnInit } from '@angular/core';
import { MOCK_BLOGS } from './MockBlogs';
import { MOCK_RECORRIDOS } from './MockRecorridos';
import { MOCK_GUIAS } from './MockGuias';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  /* Deuda técnica (any) */
blogs:any;
recorridos:any
guias:any

  constructor() { }

  ngOnInit(): void {
      /* Por el momento es para una prueba muy básica de trabajo con *ngFor, y no se crea un servicio  */
    this.blogs = MOCK_BLOGS
    this.recorridos = MOCK_RECORRIDOS
    this.guias = MOCK_GUIAS
  }

}
