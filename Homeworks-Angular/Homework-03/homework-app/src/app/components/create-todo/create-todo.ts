import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  NonNullableFormBuilder,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { Todo, TodoStatus } from '../../types/todo.type';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { TodosService } from '../../services/todos-service';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.css',
})
export class CreateTodoComponent {
  myForm!: FormGroup<{
    title: FormControl<string>;
    description: FormControl<string>;
    status: FormControl<TodoStatus>;
  }>;

  todoStatusOptions: { key: string; value: TodoStatus }[] = [];

  constructor(
    private fb: NonNullableFormBuilder,
    private todosService: TodosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoStatusOptions = Object.entries(TodoStatus).map(([key, value]) => ({
      key,
      value: value as TodoStatus,
    }));

    this.myForm = this.fb.group(
      {
        title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        status: [TodoStatus.PENDING, Validators.required],
      },
      {
        updateOn: 'change',
      }
    );
  }

  onHandleSubmit() {
    if (this.myForm.invalid) return;

    const formValues = this.myForm.getRawValue() as Todo;

    const newTodo: Todo = {
      ...formValues,
      id: uuidv4(),
    };

    this.todosService.createTodo(newTodo);
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
