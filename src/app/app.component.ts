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
