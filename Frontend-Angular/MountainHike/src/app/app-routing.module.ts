import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
<<<<<<< HEAD

=======
import { InicioAdminComponent } from './auth/inicio-admin/inicio-admin.component';
import { IniciaSesionComponent } from './auth/inicia-sesion/inicia-sesion.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
>>>>>>> 739daafa82fa34753fb5bd96e4b3b339c29ca950
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
<<<<<<< HEAD
  
=======
  { path: 'userLogin', component: IniciaSesionComponent},
  { path: 'adminLogin', component: InicioAdminComponent},
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'user-panel', component: UserPanelComponent},
  { path:'nosotros', component: NosotrosComponent}
>>>>>>> 739daafa82fa34753fb5bd96e4b3b339c29ca950
  /* Aqui ir agregando las demás rutas EJ: {path:'nosotros', component:NosotrosComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }