import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:String;
  description: string;
  constructor() {
    this.title = "";
    this.description = "";
   }

   @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      description: this.description,
      active: true,
    }
    this.addTodo.emit(todo)
  }

}
