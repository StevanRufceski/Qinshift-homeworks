import { Component, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../types/todo.type';
import { TodoDetailsComponent } from '../todo-details/todo-details';

@Component({
  selector: 'app-home',
  imports: [TodoDetailsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  todos = signal<Todo[]>([]);
  selectedTodo = signal<Todo | null>(null);

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.readAllTodos().subscribe(todos => {
      this.todos.set(todos);
    });
  }

  selectTodo(todo: Todo) {
    this.selectedTodo.set(todo);
  }
}
