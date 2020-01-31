import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoList = [];
  enteredTodo = '';

  addTodoItem() {
    this.todoList.push(this.enteredTodo);
    this.enteredTodo = "";
  }

  deletTodoItem(itemPosition) {
    this.todoList.splice(itemPosition, 1);
  }

}
