import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aritmeticas',
  templateUrl: './aritmeticas.component.html',
  styleUrls: ['./aritmeticas.component.css']
})
export class AritmeticasComponent {
  @Output() operacionPulsada = new EventEmitter<string>();
}
