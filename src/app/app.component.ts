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
