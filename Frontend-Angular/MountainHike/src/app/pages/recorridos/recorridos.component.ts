import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.css']
})
export class RecorridosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clima_LosGigantes(){
    window.location.href= 'https://www.accuweather.com/es/ar/los-gigantes/8784/weather-forecast/8784';
  }
  clima_CerroMogotes(){
    window.location.href='https://www.accuweather.com/es/ar/capilla-del-monte/8595/weather-forecast/8595'
  }
  clima_ValleDeLosLisos(){
    window.location.href='https://www.accuweather.com/es/ar/los-gigantes/8784/weather-forecast/8784'
  }
  clima_CerroChampaqui(){
    window.location.href='https://www.meteored.com.ar/tiempo-en_Cerro+Champaqui-America+Sur-Argentina-Cordoba--1-318167.html'
  }

}
