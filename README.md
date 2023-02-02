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

### Introducción al Event Binding de Angular

```html
<h1>Eventos</h1>
<button [disabled]="btnDisabled">Enviar</button>
<button (click)="toggleButton()">{{ btnText }} button</button>

<div>
  <p>Edad: {{ person.age }}</p>
  <button (click)="incrementAge()">Age ++</button>
  <button (click)="decrementAge()">Age --</button>
</div>
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
  btnText = 'Enable';

  person = {
    name: 'Mike',
    age: 24,
    urlImage: 'https://source.unsplash.com/random',
  }

  toggleButton() {
    this.btnDisabled === true ? this.btnText = 'Disable' : this.btnText = 'Enable';

    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age += 1;
  }

  decrementAge() {
    this.person.age -= 1;
  }
}

```

### Otros eventos que puedes escuchar

```html
<h1>Eventos</h1>
<button [disabled]="btnDisabled">Enviar</button>
<button (click)="toggleButton()">{{ btnText }} button</button>

<div>
  <p>Edad: {{ person.age }}</p>
  <button (click)="incrementAge()">Age ++</button>
  <button (click)="decrementAge()">Age --</button>
</div>

<div class="box" (scroll)="onScroll($event)">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim vel delectus officiis debitis expedita, eaque velit nostrum porro harum sit vitae voluptate adipisci, quam dignissimos nam amet quidem atque.
    Dolore quisquam laboriosam doloribus sunt, libero impedit! Nobis tempore vel veniam tenetur possimus praesentium voluptatum molestiae, saepe impedit eius odit ratione in fugiat hic, ipsa sit animi quo maxime. Illo.
    Quasi incidunt itaque qui dolores commodi! Animi, dolorum facilis eveniet incidunt hic commodi suscipit alias iure possimus reiciendis provident et dignissimos eos praesentium odio veritatis saepe. Fugit quis necessitatibus dolorem!
    Dicta odio, quo quaerat rem soluta ut corrupti nesciunt repudiandae nobis, facere molestiae accusamus officiis, eaque nihil. Cum illum, exercitationem, ratione nesciunt dolor repudiandae architecto sunt ea pariatur voluptatum suscipit!
    Vero labore exercitationem excepturi, assumenda, placeat aliquam culpa officiis nulla natus dolorum delectus vitae doloribus error aliquid deleniti. Quaerat impedit asperiores necessitatibus suscipit delectus eligendi veniam at eius harum quae!
    Nemo eaque dolore corporis delectus numquam rerum consectetur beatae in, neque, magni voluptatum quas iusto, ipsam deleniti deserunt. Quidem, assumenda harum deserunt laudantium necessitatibus ut ex provident minima maxime voluptate.
    Nesciunt vitae animi inventore fuga! Pariatur dolore doloremque porro impedit, non similique sapiente enim excepturi ipsa consequuntur unde, quibusdam quos tempore aut nam ullam magni labore nostrum voluptate quae perferendis.
    Commodi repudiandae illo, quasi nobis ea incidunt rem esse, ex sint fugiat facilis aliquid enim quam impedit quis. Maiores beatae consequuntur quisquam iure pariatur quaerat assumenda saepe ex! Odit, rerum.
    Alias nostrum amet ad commodi. Laudantium nihil laboriosam fugiat officia incidunt esse recusandae, sed, omnis harum fugit, expedita doloribus! Maiores vitae eum atque fuga. Distinctio ut rerum ullam placeat nemo.
    Dolores quisquam excepturi iste culpa vero in voluptatem modi, nobis esse ut, beatae saepe molestias facilis distinctio aliquid assumenda fuga natus a laborum doloribus nulla. Obcaecati corporis mollitia animi ex.
  </p>
</div>
<p>Nombre: {{ person.name }}</p>
<input type="text" [value]="person.name" (keyup)="changeName($event)">

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
  btnText = 'Enable';

  person = {
    name: 'Mike',
    age: 24,
    urlImage: 'https://source.unsplash.com/random',
  }

  toggleButton() {
    this.btnDisabled === true ? this.btnText = 'Disable' : this.btnText = 'Enable';

    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age += 1;
  }

  decrementAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}

```

### Data binding con ngModel

Esto es una combinación entre escuchar un evento y settear un propiedad. Es un enlace de doble via.

```html
<h1>NgModel</h1>
<p>Nombre {{ person.name }}</p>

<input type="text" required #nameInput="ngModel" [(ngModel)]="person.name" />
<p>Name Valid: {{ nameInput.valid }}</p>

<input type="number" max="25" min="10" required #ageInput="ngModel" [(ngModel)]="person.age" />
<p>Age Valid: {{ ageInput.valid }}</p>

```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // requerido para ngModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // requerido para ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Estructuras de control

### Uso de *ngIf

```html
<h1>*ngIf</h1>
<input type="text" required [(ngModel)]="person.name">
<p *ngIf="person.name === 'Mike'">Soy Mike</p>

<p *ngIf="person.name === 'Julio' && person.age >= 18; else elseBlock">Soy Julio</p>
<ng-template #elseBlock>
  <p>Bloque de else</p>
</ng-template>

```

### Uso de *ngFor

```html
<h1>*ngFor</h1>
<input type="text" required [(ngModel)]="newName">
<button (click)="addName()" [disabled]="newName.length === 0">Add name</button>
<h3 *ngIf="newName.length === 0">No hay nombres</h3>
<ul>
  <li *ngFor="let name of names; index as index"> <!-- debo renombrarlo forsozamente  -->
    {{ index }} {{ name }}
    <button (click)="removeName(index)">Delete name</button>
  </li>
</ul>

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
  btnText = 'Enable';

  person = {
    name: 'Mike',
    age: 24,
    urlImage: 'https://source.unsplash.com/random',
  }

  names: string[] = ['Pepe', 'Antonio', 'Juan'];
  newName: string = '';

  toggleButton() {
    this.btnDisabled === true ? this.btnText = 'Disable' : this.btnText = 'Enable';

    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age += 1;
  }

  decrementAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  removeName(index: number) {
    this.names.splice(index, 1);
  }
}

```

### *ngFor para arrays

Creamos una interface para decir qué atributos debe de tener un objeto.

```typescript
export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; //* opcional
}

```

```typescript
import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  btnDisabled: boolean = true;
  progressBar: number = 50;
  btnText = 'Enable';

  person = {
    name: 'Mike',
    age: 24,
    urlImage: 'https://source.unsplash.com/random',
  }

  names: string[] = ['Pepe', 'Antonio', 'Juan'];
  newName: string = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'toys',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled === true ? this.btnText = 'Disable' : this.btnText = 'Enable';

    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age += 1;
  }

  decrementAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  removeName(index: number) {
    this.names.splice(index, 1);
  }
}

```

```html
<h1>*nfFor Objs</h1>
<div>
  <div *ngFor="let product of products">
    <img width="200" [src]="product.image" [alt]="product.name">
    <h2>${{ product.price }}</h2>
    <p>{{ product.name }}</p>
  </div>
</div>

```

### Uso de ngSwitch

```html
<h1>ngSwitch</h1>
<input type="text" required [(ngModel)]="person.name">
<div [ngSwitch]="person.name">
  <p *ngSwitchCase="'Mike'">
    La persona es Mike
  </p>
  <p *ngSwitchCase="'Julio'">
    La persona es Julio
  </p>
  <p *ngSwitchCase="'Ximena'">
    La persona es Ximena
  </p>
  <p *ngSwitchDefault>
    No hace match
  </p>
</div>
```

### Angular Devtools

[Angular Devtools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)

## Estilos

### Estilos a la lista de productos

### NgClass y NgStyle

### Crear un formulario

Cuando usamos botones dentro de un formulario, Angular nos obliga a darle un type.
