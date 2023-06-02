import { Component, OnInit } from '@angular/core';
import { MOCK_USER } from './MockUser';
import { User } from './InterfaceUser';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  
  user:User[]=[];

  constructor() { }

  ngOnInit(): void {
    this.user = MOCK_USER
  }

}
