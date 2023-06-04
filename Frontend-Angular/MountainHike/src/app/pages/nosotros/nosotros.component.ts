import { Component, OnInit } from '@angular/core';
import { Guias } from '../admin-panel/InterfaceGuias';
import { GuiasService } from 'src/app/shared/service/guias.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
guias: Guias[] = []

  constructor(private apiGuias:GuiasService) { }

  ngOnInit(): void {
    this.apiGuias.getGuias().subscribe((data:Guias[]) => {this.guias = data});
  }

}
