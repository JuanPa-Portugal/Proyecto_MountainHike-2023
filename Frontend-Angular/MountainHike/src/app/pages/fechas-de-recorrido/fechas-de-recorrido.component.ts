import { Component, OnInit } from '@angular/core';
import { FechaRecorrido } from 'src/app/shared/service/fecha-recorrido';
import { FechaRecorridosService } from 'src/app/shared/service/fecha-recorridos.service';
import { AdminRecorridosService } from 'src/app/shared/service/admin-recorridos.service';
import { ActivatedRoute } from '@angular/router';
import { Recorridos } from '../admin-panel/InterfaceRecorridos';

@Component({
  selector: 'app-fechas-de-recorrido',
  templateUrl: './fechas-de-recorrido.component.html',
  styleUrls: ['./fechas-de-recorrido.component.css']
})
export class FechasDeRecorridoComponent implements OnInit {

  fechasRecorrido: FechaRecorrido[] | null = null;
  recorrido: Recorridos | null = null ;

  constructor(
    private fechaRecorridoService: FechaRecorridosService, 
    private recorridoService: AdminRecorridosService,
    private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    const recorridoId = this.activatedRoute.snapshot.paramMap.get('id');
    //levanto los datos del recorrido
    this.recorridoService.getRecorrido(recorridoId).subscribe({
      next: (data: Recorridos) => {
        console.log(data);
        this.recorrido = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
    
    //levanto las fechas del recorrido
    this.fechaRecorridoService.getFechaRecorrido(recorridoId).subscribe({
      next: (data: FechaRecorrido[]) => {
        console.log(data);
        this.fechasRecorrido = data;
      }, 
      error: (error) => {
        console.log(error);
      }
    });
  }
}
