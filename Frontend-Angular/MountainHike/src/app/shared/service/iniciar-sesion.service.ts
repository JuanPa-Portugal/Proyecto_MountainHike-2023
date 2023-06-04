import { Injectable } from '@angular/core';
import { iniciarSesionRequest } from './iniciarSesionRequest';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {

  constructor() { }

  login(credentials:iniciarSesionRequest){
    console.log(credentials)
    //acá va la petición http

  }
}
