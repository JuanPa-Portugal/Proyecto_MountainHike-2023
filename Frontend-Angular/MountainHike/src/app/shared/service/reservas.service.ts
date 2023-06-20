import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Reserva } from './reserva';
import { AuthService } from 'src/app/auth.service';
import { LoggedInUser } from 'src/app/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getReservasDeCliente(clienteId:any): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`http://127.0.0.1:8000/api/v1/Reservas/?cliente=${clienteId}`);
  }

  generarReservaParaFechaRecorrido(idFechaRecorrido: number | undefined, contador: number): Observable<any> {

    return this.authService.loggedUser$.pipe(
      switchMap((loggedInUser: LoggedInUser | null) => {
        if (loggedInUser) {
          console.log('Logged-in User:', loggedInUser);
  
          const reserva = {
            id: 0,
            valor: 0,
            cantidadParticipantes: contador,
            factura: null,
            vendedor: loggedInUser.id, // Pass the logged-in user object
            cliente: loggedInUser.id,
            fechaRecorrido: idFechaRecorrido
          };
        
          return this.http.post(`http://127.0.0.1:8000/api/v1/Reservas/`, reserva);
        } else {
          console.log('User is not logged in');
          // Return an Observable with an appropriate response for handling the case when the user is not logged in
          return of({ error: 'User is not logged in' });
        }
      })
    );
  }
  

}
