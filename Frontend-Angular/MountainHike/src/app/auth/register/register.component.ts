import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registroForm=this.formBuilder.group({
    nombre:['Florencia', Validators.required],
    apellido:['Morisse', Validators.required],
    email:['florencia@gmail.com',[Validators.required, Validators.email]],
    password:['1234', [Validators.required, Validators.minLength(8)]],
    cb:[false, Validators.requiredTrue]
  })

  constructor(private formBuilder:FormBuilder, private router:Router){}

  get nombre(){
    return this.registroForm.controls.nombre
  }
  get apellido(){
    return this.registroForm.controls.apellido
  }
  get email(){
    return this.registroForm.controls.email
  }
  get password(){
    return this.registroForm.controls.password
  }
  get cb(){
    return this.registroForm.controls.cb
  }

  registro(){

    if (this.registroForm.valid){
      this.router.navigateByUrl('/recorridos');
      //me redirige hacia recorridos, me tiene que redirigir al dashboard que hay que hacer
    }
    else{
      alert('error al ingresar los datos')
    }
  }
  }


