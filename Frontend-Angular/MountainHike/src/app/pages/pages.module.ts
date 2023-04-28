import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { RecorridosComponent } from './recorridos/recorridos.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


@NgModule({
  declarations: [
    NosotrosComponent,
    BlogsComponent,
    HomeComponent,
    RecorridosComponent,
    AdminPanelComponent,
    UserPanelComponent
 
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NosotrosComponent,
    BlogsComponent,
    HomeComponent, 
    AdminPanelComponent,
    RecorridosComponent,
    UserPanelComponent
  ]
})

export class PagesModule {}


