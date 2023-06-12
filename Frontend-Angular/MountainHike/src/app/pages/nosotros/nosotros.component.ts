import { Component, OnInit } from '@angular/core';
import { GuiasService } from 'src/app/shared/service/guias.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(private guia:GuiasService) 
  {
    this.guia.getGuias().subscribe({
      next: (guiasData: any[])=>{
        this.guias=guiasData
      },
      error:(errorData: any)=>{
        console.error(errorData)
      }
    })
  }

  guias:Array<any>=[]

  ngOnInit(): void { }

}
