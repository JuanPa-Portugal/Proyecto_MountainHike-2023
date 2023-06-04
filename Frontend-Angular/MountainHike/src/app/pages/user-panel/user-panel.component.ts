import { Component, OnDestroy, OnInit } from '@angular/core';
// import { MOCK_USER } from './MockUser';

import { User } from 'src/app/shared/service/user';
import { IniciarSesionService } from 'src/app/shared/service/iniciar-sesion.service';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit, OnDestroy {
  
  // user:User[]=[];
  userLoginOn: boolean= false;
  userData: User | undefined;


// user: any;
  

  constructor(private loginService:IniciarSesionService) { }
  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn= userLoginOn
      }
      
    })
    this.loginService.currentUserData.subscribe({
      next:(userData)=>{
        this.userData=userData;
      }
    })
    // this.user = MOCK_USER
  }

}
