import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/shared/service/iniciar-sesion.service';
import { iniciarSesionRequest } from 'src/app/shared/service/iniciarSesionRequest';
import { AuthService } from "../../auth.service";
import { LoggedInUser, UserCredentials } from "../../auth/auth";

@Component({
  selector: 'app-inicia-sesion',
  templateUrl: './inicia-sesion.component.html',
  styleUrls: ['./inicia-sesion.component.css']
})

export class IniciaSesionComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  token: string = '';
  error: string | null = null;
  //#success: string = null;
  
  constructor(
      private formBuilder: FormBuilder, 
      private router: Router,
      private authService: AuthService
  ) {} 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    if (this.loginForm.valid){
      console.log("llamar al servicio de login");
      this.authService.logIn(this.loginForm.value).subscribe({
        next: (data: LoggedInUser) => {
            this.token = data.token!;
            console.log(data);
//            this.router.navigate(['/user-panel']);
            this.router.navigateByUrl(`/user-panel/${data.id}`)
        },
        error: (errorRes) => {
          this.error = errorRes;
        },
      });
      this.loginForm.reset();
    } else{
      alert("error al ingresar los datos")
    }
    this.loginForm.reset();
  }
    


 
  }


