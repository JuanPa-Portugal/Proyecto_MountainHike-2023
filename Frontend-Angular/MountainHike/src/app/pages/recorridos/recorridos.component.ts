
import { Component, OnInit } from '@angular/core';
import { AdminRecorridosService } from 'src/app/shared/service/admin-recorridos.service';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.css']
})
export class RecorridosComponent implements OnInit {

  constructor(private recorrido: AdminRecorridosService) {
    this.recorrido.getRecorridos().subscribe({
      next: (recorridosData: any[]) => {
        this.recorridos = recorridosData
      },
      error: (errorData: any) => {
        console.error(errorData)
      }
    })
  }

  ngOnInit(): void {
  }

  clima_LosGigantes() {
    window.location.href = 'https://www.accuweather.com/es/ar/los-gigantes/8784/weather-forecast/8784';
  }
  clima_CerroMogotes() {
    window.location.href = 'https://www.accuweather.com/es/ar/capilla-del-monte/8595/weather-forecast/8595'
  }
  clima_ValleDeLosLisos() {
    window.location.href = 'https://www.accuweather.com/es/ar/los-gigantes/8784/weather-forecast/8784'
  }
  clima_CerroChampaqui() {
    window.location.href = 'https://www.meteored.com.ar/tiempo-en_Cerro+Champaqui-America+Sur-Argentina-Cordoba--1-318167.html'
  }

  recorridos: Array<any> = []

}
