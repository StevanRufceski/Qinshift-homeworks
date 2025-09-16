import { Component, signal } from '@angular/core';
import { TaskManagerComponent } from './components/task-manager/task-manager';

@Component({
  selector: 'app-root',
  imports: [TaskManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homework-app');
}
