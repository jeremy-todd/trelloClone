import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.scss']
})
export class TodoDisplayComponent implements OnInit {
  title = "Todo List";
  
  constructor(private todoService: TodoService) { }

  ngOnInit() { }
  
  //Get items Todo
  get todoItems() {
    return this.todoService.getTodoItems();
  }

  //Get items Doing
  get doingItems() {
    return this.todoService.getDoingItems();
  }

  //Get items Done
  get doneItems() {
    return this.todoService.getDoneItems();
  }
}