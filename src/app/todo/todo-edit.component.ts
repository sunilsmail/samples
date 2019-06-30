import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/ITodo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  newtodo: string;

  constructor(private service: TodoserviceService) { }

  ngOnInit() {
  }

  addtodo() {
    console.log(this.newtodo);
    const newItem: ITodo = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      title: this.newtodo,
      status: 'inprogress',
      priority: 'low',
    }
    this.service.addTodo(newItem);
    this.newtodo = null;
  }

}
