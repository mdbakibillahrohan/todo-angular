import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem",
        active: true,
      },
      {
        sno: 2,
        title: "Title2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem",
        active: true,
      },
      {
        sno: 3,
        title: "Title2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem adipisicing elit. Sunt, laudantium lorem",
        active: true,
      },
    ]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    let indexOf = this.todos.indexOf(todo);
    this.todos.splice(indexOf, 1);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

}
