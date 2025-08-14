import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos-service';
import { Todo } from '../../types/todo.type';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.readAllTodos().subscribe(todos => {
      this.todos = todos;
      console.log(todos); // You will see todos in console
    });
  }
}
