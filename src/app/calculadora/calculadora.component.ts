import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  pantalla: string = '0';

  private n1!: number;
  private op!: string;
  private n2!: number;

  onAC() {
    this.pantalla = '0';
  }
  onCambiaSigno() {
    this.pantalla = String((-1 * Number(this.pantalla)));
  }
  onPorcentaje() {
    this.pantalla = String(Number(this.pantalla) / 100);
  }

  onNumero(numero: string) {
    this.pantalla += numero;
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
