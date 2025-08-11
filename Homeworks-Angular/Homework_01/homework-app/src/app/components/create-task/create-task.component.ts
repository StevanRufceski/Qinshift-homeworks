import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task-manager/task-manager.component';

@Component({
  selector: 'create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent {
  title = '';
  description = '';

  @Output() taskCreated = new EventEmitter<Task>();

  createNewTask() {
    const trimmedTitle = this.title.trim();
    const trimmedDescription = this.description.trim();
    if (!trimmedTitle || !trimmedDescription) {
      alert('Please enter both title and description.');
      return;
    }
    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      description: trimmedDescription,
      isCompleted: false,
    };

    this.taskCreated.emit(newTask);

    this.title = '';
    this.description = '';
  }
}
