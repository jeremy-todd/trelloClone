import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-list-of-todo-items',
  templateUrl: './list-of-todo-items.component.html',
  styleUrls: ['./list-of-todo-items.component.scss']
})
export class ListOfTodoItemsComponent implements OnInit {
  @Input() todos: ITodo[];

  constructor() { }

  ngOnInit() {}
}