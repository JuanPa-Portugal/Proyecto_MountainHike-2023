import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { BlogsComponent } from './pages/blogs/blogs.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent} ,
  { path: 'blog', component: BlogsComponent}
  /* Aqui ir agregando las demás rutas EJ: {path:'nosotros', component:NosotrosComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }