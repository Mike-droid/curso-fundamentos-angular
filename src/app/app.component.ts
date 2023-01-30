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
