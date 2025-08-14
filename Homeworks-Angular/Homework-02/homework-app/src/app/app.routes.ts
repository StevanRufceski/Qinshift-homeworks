import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AddTodoComponent } from './components/add-todo/add-todo';
import { TodoDetailsComponent } from './components/todo-details/todo-details';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-todo', component: AddTodoComponent },
    { path: 'todo-details', component: TodoDetailsComponent },
]
