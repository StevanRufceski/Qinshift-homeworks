import { Component, OnInit, signal, computed } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../types/todo.type';
import { DeleteTodoComponent } from '../delete-todo/delete-todo';
import { TodoStatusComponent } from '../todo-status/todo-status';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DeleteTodoComponent, TodoStatusComponent, CommonModule, FormsModule],
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

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'in_progress':
        return 'status-in-progress';
      default:
        return '';
    }
  }

  searchTerm = signal(''); 
  filteredTodos = computed(() => {
    const search = this.searchTerm().trim().toLowerCase(); 
    return this.todos().filter(todo =>
      todo.title.toLowerCase().includes(search)
    );
  });



}
