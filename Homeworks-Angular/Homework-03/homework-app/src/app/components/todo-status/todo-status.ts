import { Component, input, inject } from '@angular/core';
import { Todo, TodoStatus } from '../../types/todo.type';
import { TodosService } from '../../services/todos-service';

@Component({
  selector: 'app-todo-status',
  standalone: true,
  imports: [],
  templateUrl: './todo-status.html',
  styleUrl: './todo-status.css'
})
export class TodoStatusComponent {
  todo = input.required<Todo>();

  cancelTodo = input<() => void>(() => { });
  handleCancel = () => {
    this.cancelTodo()();
  }

  private todosService = inject(TodosService); // inject the service
  handleChangeStatus = (id: string, newStatus: TodoStatus): void => {
    this.todosService.updateTodoStatus(id, newStatus);
    this.handleCancel();
  };

  readonly TodoStatus = TodoStatus;

}
