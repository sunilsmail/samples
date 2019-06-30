import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { ITodo } from '../models/ITodo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listtodo: ITodo[] = [];

  constructor(private service: TodoserviceService) {

  }

  ngOnInit() {
    this.service.todolist$.subscribe((list) => {
      this.listtodo = list;
    })

    this.service.getTodos().subscribe((data) => {
      console.log(data);

      // this.service.todos = data;
      // this.listtodo = data;

      this.service.todos = [...data];
      this.listtodo = [...data];
      this.service.todolist.next([...data]);
    });
  }

  removeTodo(todo: ITodo) {
    const index = this.listtodo.findIndex(x => x.id === todo.id);
    this.listtodo.splice(index, 1);
    this.service.todos = [...this.listtodo];
    this.service.todolist.next([...this.listtodo]);
  }

}
