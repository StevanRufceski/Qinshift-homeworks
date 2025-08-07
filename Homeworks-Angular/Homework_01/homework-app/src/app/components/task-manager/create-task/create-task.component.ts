import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task-manager.component';

@Component({
    selector: 'create-task',
    standalone: true,
    templateUrl: './create-task.component.html',
    imports: [FormsModule]
})
export class createTask {
    title = '';
    description = '';

    @Output() taskCreated = new EventEmitter<Task>();

    createNewTask() {
        // if (!this.title.trim() || !this.description.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            title: this.title,
            description: this.description,
            isCompleted: false,
        };

        this.taskCreated.emit(newTask);

        this.title = '';
        this.description = '';
    }

}