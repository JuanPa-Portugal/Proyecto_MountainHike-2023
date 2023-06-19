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
  apiGuias = 'http://localhost:8000/api/v1/Guias/';
  getGuias(): Observable<Guias[]>{
    return this.http.get<Guias[]>(this.apiGuias);
  }
  deleteGuias(id:any):Observable<any>{
    return this.http.delete(`${this.apiGuias}/${id}`);
  }

  patchGuias(arr: Guias, id:any):Observable<any>{
    console.log(arr, id)
    return this.http.patch(`${this.apiGuias}/${id}`,arr)
  }

  postGuias(arr: Guias):Observable<any>{
      return this.http.post(`${this.apiGuias}`,arr)
  }

  getGuia(guiaId:any): Observable<Guias> {
    return this.http.get<Guias>(this.apiGuias+guiaId+'/');
  }

}
