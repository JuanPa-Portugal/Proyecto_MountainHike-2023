import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/shared/service/iniciar-sesion.service';
import { iniciarSesionRequest } from 'src/app/shared/service/iniciarSesionRequest';

@Component({
  selector: 'app-inicia-sesion',
  templateUrl: './inicia-sesion.component.html',
  styleUrls: ['./inicia-sesion.component.css']
})
export class IniciaSesionComponent  implements OnInit {

  loginForm=this.formBuilder.group({
    email:['florencia@gmail.com', [Validators.required, Validators.email ]],
    password:['1234', Validators.required]

  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:IniciarSesionService) { }

  ngOnInit(): void {
    
  }
  get email(){
    return this.loginForm.controls.email
  }
  get password(){
    return this.loginForm.controls.password
  }

  login(){
    if (this.loginForm.valid){
      this.loginService.login(this.loginForm.value as iniciarSesionRequest)
      this.router.navigateByUrl('/recorridos');
      //me redirige hacia recorridos, me tiene que redirigir al dashboard que hay que hacer
      this.loginForm.reset();
    }
    else{
      alert("error al ingresar los datos")
    }
  }
    
  
 private Nombre= "Ezequiel";
 private Apellido= "Baez";
 private Edad= 0 ;
 private Email="@gmail";



// --Metodoget--
 /*getNombre(){
  return this.Nombre;
 }
 getApellido(){
  return this.Apellido;
  
 }
 getEdad(){
  return this.Edad;
 }
 getEmail(){
  return this.Email;
 }*/

 
  }


