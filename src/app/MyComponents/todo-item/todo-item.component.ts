import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.todo = {
      sno: 0,
      title: "",
      description: "",
      active: false
    }
  }

  onDelete(todo: Todo){
    this.todoDelete.emit(todo);
  }
  ngOnInit(): void {
  }

}
