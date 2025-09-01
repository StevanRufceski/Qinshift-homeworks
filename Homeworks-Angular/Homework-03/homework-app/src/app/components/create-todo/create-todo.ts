import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { Todo, TodoStatus } from '../../types/todo.type';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { TodosService } from '../../services/todos-service';

@Component({
  selector: 'app-create-todo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.css'
})
export class CreateTodoComponent {
  // Holds the root form state tree (group of controls)
  myForm!: FormGroup;
  todoStatusOptions: { key: string; value: TodoStatus }[] = [];

  constructor(private todosService: TodosService, private router: Router) {}


  ngOnInit() {
    this.todoStatusOptions = Object.entries(TodoStatus).map(([key, value]) => ({
      key,
      value: value as TodoStatus,
    }));
    /**
     * Manually constructing a FormGroup.
     * Each FormControl: initial value + validators array.
     * (In larger apps you'd usually use FormBuilder for terser syntax.)
     */
    this.myForm = new FormGroup(
      {
        // firstName must be present & at least 5 chars
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
        // lastName required, min 3 chars
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(10),

        ]),

        // selectStatus: new FormControl(''),
        status: new FormControl(
          TodoStatus.PENDING,
          Validators.required
        ),
      },
      {
        // Validation + valueChanges fire on each change (default); could be 'blur' or 'submit'
        updateOn: 'change',
      }
    );
  }

  onHandleSubmit() {
    if (this.myForm.invalid) return;

    const formValues = this.myForm.value;

    const newTodo: Todo = {
      ...formValues,
      id: uuidv4(),
    };

    this.todosService.createTodo(newTodo);

    this.router.navigate(['/']);
  }

  /**
   * Helper to centralize error message logic.
   * Only returns a string if the control has the target error AND was touched.
   */
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
          return `Enter more then ${minLengthRequired} characters`;
        default:
          return null;
      }
    }

    return null;
  }


}
function uuid() {
  throw new Error('Function not implemented.');
}

