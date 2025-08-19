import { Component, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../types/todo.type';
import { DeleteTodoComponent } from '../delete-todo/delete-todo';
import { TodoStatusComponent } from '../todo-status/todo-status';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DeleteTodoComponent, TodoStatusComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  todos = signal<Todo[]>([]);


  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.readAllTodos().subscribe(todos => {
      this.todos.set(todos);
    });
  }

  selectedTodoToDelete = signal<Todo | null>(null);
  selectTodoToDelete(todo: Todo) {
    this.selectedTodoToDelete.set(todo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearSelectedTodoToDelete = () => {
    this.selectedTodoToDelete.set(null);
  }

  selectedTodoToChangeStatus = signal<Todo | null>(null);
  selectTodoToChangeStatus(todo: Todo) {
    this.selectedTodoToChangeStatus.set(todo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearSelectedTodoToChangeStatus = () => {
    this.selectedTodoToChangeStatus.set(null);
  }

}
