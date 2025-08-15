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

  //   getTodoById(id: string): Todo | undefined {
  //   const todos = this._todos.getValue();
  //   return todos.find((t) => t.id === id);
  // }
}
