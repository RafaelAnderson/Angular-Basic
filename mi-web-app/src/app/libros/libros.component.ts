import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  // Shift + Alt + f
  // libros = ['Cien años de Soledad', 'La fiesta del chivo', 'La Metamorfosis'];

  libros = [''];

  // Constructor
  constructor(private librosService: LibrosService) {}

  private libroSubscription!: Subscription;

  eliminarLibro(libro: any) {
    // this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(f: any) {
    // Mensaje por la consola del navegador
    // console.log('objeto formulario', f);

    //Validar que los campos no esten vacios - valid (verdadero o falso)
    if (f.valid) {
      // this.libros.push(f.value.nombreLibro)
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }
  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }
}
