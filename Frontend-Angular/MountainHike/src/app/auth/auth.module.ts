import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {IniciaSecionComponent} from './inicia-secion/inicia-secion.component'
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';



@NgModule({
  declarations: [
    RegisterComponent,
   

  ],
  imports: [
    CommonModule,
    IniciaSecionComponent,
    InicioAdminComponent
  ],
  exports: [
    RegisterComponent,
    IniciaSecionComponent,
    InicioAdminComponent
    
  ]

})
export class AuthModule { }
