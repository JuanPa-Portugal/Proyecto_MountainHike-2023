import { Component, OnInit } from '@angular/core';
import { FechaRecorrido } from 'src/app/shared/service/fecha-recorrido';
import { FechaRecorridosService } from 'src/app/shared/service/fecha-recorridos.service';
import { AdminRecorridosService } from 'src/app/shared/service/admin-recorridos.service';
import { ActivatedRoute } from '@angular/router';
import { Recorridos } from '../admin-panel/InterfaceRecorridos';
import { GuiasService } from 'src/app/shared/service/guias.service';
import { Guias } from '../admin-panel/InterfaceGuias';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


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
    private guiaService: GuiasService,
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
    this.fechaRecorridoService.getFechasDeRecorrido(recorridoId).subscribe({
      next: (data: FechaRecorrido[]) => {
        console.log(data);
        this.fechasRecorrido = data;
      }, 
      error: (error) => {
        console.log(error);
      }
    });
  }

  getNombreGuia(guiaId:any):string {
    var result = "";

    this.guiaService.getGuia(guiaId).subscribe({
      next: (data: Guias) => {
        console.log(data);
        result = data.nombre+' '+data.apellido        
      },
      error: (error) => {
        console.log(error)
        result = "(No se pudo determinar el nombre del guía)"
      }
    })
    return result;
  }

  getNombreGuiaV2(guiaId: any): Observable<string> {
    return this.guiaService.getGuia(guiaId).pipe(
      map((data: Guias) => {
        console.log(data);
        return data.nombre + ' ' + data.apellido;
      }),
      catchError((error) => {
        console.log(error);
        return of('(No se pudo determinar el nombre del guía)' as string);
      })
    );
  }

}
