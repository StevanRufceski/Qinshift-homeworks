import { Component } from '@angular/core';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskManagerComponent],
  templateUrl: './app.html',
})
export class App {}
