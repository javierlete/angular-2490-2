import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { NumerosComponent } from './numeros/numeros.component';

@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent,
    CalculadoraComponent,
    NumerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
