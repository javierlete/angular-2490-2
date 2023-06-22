import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Este hay que escribirlo a mano
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { NumerosComponent } from './numeros/numeros.component';
import { AritmeticasComponent } from './aritmeticas/aritmeticas.component';
import { GeneralesComponent } from './generales/generales.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AppRoutingModule } from './app-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { JlLabelinputComponent } from './jl-labelinput/jl-labelinput.component';

@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent,
    CalculadoraComponent,
    NumerosComponent,
    AritmeticasComponent,
    GeneralesComponent,
    ClientesComponent,
    ListadoComponent,
    FormularioComponent,
    JlLabelinputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
