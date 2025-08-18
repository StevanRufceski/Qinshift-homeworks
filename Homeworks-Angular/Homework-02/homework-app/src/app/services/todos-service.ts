import { Injectable } from '@angular/core';
import { Todo, TodoStatus } from '../types/todo.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

const TODOS: Todo[] = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    status: TodoStatus.PENDING,
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    status: TodoStatus.IN_PROGRESS,
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Description 3',
    status: TodoStatus.COMPLETED,
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Description 4',
    status: TodoStatus.PENDING,
  },
  {
    id: '5',
    title: 'Title 5',
    description: 'Description 5',
    status: TodoStatus.IN_PROGRESS,
  },
  {
    id: '6',
    title: 'Title 6',
    description: 'Description 6',
    status: TodoStatus.COMPLETED,
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todos = new BehaviorSubject(TODOS); // niza vrz koja kje vrsime manipulaciija
  public readonly todos$: Observable<Todo[]> = this._todos.asObservable(); // niza koja kje go prikazuva krajniot rezultat od manipilacijata so todos

  readAllTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  deleteTodo(id: string): void {
    const currentTodos = this._todos.getValue();
    const updatedTodos = currentTodos.filter(todo => todo.id !== id);
    this._todos.next(updatedTodos);
  }

  updateTodoStatus(id: string, newStatus: TodoStatus): void {
    const currentTodos = this._todos.getValue();
    const updatedTodos = currentTodos.map(todo =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    this._todos.next(updatedTodos);
  }



}
