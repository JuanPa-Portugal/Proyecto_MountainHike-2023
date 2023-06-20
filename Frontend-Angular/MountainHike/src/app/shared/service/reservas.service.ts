import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  getReservasDeCliente(clienteId:any): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`http://127.0.0.1:8000/api/v1/Reservas/?cliente=${clienteId}`);
  }


}
