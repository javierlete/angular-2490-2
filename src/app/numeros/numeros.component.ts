import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {
  @Output() nuevoNumero = new EventEmitter<Digito>();
}

export type Digito = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|',';
