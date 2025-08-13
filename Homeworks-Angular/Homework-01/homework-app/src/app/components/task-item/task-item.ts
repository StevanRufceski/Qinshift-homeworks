import { Component, input, output, SimpleChanges } from '@angular/core';
import { Task } from '../types_data/types';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  // for displaying tasks
  taskItem = input.required<Task>();
//  for completing tasks
  toggleComplete = output<number>();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskItem']) {
      const prev: Task = changes['taskItem'].previousValue;
      const curr: Task = changes['taskItem'].currentValue;
      if (prev && curr && prev.isCompleted !== curr.isCompleted) {
        console.log(
          `Task ${curr.id} completion status changed from ${prev.isCompleted} to ${curr.isCompleted}`
        );
      }
    }
  }
  onToggle() {
    this.toggleComplete.emit(this.taskItem().id);
  }
}
