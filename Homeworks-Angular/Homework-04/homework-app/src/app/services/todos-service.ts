import { Injectable } from '@angular/core';
import { Todo, TodoStatus } from '../types/todo.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { TODOS_MOCK } from './data.mock';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todos = new BehaviorSubject(TODOS_MOCK); // niza vrz koja kje vrsime manipulaciija
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

  addTodo(title: string, description: string) {
    const newTodo: Todo = {
      id: uuid(),
      title,
      description,
      status: TodoStatus.PENDING,
    };
    const todos = this._todos.value; // will consume the values of the subject up to that moment
    this._todos.next([...todos, newTodo]);
  }

  createTodo(todo: Todo): void {
    if (!todo.id) {
      todo.id = uuid();
    }
    const currentTodos = this._todos.getValue();
    this._todos.next([...currentTodos, todo]);
  }

  getTodoById(id: string): Todo | undefined {
    return this._todos.getValue().find(todo => todo.id === id);
  }

  updateTodo(updatedTodo: Todo): void {
  const currentTodos = this._todos.getValue();
  const updatedTodos = currentTodos.map(todo =>
    todo.id === updatedTodo.id ? { ...updatedTodo } : todo
  );
  this._todos.next(updatedTodos);
}


}
