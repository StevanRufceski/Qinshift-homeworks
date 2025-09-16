import { Component, signal } from '@angular/core';
import { Tasks } from '../types_data/data';
import { Task } from '../types_data/types';
import { TaskItemComponent } from '../task-item/task-item';
import { CreateTaskComponent } from '../create-task/create-task';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [TaskItemComponent, CreateTaskComponent],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})
export class TaskManagerComponent {
  // for displaying tasks
  tasks = signal<Task[]>(Tasks);
  // for completing tasks
  toggleTaskCompletion(taskId: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  }
  // Feature za kreiranje task
  showCreateForm = signal(false);
  newTask = signal<Task | null>(null);

  toggleCreateForm() {
    this.newTask.set({
      id: this.tasks().length + 1,
      title: '',
      description: '',
      isCompleted: false
    });
    this.showCreateForm.set(true);
  }

  handleTaskCreated(task: Task) {
    console.log('Received task in parent:', task);
    this.tasks.update(current => [...current, task]);
    console.log('Updated task list:', this.tasks());
    this.showCreateForm.set(false);
  }

  getTaskStats() {
    const completed = this.tasks().filter(task => task.isCompleted).length;
    const pending = this.tasks().length - completed;
    return { completed, pending };
  }

  clearAllTasks() {
    this.tasks.set([]);
  }
}

