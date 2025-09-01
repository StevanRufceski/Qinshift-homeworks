import { Component, input, inject } from '@angular/core';
import { Todo } from '../../types/todo.type';
import { TodosService } from '../../services/todos-service';

@Component({
  selector: 'app-delete-todo',
  standalone: true,
  imports: [],
  templateUrl: './delete-todo.html',
  styleUrl: './delete-todo.css'
})
export class DeleteTodoComponent {
  todo = input.required<Todo>();

  cancelTodo = input<() => void>(() => { });
  handleCancel = () => {
    this.cancelTodo()(); 
  }

  private todosService = inject(TodosService); // inject the service
  handleDelete = () => {
    this.todosService.deleteTodo(this.todo().id); // delete the todo
    this.handleCancel(); // close the component after deletion
  }

}
