import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  obtenerTodos(): Cliente[] {
    return [
      {
        "id": 1,
        "nombre": "Javier",
        "apellido": "Lete"
      },
      {
        "id": 2,
        "nombre": "Pepe",
        "apellido": "Pérez"
      }
    ];
  }
}
