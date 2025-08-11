import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task-manager/task-manager.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'complete-task',
  standalone: true,
  imports: [NgIf],
  templateUrl: './complete-task.component.html',
})
export class CompleteTaskComponent {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<number>();

  onMarkCompleted() {
    if (this.task && !this.task.isCompleted) {
      this.taskCompleted.emit(this.task.id);
    }
  }
}
