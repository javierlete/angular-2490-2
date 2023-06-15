import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  URL_CLIENTES = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient) {}
  obtenerTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URL_CLIENTES);
  }

  obtenerPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.URL_CLIENTES + id);
  }

  insertar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URL_CLIENTES, cliente);
  }

  modificar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.URL_CLIENTES + cliente.id, cliente);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(this.URL_CLIENTES + id);
  }
}
