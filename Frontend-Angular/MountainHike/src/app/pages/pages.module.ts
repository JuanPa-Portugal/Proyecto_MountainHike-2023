import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { RecorridosComponent } from './recorridos/recorridos.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NosotrosComponent,
    BlogsComponent,
    HomeComponent,
    RecorridosComponent,
    AdminPanelComponent,
    UserPanelComponent,
    TiendaComponent,
    CarritoComponent
 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    NosotrosComponent,
    BlogsComponent,
    HomeComponent, 
    AdminPanelComponent,
    RecorridosComponent,
    UserPanelComponent,
    TiendaComponent,
    CarritoComponent
  ]
})

export class PagesModule {}



