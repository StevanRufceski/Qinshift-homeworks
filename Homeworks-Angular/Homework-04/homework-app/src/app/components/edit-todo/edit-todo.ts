import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoStatus } from '../../types/todo.type';
import { TodosService } from '../../services/todos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  templateUrl: './edit-todo.html',
  styleUrl: './edit-todo.scss',
  imports: [ReactiveFormsModule, CommonModule]
})
export class EditTodoComponent implements OnInit {
  myForm!: FormGroup;
  todoId: string | null = null;
  todoNotFound = false;

  todoStatusOptions: { key: string; value: TodoStatus }[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.todoStatusOptions = Object.values(TodoStatus).map(value => ({
      key: value.toUpperCase(),
      value: value as TodoStatus
    }));

    this.todoId = this.route.snapshot.paramMap.get('id');

    if (this.todoId) {
      const todo = this.todosService.getTodoById(this.todoId);
      if (todo) {
        this.myForm = new FormGroup(
          {
            title: new FormControl(todo.title, [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(50)
            ]),
            description: new FormControl(todo.description, [
              Validators.required,
              Validators.minLength(10)
            ]),
            status: new FormControl(todo.status, Validators.required)
          },
          { updateOn: 'change' }
        );
      } else {
        this.todoNotFound = true;
      }
    }
  }

  onHandleSubmit(): void {
    if (this.myForm.invalid || !this.todoId) return;

    const updatedTodo: Todo = {
      id: this.todoId,
      ...this.myForm.value
    };

    this.todosService.updateTodo(updatedTodo);
    this.router.navigate(['/']);
  }

  getErrorMessage(
    controlName: string,
    errorName: string,
    minLengthRequired = 0
  ) {
    const control = this.myForm.get(controlName);
    const hasError = control?.hasError(errorName) && control.touched;

    if (hasError) {
      switch (errorName) {
        case 'required':
          return `Enter: ${controlName}`;
        case 'minlength':
          return `Enter more than ${minLengthRequired} characters`;
        case 'maxlength':
          return `Enter less than ${minLengthRequired} characters`;
        default:
          return null;
      }
    }

    return null;
  }
}
