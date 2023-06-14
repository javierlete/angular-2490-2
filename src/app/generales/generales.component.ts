import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent {
  @Output() generalPulsado = new EventEmitter<string>();
}
