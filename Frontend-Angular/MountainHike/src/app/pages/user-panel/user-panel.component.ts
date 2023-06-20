import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/user-profile';
import { UserPanelService } from 'src/app/user-panel.service';
import { ActivatedRoute } from '@angular/router';
import { ReservasService } from 'src/app/shared/service/reservas.service';
import { Reserva } from 'src/app/shared/service/reserva';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  userProfile: UserProfile | null = null;
  reservas: Reserva[] | null = null;
  

  constructor(
    private userPanelService: UserPanelService, 
    private reservasService: ReservasService,
    private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');

    //recupero info del perfil del usuario
    this.userPanelService.getUserProfile(userId).subscribe({
      next: (data: UserProfile) => {
        console.log(data);
        this.userProfile = data;
      }, 
      error: (error) => {
        console.log(error);
      }
    });

    //recupero reservas del usuario
    this.reservasService.getReservasDeCliente(userId).subscribe({
      next: (data: Reserva[]) => {
        console.log(data);
        this.reservas = data;
      },
      error: (error) => {
        console.log(error);
      }
    })

  }
}
