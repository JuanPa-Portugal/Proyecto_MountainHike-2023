import { Component, OnDestroy, OnInit } from '@angular/core';
import { IniciaSesionComponent } from 'src/app/auth/inicia-sesion/inicia-sesion.component';
import { IniciarSesionService } from '../service/iniciar-sesion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLoginOn!: boolean;

  constructor( private loginService:IniciarSesionService, private router: Router ) { }

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe()
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn
      }
    })
  }

  CerrarSesion(): void {
    if (this.loginService.isLoggedIn){
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }
  }
  

}
