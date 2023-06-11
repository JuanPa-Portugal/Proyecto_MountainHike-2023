import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { LoggedInUser } from 'src/app/auth/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedUser!: LoggedInUser | null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedUser$.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
  }

}
