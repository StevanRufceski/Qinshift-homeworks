import { Component, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../types/todo.type';
import { DeleteTodoComponent } from '../delete-todo/delete-todo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DeleteTodoComponent, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
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

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'in progress':
        return 'status-in-progress';
      default:
        return '';
    }
  }


}
