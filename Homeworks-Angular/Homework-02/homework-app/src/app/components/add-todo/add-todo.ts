import { Component, signal } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
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
    const trimmedTitle = this.title().trim();
    const trimmedDescription = this.description().trim();

    if (!trimmedTitle || !trimmedDescription) {
      alert('Please fill in both title and description.');
      return;
    }

    this.TodosService.addTodo(trimmedTitle, trimmedDescription);
    this.handleGoToHomePage();
  }
  handleGoToHomePage(): void {
    this.router.navigate(['/']);
  }
}
