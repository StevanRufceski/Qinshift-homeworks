import { Component, EventEmitter, input, Output } from '@angular/core';
import { Task } from '../types_data/types';  

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  taskItem = input.required<Task>();
}
