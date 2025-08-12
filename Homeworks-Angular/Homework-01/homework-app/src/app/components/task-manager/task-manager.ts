import { Component, signal } from '@angular/core';
import { Tasks } from '../types_data/data';
import { Task } from '../types_data/types';
import { TaskItemComponent } from '../task-item/task-item';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})
export class TaskManagerComponent {
  tasks = signal<Task[]>(Tasks);
}

