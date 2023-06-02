
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registroForm = this.formBuilder.group({
      nombre: ['Florencia', Validators.required],
      apellido: ['Morisse', Validators.required],
      email: ['florencia@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', Validators.required],
      cb: [true, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const password2 = control.get('password2')?.value;

    return password === password2 ? null : { 'passwordMismatch': true };
  };

  get nombre() {
    return this.registroForm.controls['nombre'];
  }
  get apellido() {
    return this.registroForm.controls['apellido'];
  }
  get email() {
    return this.registroForm.controls['email'];
  }
  get password() {
    return this.registroForm.controls['password'];
  }
  get password2() {
    return this.registroForm.controls['password2'];
  }
  get cb() {
    return this.registroForm.controls['cb'];
  }
  get f() {
    return this.registroForm.controls;
  }

  registro() {
    if (this.registroForm.valid) {
      console.log(this.registroForm);
      //quiero ver si me está tomando todo
      this.router.navigateByUrl('/recorridos');
      //me redirige hacia recorridos, me tiene que redirigir al dashboard que hay que hacer
    } else {
      alert('error al ingresar los datos');
      return;
    }
  }
}


