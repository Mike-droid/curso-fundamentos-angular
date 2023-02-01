import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todo: string = '';

  todos: string[] = [];

  doneTodos: string[] = [];

  finishedTodo: string[] = [];

  createTodo() {
    this.todos.push(this.todo);
    this.todo = '';
  }

  completeTodo(index: number) {
    this.finishedTodo = this.todos.splice(index, 1);
    this.doneTodos.push(this.finishedTodo[0]);
  }
}
