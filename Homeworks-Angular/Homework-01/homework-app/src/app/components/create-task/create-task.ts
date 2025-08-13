import { Component, input, output, signal, SimpleChanges } from '@angular/core';
import { Task } from '../types_data/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css'
})
export class CreateTaskComponent {
  newTask = input.required<Task>();

  title = signal('');
  description = signal('');
  createdTask = output<Task>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newTask']) {
      const newVal = changes['newTask'].currentValue;
      console.log('A new task is being created:', newVal);
    }
  }

  onSubmit() {
    if (this.title().trim() && this.description().trim()) {
      const task = {
        ...this.newTask()!,
        title: this.title().trim(),
        description: this.description().trim(),
      };
      console.log('Emitting new task:', task);
      this.createdTask.emit(task);
    } else {
      alert('Both title and description are required.');
    }
  }

}
