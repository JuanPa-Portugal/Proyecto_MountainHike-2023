import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  dias = Array.from({length: 31}, (_, i) => i + 1);
  meses = Array.from({length: 12}, (_, i) => i + 1);
  anios = Array.from({length: 11}, (_, i) => i + 2020);
}
