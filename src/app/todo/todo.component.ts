import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

  //Set a todo item as Doing
  setDoing() {
    this.todo.isDoing = true;
    this.todo.isDone = false;
  }

  //Set a todo item as Done
  setDone() {
    this.todo.isDoing = false;
    this.todo.isDone = true;
  }

  //Set a todo item as Todo
  setTodo() {
    this.todo.isDoing = false;
    this.todo.isDone = false;
  }
}