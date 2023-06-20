import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  clientes: Cliente[] = [];
  
  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteService.obtenerTodos().subscribe(clientes => this.clientes = clientes);
  }

  borrar(id: number) {
    this.clienteService.borrar(id).subscribe(() => this.clientes = this.clientes.filter(cliente => cliente.id !== id));
  }

}
