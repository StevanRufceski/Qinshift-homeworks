import { Component, signal } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodoComponent {

  constructor(
    private readonly TodosService: TodosService, 
    private readonly router: Router) { }

  title = signal('');
  description = signal('');

  handleSubmit() {
    this.TodosService.addTodo(
      this.title(),
      this.description(),
    );
    this.handleGoToHomePage();
  }

  handleGoToHomePage(): void {
    this.router.navigate(['/']);
  }
}
