import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recorridos } from './pages/admin-panel/InterfaceRecorridos';

@Injectable({
  providedIn: 'root'
})
export class AdminRecorridosService {
  apiRecorridos = 'http://localhost:3000/recorridos';

  constructor(private http:HttpClient) { }

  getRecorridos(): Observable<Recorridos[]> {
    return this.http.get<Recorridos[]>(this.apiRecorridos);
  }

  deleteRecorrido(id:any):Observable<any>{
    return this.http.delete(`${this.apiRecorridos}/${id}`);
  }

  patchRecorrido(arr: Recorridos, id:any):Observable<any>{
    console.log(arr, id)
    return this.http.patch(`${this.apiRecorridos}/${id}`,arr)
  }

  postRecorrido(arr: Recorridos):Observable<any>{
      return this.http.post(`${this.apiRecorridos}`,arr)
  }

}
