import { Component, Input } from '@angular/core';
import { Anuncio } from './anuncio';


@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent {
  @Input() anuncios: Anuncio[] = [];
}
