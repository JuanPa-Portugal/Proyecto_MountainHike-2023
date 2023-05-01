import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { InicioAdminComponent } from './auth/inicio-admin/inicio-admin.component';
import { IniciaSesionComponent } from './auth/inicia-sesion/inicia-sesion.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userLogin', component: IniciaSesionComponent},
  { path: 'adminLogin', component: InicioAdminComponent}
  /* Aqui ir agregando las demás rutas EJ: {path:'nosotros', component:NosotrosComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }