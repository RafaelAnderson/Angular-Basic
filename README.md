# Angular 12

Arquitecturas sólidas con Angular 12, NET Core, Firebase, Redis, Docker Containers, SQL Server

## Instalación Node y npm

Enlace de descarga de Node.js (LTL): https://nodejs.org/en/

## Instalación de Angular

En una terminal ejecutar el siguiente comando: npm install -g @angular/cli

### Instalación de extensiones en VS Code

* angular2-inline -> natewallace.angular2-inline
* Angular Language Service -> angular.ng-template
* Debugger Chrome -> angular.ng-template
* Angular Snippets (by John Papa) -> johnpapa.angular2
* EditorConfig for VSCode -> editorconfig.editorconfig
* Material Icon Theme -> pkief.material-icon-theme
* Prettier - Code formatter -> esbenp.prettier-vscode
* TSLint -> ms-vscode.vscode-typescript-tslint-plugin


### Creación proyecto Angular

1. En la terminal abrir la dirección donde se creará el proyecto (cd ...) 
2. ng new NOMBRE_PROYECTO, enter
3. Would you like to add Angular routing? Y, enter
4. Elegir el formato de estilos, enter
5. En la terminal: cd NOMBRE-PROYECTO, enter
6. En la terminal: code ., enter
7. El proyecto estará abierto en VS Code :)

### Agregar Angular Material
1. En la terminal: ng add @angular/material
2. "y" en las opciones
3. Listo

### En la terminar ingresar: ng g c seguridad/registrar --module app.module
*g -> generar
*c -> componente
*seguridad/registrar -> crear la carpeta seguridad y el archivo registrar
*--module app.module -> importación sobre app.module.ts