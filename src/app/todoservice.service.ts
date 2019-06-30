import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ITodo } from './models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  public todos: ITodo[] = [];
  public todolist = new Subject<ITodo[]>();
  public todolist$ = this.todolist.asObservable();

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]> {
    const url = '../assets/todo.json';
    return this.http.get<ITodo[]>(url);
  }

  addTodo(todo: ITodo) {
    console.log(todo);
    this.todos.push(todo);
    this.todolist.next(this.todos);
  }
}
