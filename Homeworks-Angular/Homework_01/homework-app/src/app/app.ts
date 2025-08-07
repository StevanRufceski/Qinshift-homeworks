import { Component } from '@angular/core';
import { taskList } from './components/task-manager/task-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [taskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
