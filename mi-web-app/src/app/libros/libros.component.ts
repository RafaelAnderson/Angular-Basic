import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  // Shift + Alt + f
  libros = ['Cien años de Soledad', 'La fiesta del chivo', 'La Metamorfosis'];

  eliminarLibro(libro: any) {
    this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(f: any){
    // Mensaje por la consola del navegador
    // console.log('objeto formulario', f);

    //Validar que los campos no esten vacios - valid (verdadero o falso)
    if(f.valid){
      this.libros.push(f.value.nombreLibro)
    }
  }
}
