import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  // Shift + Alt + f
  libros = ['Cien años de Soledad', 'La fiesta del chivo', 'La Metamorfosis'];
}
