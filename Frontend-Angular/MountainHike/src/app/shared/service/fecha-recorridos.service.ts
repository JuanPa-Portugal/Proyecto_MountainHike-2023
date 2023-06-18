import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FechaRecorrido } from './fecha-recorrido';

@Injectable({
  providedIn: 'root'
})
export class FechaRecorridosService {

  constructor(private http: HttpClient) { }

  getFechaRecorrido(recorridoId:any): Observable<FechaRecorrido[]> {
    return this.http.get<FechaRecorrido[]>(`http://127.0.0.1:8000/api/v1/FechaRecorridos/?recorrido=${recorridoId}`);
  }


}
