import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = {} as Cliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.clienteService.obtenerPorId(id).subscribe(cliente => this.cliente = cliente);
    }
  }
  guardar() {
    if (this.cliente.id) {
      this.clienteService.modificar(this.cliente).subscribe(
        () => this.router.navigate(['/listado'])
      );
    } else {
      this.clienteService.insertar(this.cliente).subscribe(
        () => this.router.navigate(['/listado'])
      );
    }
  }
}
