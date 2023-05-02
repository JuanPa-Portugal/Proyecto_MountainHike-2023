import { Component, OnInit } from '@angular/core';
import { MOCK_GUIAS } from './MockGuias';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
guias:any
  constructor() { }

  ngOnInit(): void {
    this.guias= MOCK_GUIAS
  }

}
