import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro!: string;
  @Output() libroClicked = new EventEmitter();
  //Directiva Output

  onClicked() {
    // El evento pasa al padre, se puede capturar por el método onClicked
    this.libroClicked.emit();
  }
}
