import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MountainHike';
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.recoverPreviousSessionIfPossible();
  }
}




