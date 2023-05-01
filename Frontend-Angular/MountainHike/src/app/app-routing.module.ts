import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { IniciaSecionComponent } from './auth/inicia-secion/inicia-secion.component';
import { InicioAdminComponent } from './auth/inicio-admin/inicio-admin.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'loginPage', component: IniciaSecionComponent},
  { path: 'adminLogin', component: InicioAdminComponent},
  /* Aqui ir agregando las demás rutas EJ: {path:'nosotros', component:NosotrosComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }