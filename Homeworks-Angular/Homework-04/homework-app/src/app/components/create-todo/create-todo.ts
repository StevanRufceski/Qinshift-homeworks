import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { Todo, TodoStatus } from '../../types/todo.type';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { TodosService } from '../../services/todos-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.scss',
})
export class CreateTodoComponent {
  myForm!: FormGroup;

  todoStatusOptions: { key: string; value: TodoStatus }[] = [];

  constructor(
    private todosService: TodosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoStatusOptions = Object.values(TodoStatus).map(value => ({
      key: value.toUpperCase(),
      value: value as TodoStatus
    }));


    this.myForm = new FormGroup(
      {
        title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        description: new FormControl('', [Validators.required, Validators.minLength(10)]),
        status: new FormControl(TodoStatus.PENDING, Validators.required),
      },
      {
        updateOn: 'change',
      }
    );
  }

  isCreating = false;
  onHandleSubmit() {
    if (this.myForm.invalid) return;

    const confirmed = window.confirm('Are you sure you want to create new todo?');
    if (!confirmed) return;

    this.isCreating = true;

    const formValues = this.myForm.value;

    const newTodo: Todo = {
      ...formValues,
      id: uuidv4(),
    };

    setTimeout(() => {
      this.todosService.createTodo(newTodo);
      this.isCreating = false;
      this.router.navigate(['/']);
    }, 3000);
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
