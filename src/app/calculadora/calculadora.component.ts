import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  @Input() pantalla: string = '0';
  @Output() pantallaChange = new EventEmitter<string>();
  
  private n1!: number;
  private op!: string;
  private n2!: number;

  private onAC() {
    this.pantalla = '0';
    this.pantallaChange.emit(this.pantalla);
  }
  private onCambiaSigno() {
    this.pantalla = String((-1 * Number(this.pantalla)));
    this.pantallaChange.emit(this.pantalla);
  }
  private onPorcentaje() {
    this.pantalla = String(Number(this.pantalla) / 100);
    this.pantallaChange.emit(this.pantalla);
  }

  onGenerales(op: string) {
    switch(op) {
      case 'AC':
        this.onAC();
        break;
      case '+/-':
        this.onCambiaSigno();
        break;
      case '%':
        this.onPorcentaje();
        break;
    }
  }
  onNumero(numero: string) {
    this.pantalla += numero;
    this.pantallaChange.emit(this.pantalla);
  }

  operacion(op: string) {
    switch(op) {
      case '+':
        this.n1 = Number(this.pantalla);
        this.pantalla = '0';
        this.op = op;
        break;
      case '-':
        this.n1 = Number(this.pantalla);
        this.pantalla = '0';
        this.op = op;
        break;
      case 'x':
        this.n1 = Number(this.pantalla);
        this.pantalla = '0';
        this.op = op;
        break;
      case '/':
        this.n1 = Number(this.pantalla);
        this.pantalla = '0';
        this.op = op;
        break;
      case '=':
        this.n2 = Number(this.pantalla);
        this.pantalla = String(this.calcular());
        break;
      default:
        break;
      }
      this.pantallaChange.emit(this.pantalla);
  }
  private calcular(): any {
    switch(this.op) {
      case '+':
        return this.n1 + this.n2;
      case '-':
        return this.n1 - this.n2;
      case 'x':
        return this.n1 * this.n2;
      case '/':
        return this.n1 / this.n2;
    }
  }
}
