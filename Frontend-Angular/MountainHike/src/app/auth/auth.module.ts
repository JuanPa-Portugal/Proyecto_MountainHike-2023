import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { IniciaSesionComponent } from './inicia-sesion/inicia-sesion.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RegisterComponent,
    IniciaSesionComponent,
    InicioAdminComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    RegisterComponent,
    IniciaSesionComponent,
    InicioAdminComponent
    
  ]

})
export class AuthModule { }
