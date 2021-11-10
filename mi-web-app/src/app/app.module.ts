import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// app.component viene del app.component.ts
import { AppComponent } from './app.component';
// Componente Usuario
import { UsuarioComponent } from './usuario.component';
//
import { FormsModule } from '@angular/forms';
//
import { LibroComponent } from './libro/libro.component';
import { LibrosComponent } from './libros/libros.component';
// Libro Service
import { LibrosService } from './services/libros.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Formularios en Angular
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
