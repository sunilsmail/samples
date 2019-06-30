import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'count',
  template: `
  <div>List of Todo's {{count}}</div>
  `
})
export class DisplayCountComponent implements OnInit {
  count: number;

  constructor(private service: TodoserviceService) { }

  ngOnInit() {

    this.service.todolist$.subscribe((data) => {
      this.count = data.length;
    });
  }
}
