import { Subject } from "rxjs";

export class LibrosService {
  librosSubject = new Subject();

  // Solo la clase que lo contiene tiene la clase a este recurso
  private libros = [
    'Libros de Vaxi',
    'Libro de Aritmética',
    'El Gráfico Revista',
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros() {
    // Esta linea es suficiente siempre y cuando los valores sean estáticos
    // return this.libros;

    // Devuelve libros existentes y también los agregados
    return [...this.libros];
  }
}
