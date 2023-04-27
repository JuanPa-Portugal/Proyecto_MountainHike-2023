import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NosotrosComponent,
    BlogsComponent,
    HomeComponent
 
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NosotrosComponent,
    BlogsComponent,
    HomeComponent
  ]
})

export class PagesModule {}



