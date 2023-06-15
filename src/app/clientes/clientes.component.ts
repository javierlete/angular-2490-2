import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  cliente: Cliente = {} as Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listado();
  }

  private listado() {
    this.cliente = {} as Cliente;
    
    this.clienteService.obtenerTodos().subscribe(
      clientesRecibidos => this.clientes = clientesRecibidos);
  }

  guardar() {
    if (this.cliente.id) {
      this.clienteService.modificar(this.cliente).subscribe(
        () => this.listado()
      );
    } else {
      this.clienteService.insertar(this.cliente).subscribe(
        //clienteRecibido => this.clientes.push(clienteRecibido)
        () => this.listado()
      )
    }
  }

  borrar(id: number) {
    this.clienteService.borrar(id).subscribe(
      () => this.listado()
    );
  }

  editar(id: number) {
    this.clienteService.obtenerPorId(id).subscribe(
      clienteRecibido => this.cliente = clienteRecibido
    );
  }
}
