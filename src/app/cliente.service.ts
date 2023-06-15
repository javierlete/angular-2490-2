import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  obtenerTodos(): Observable<Cliente[]> {
    return of([
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
    ]);
  }
}
