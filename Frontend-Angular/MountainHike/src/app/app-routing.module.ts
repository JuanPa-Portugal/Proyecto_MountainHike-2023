import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { InicioAdminComponent } from './auth/inicio-admin/inicio-admin.component';
import { IniciaSesionComponent } from './auth/inicia-sesion/inicia-sesion.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { RecorridosComponent } from './pages/recorridos/recorridos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { FechasDeRecorridoComponent } from './pages/fechas-de-recorrido/fechas-de-recorrido.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userLogin', component: IniciaSesionComponent},
  { path: 'adminLogin', component: InicioAdminComponent},
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'recorridos', component: RecorridosComponent},
  { path: 'user-panel/:id', component: UserPanelComponent},
  { path: 'fechas-de-recorrido/:id', component: FechasDeRecorridoComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'blog', component: BlogsComponent},
  { path: 'carrito/:id', component: CarritoComponent},
  { path: '**', component:Pagina404Component},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }