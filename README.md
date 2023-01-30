# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://
angular.io/cli) page.

---

## Curso de fundamentos de Angular

## Primeros pasos

### Qué es Angular: ventajas y cómo aprenderlo

Angular se considera no solo un framework, es toda una plataforma con módulos y paquetes listos para ser usados en tu aplicación.
Angular tiene un gran rendimientos de las apps. Es multiplataforma.

### Instalación de Angular CLI

En la [documentación oficial](https://angular.io/guide/setup-local) nos dice que hagamos `npm i -g angular/cli`

- Para saber qué versión tienes de la angular CLI, haz `ng version`.
- Para crear un nuevo proyecto, haz `ng new 'nombre-del-proyecto'` (ten cuidado de NO usar mayúsculas, espacios, caracteres con acentos o ñÑ).
- Para correr el proyecto usamos el bien conocido `npm start`

### Comandos de Angular para correr tu proyecto

- Correr proyecto y abrir navegador automáticamente: `ng serve -o` (o para open)
- Especificar un puerto donde correr el proyecto: `ng serve --port=3500`
- Si hacemos `ng -version` dentro de la carpeta del proyecto, nos dará información del proyecto y las dependencias del mismo.

### Estructura de un proyecto en Angular

Angular tiene varios archivos importantes para el correcto desarrollo y funcionamiento del proyecto.

- .editorconfig es para que todo el equipo de desarrolladores sigan las mismas reglas de escrituras del código
- angular.json son configuraciones propias de angular
- tsconfig.json son conriguraciones de typescript
- .nvmrc te dará una versión recomendada de node para correr el proyecto (la puedes definir tú haciendo `node -v > .nvmrc`)

### Conceptos básicos de TypeScript para usar Angular

```typescript
const username: string = 'mike';

const sum = (a: number, b: number): number => {
  return a + b;
}

console.log(sum(4, 8));

class Person {
  constructor(public age: number, public lastName: string) {}
}

const mike = new Person(24, 'Reyes');

console.log(mike);

```

## Comunicación de datos

### String interpolation

Angular divide el trabajo de la app en componentes.

- html para renderizado
- css para estilos
- ts para lógica

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
}

```

El decorador '@Component' le dice a la clase cómo debe comportarse la clase 'AppComponent'.

Desde el html podemos usar las variables del archivo TS:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Mike'; //* estas son variables públicas por defecto
  age: number = 24;
  img: string = 'https://source.unsplash.com/random';
}

```

```html
<h1>Hola mundo!</h1>
<h2>{{ 'Hola Mundo'.repeat(5) }}</h2>
<p>3+3 = {{ 3 + 3 }}</p>
<h3>Hola, soy {{ name }} y tengo {{ age }} años</h3>
<img src="{{ img }}" alt="imagen random">

```

### Property Binding

Esto sería de la siguiente manera:

```html
<h1>Propiedades</h1>
<button [disabled]="btnDisabled">Enviar</button>
<input type="text" name="" id="" [value]="person.name">
<progress max="100" [value]="progressBar"></progress>
<img [src]="person.urlImage" alt="random image" width="100px">

```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  btnDisabled: boolean = true;
  progressBar: number = 50;

  person = {
    name: 'Mike',
    age: 24,
    urlImage: 'https://source.unsplash.com/random',
  }
}

```

¿Cuál es mejor? ¿String interpolation o Property Binding?

String interpolation es mejor para funciones de JS o TS que se renderizaran en el HTML. Mientras que las Property Binding son propiedades de etiquetas HTML.
