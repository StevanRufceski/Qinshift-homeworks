import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { createTask } from './create-task/create-task.component';

export type Task = {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
};

@Component({
    selector: 'task-manager',
    imports: [NgFor, createTask],
    templateUrl: './task-manager.component.html',
})
export class taskList {
    tasks: Task[] = [
        { id: 1, title: 'Walk the dog', description: 'Feed and walk the dog', isCompleted: true },
        { id: 2, title: 'Read a book', description: 'Read "War and Peace"', isCompleted: false },
        { id: 3, title: 'Write a homework', description: "Do the homework01", isCompleted: false },
    ];

    taskCompletion(taskId: number): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.isCompleted = true;
        }
    }

    showCreateForm = false;
    toggleCreateForm() {
        this.showCreateForm = !this.showCreateForm;
    }
    handleTaskCreated(task: Task) {
        this.tasks.push(task);
    }
}
