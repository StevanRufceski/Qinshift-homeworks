import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { CompleteTaskComponent } from '../complete-task/complete-task.component';
import { DisplayTasksComponent } from '../display-tasks/display-tasks.component';

export type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

@Component({
  selector: 'task-manager',
  standalone: true,
  imports: [NgIf, CreateTaskComponent, DisplayTasksComponent],
  templateUrl: './task-manager.component.html',
})
export class TaskManagerComponent {
  tasks: Task[] = [
    { id: 1, title: 'Walk the dog', description: 'Feed and walk the dog', isCompleted: true },
    { id: 2, title: 'Read a book', description: 'Read "War and Peace"', isCompleted: false },
    { id: 3, title: 'Write homework', description: 'Do the homework01', isCompleted: false },
  ];

  showCreateForm = false;

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  handleTaskCreated(task: Task) {
    this.tasks.push(task);
  }

  handleTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task && !task.isCompleted) {
      task.isCompleted = true;
    }
  }
}
