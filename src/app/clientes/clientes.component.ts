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

  constructor(private clienteService: ClienteService) {}
  
  ngOnInit(): void {
    this.clienteService.obtenerTodos().subscribe(
      clientesRecibidos => this.clientes = clientesRecibidos);
  }

  guardar() {
    this.clienteService.insertar(this.cliente).subscribe(
      clienteRecibido => this.clientes.push(clienteRecibido)
    )
  }
}
