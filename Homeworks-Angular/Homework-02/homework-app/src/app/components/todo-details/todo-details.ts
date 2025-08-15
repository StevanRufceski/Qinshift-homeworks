import { Component, input } from '@angular/core';
import { Todo } from '../../types/todo.type';

@Component({
  selector: 'app-todo-details',
  imports: [],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.css'
})
export class TodoDetailsComponent {
  todo = input.required<Todo>();

}
