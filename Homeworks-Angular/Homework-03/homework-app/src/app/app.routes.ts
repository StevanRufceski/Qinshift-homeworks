import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AddTodoComponent } from './components/add-todo/add-todo';
import { CreateTodoComponent } from './components/create-todo/create-todo';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-todo', component: AddTodoComponent },
    { path: 'create-todo', component: CreateTodoComponent },
]
