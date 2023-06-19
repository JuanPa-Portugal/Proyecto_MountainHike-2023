import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminRecorridosService } from 'src/app/shared/service/admin-recorridos.service';
import { FechaRecorridosService } from 'src/app/shared/service/fecha-recorridos.service';
import { Recorridos } from '../admin-panel/InterfaceRecorridos';
import { FechaRecorrido } from 'src/app/shared/service/fecha-recorrido';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  fechaRecorrido: FechaRecorrido | null = null;
  recorrido: Recorridos | null = null ;

  constructor(
    private fechaRecorridoService: FechaRecorridosService, 
    private recorridoService: AdminRecorridosService,
    private activatedRoute: ActivatedRoute) {}


    ngOnInit(): void {
      const fechaRecorridoId = this.activatedRoute.snapshot.paramMap.get('id');
      //levanto las fechas del recorrido
      this.fechaRecorridoService.getFechaRecorrido(fechaRecorridoId).subscribe({
        next: (data: FechaRecorrido) => {
          console.log(data);
          this.fechaRecorrido = data;

          //levanto los datos del recorrido
          this.recorridoService.getRecorrido(this.fechaRecorrido?.recorrido).subscribe({
            next: (data: Recorridos) => {
              console.log(data);
              this.recorrido = data;
            },
            error: (error) => {
              console.log(error);
            }
          })


        }, 
        error: (error) => {
          console.log(error);
        }
      });


      
    }

  contador:number=0;
  
  

  incremento(){
    this.contador++;
  }
  decremento(){
    if (this.contador>0){
      this.contador--;
    }
  }
  

  
}

