import { Component, OnInit } from '@angular/core';
import { MOCK_USER } from './MockUser';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
/* Deuda tecnica */
  user:any;
  constructor() { }

  ngOnInit(): void {
    this.user = MOCK_USER
  }

}
