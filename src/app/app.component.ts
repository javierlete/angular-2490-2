import { Component } from '@angular/core';
import { Anuncio } from './anuncios/anuncio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eco: string = '0';
  
  frameworks: Anuncio[] = [
    {
      foto: 'https://picsum.photos/200?1',
      alternativo: 'Angular',
      ruta: 'https://angular.io'
    },
    {
      foto: 'https://picsum.photos/200?2',
      alternativo: 'React',
      ruta: 'https://reactjs.org'
    },
    {
      foto: 'https://picsum.photos/200?3',
      alternativo: 'Vue',
      ruta: 'https://vuejs.org'
    }
  ];

  buscadores: Anuncio[] = [
    {
      foto: 'https://picsum.photos/200?1',
      alternativo: 'Google',
      ruta: 'http://www.google.es'
    },
    {
      foto: 'https://picsum.photos/200?2',
      alternativo: 'Bing',
      ruta: 'http://www.bing.es'
    }
  ];
}
