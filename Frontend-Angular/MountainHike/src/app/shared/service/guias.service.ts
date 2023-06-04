import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guias } from '../../pages/admin-panel/InterfaceGuias';

@Injectable({
  providedIn: 'root'
})
export class GuiasService {

  constructor(private http:HttpClient) { }
  //apiGuias = 'http://localhost:3000/guias';
  apiGuias = 'http://localhost:8000/api/v1/Blog/';
  getGuias(): Observable<Guias[]>{
    return this.http.get<Guias[]>(this.apiGuias);
  }
}
