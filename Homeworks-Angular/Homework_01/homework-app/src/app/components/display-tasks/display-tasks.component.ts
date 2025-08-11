import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task-manager/task-manager.component';
import { NgFor } from '@angular/common';
import { CompleteTaskComponent } from '../complete-task/complete-task.component';

@Component({
  selector: 'display-tasks',
  standalone: true,
  imports: [NgFor, CompleteTaskComponent],
  templateUrl: './display-tasks.component.html',
})
export class DisplayTasksComponent {
  @Input() tasks: Task[] = [];
  @Output() taskCompleted = new EventEmitter<number>();

  onTaskCompleted(taskId: number) {
    this.taskCompleted.emit(taskId);
  }
}
