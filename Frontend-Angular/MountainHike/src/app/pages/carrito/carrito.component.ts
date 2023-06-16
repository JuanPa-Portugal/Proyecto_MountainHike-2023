import { Component } from '@angular/core';
import { AdminRecorridosService } from 'src/app/shared/service/admin-recorridos.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private recorrido:AdminRecorridosService) 
  {this.recorrido.getRecorridos().subscribe({
    next: (recorridosData: any[])=>{
      this.recorridos=recorridosData
    },
    error:(errorData: any)=>{
      console.error(errorData)
    }
  })
  }
  recorridos:Array<any>=[]
  
}

