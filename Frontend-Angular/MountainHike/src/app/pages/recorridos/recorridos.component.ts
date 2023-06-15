
import { Component, OnInit } from '@angular/core';
import { AdminRecorridosService } from 'src/app/shared/service/admin-recorridos.service';

@Component({
  selector: 'app-recorridos',
  templateUrl: './recorridos.component.html',
  styleUrls: ['./recorridos.component.css']
})
export class RecorridosComponent implements OnInit {

  constructor(private recorrido:AdminRecorridosService) 
  {this.recorrido.getRecorridos().subscribe({
    next: (recorridosData: any[])=>{
      this.recorridos=recorridosData
    },
    error:(errorData: any)=>{
      console.error(errorData)
    }
  })
   }

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

  recorridos:Array<any>=[
    {
      imagen:'../../../assets/img/recorridos/imagen02.jpg',
      titulo: 'Los Gigantes',
      texto: 'Sendero muy técnico y con zonas de mucho peligro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ipsa perspiciatis voluptate tempora, adipisci odit. Nesciunt nam eligendi eius beatae, at ducimus dolorum facere aliquam molestias, laborum quibusdam sequi maxime?',
      botonFecha: 'Seleccionar Fecha',
      botonClima:'Consultá el clima',
      imgDificultad:'../../../assets/img/recorridos/dif-max.png'
  
  },
  {
    imagen:'../../../assets/img/recorridos/cerromogotes.jpg',
    titulo: 'Paseo Los Mogotes y Paso del Indio',
    texto: 'Entre vistas panorámicas increíbles, sitios para refrescarse y senderos para caminar, Los Mogotes es un paseo completo en Capilla del Monte. A solo dos kilómetros del área céntrica de la localidad, se puede llegar caminando, en bici o en auto.',
    botonFecha: 'Seleccionar Fecha',
    botonClima:'Consultá el clima',
    imgDificultad:'../../../assets/img/recorridos/dif-min.png'

},
{
  imagen:'../../../assets/img/recorridos/cerrochampaqui.jpg',
  titulo: 'Cerro Champaquí',
  texto: 'La punta más alta de esta serie de montañas y, por esto, brinda una visión 360 grados de Los   Gigantes.El camino comienza por el sendero norte con una caminata intensa de 5 horas. Luego, una vez en la base del cerro, el grupo aprovecha para dejar mochilas y cargamento en un refugio y se prepara para afrontar el último tramo hasta la cima.La caminata es de dificultad media/alta y lleva todo un día.',
  botonFecha: 'Seleccionar Fecha',
  botonClima:'Consultá el clima',
  imgDificultad:'../../../assets/img/recorridos/dif-max.png'

}


  ]

}
