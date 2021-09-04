import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent{
  // Variable tipo array
  usuarios = ['Rafael', 'Anderson', 'Lina'];

  // Variable
  usuarioNombre = "";

  // Método ngIf
  visible = false

  constructor(){
    // Controlar el tiempo de ejecución en JavaScript ( ngIf )
    setTimeout( () => {
      this.visible = true;
    }, 3000);
  }

  // Método para agregar dinámicamente
  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }
}
