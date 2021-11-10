import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro!: string;
  @Output() libroClicked = new EventEmitter();
  //Directiva Output

  constructor(private librosService: LibrosService) {}

  onClicked() {
    // El evento pasa al padre, se puede capturar por el método onClicked
    // this.libroClicked.emit();
    this.librosService.eliminarLibro(this.tituloLibro);
  }
}
