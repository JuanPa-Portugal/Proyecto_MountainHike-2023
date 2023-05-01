import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { IniciaSecionComponent } from './auth/inicia-secion/inicia-secion.component';
import { InicioAdminComponent } from './auth/inicio-admin/inicio-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciaSecionComponent,
    InicioAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
