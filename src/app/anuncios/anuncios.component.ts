import { Component } from '@angular/core';
import { Anuncio } from './anuncio';


@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent {
  anuncios: Anuncio[] = [
    {
      foto: 'https://picsum.photos/200?1',
      alternativo: 'Primer anuncio',
      ruta: 'http://www.google.es'
    },
    {
      foto: 'https://picsum.photos/200?2',
      alternativo: 'Segundo anuncio',
      ruta: 'http://www.bing.es'
    }
  ];
}
