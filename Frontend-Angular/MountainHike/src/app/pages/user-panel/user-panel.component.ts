import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/user-profile';
import { UserPanelService } from 'src/app/user-panel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  userProfile: UserProfile | null = null;
  

  constructor(
    private userPanelService: UserPanelService, 
    private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userPanelService.getUserProfile(userId).subscribe({
      next: (data: UserProfile) => {
        console.log(data);
        this.userProfile = data;
      }, 
      error: (error) => {
        console.log(error);
      }
    });
  }
}
