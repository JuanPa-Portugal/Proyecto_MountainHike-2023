import { Injectable } from '@angular/core';
import { iniciarSesionRequest } from './iniciarSesionRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {

  isLoggedIn:boolean= false;

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //no va a estar logueago en principio
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});

  constructor(private http: HttpClient) { }

  login(credentials:iniciarSesionRequest):Observable<User>{
    // console.log(credentials)
    //acá va la petición http
  return this.http.get<User>('././assets/data.json').pipe(
    tap((userData: User)=>{
      this.currentUserData.next(userData);
      this.isLoggedIn = true;
      this.currentUserLoginOn.next(true)
    }),
    catchError(this.handleError)
  )

  }
//manejador de errores
private handleError(error:HttpErrorResponse){
  if (error.status===0){
    console.error('Se ha producido un error', error.error);
  }
  else{
    console.error('Backend retornó el código de estado', error.status, error.error);
  }
  return throwError(()=>new Error('Algo falló. Por favor intente nuevamente'))
}
get userData():Observable<User>{
  return this.currentUserData.asObservable();
}
get userLoginOn():Observable<boolean>{
  return this.currentUserLoginOn.asObservable();
}

logout(): void {
  this.isLoggedIn=false;
  this.currentUserData.next({ id: 0, email: '' });
  this.currentUserLoginOn.next(false);
}

}
