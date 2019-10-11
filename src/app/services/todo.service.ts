import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: ITodo[] = [
    {
      id: 1,
      title: 'Complete CheckPoint 1',
      details: 'See Campus Manager for full details.',
      isDone: false,
      isDoing: true,
      isEditing: false
    },
    {
      id: 2,
      title: 'Submit CheckPoint 1',
      details: 'Submit Checkpoint 1 to Campus Manager.',
      isDone: false,
      isDoing: false,
      isEditing: false
    },
    {
      id: 3,
      title: 'Task 3',
      details: 'Task 3 Details.',
      isDone: true,
      isDoing: false,
      isEditing: false
    },
    {
      id: 4,
      title: 'Task 4',
      details: 'Task 4 Details.',
      isDone: false,
      isDoing: false,
      isEditing: false
    },
    {
      id: 5,
      title: 'Task 5',
      details: 'Task 5 Details.',
      isDone: false,
      isDoing: false,
      isEditing: false
    }
  ];

  constructor() { }

  //Get items Todo
  getTodoItems(): ITodo[] {
    return this.todoList.filter(todo => !todo.isDoing && !todo.isDone);
  }

  //Get items Doing
  getDoingItems(): ITodo[] {
    return this.todoList.filter(todo => todo.isDoing);
  }

  //Get items Done
  getDoneItems(): ITodo[] {
    return this.todoList.filter(todo => todo.isDone);
  }

  //Get all todo items
  getAllTodoItems() {
    return this.todoList;
  }

  //Get a todo item by id
  getTodoItem(id: number): ITodo {
    return this.todoList.find(x => x.id === id);
  }
  
  //Add a todo item
  addTodoItem(todo: ITodo): void {
    this.todoList.push(todo);
  }

  //Update a todo item
  updateTodoItem(todo: ITodo): void {
    //not sure how to do this one.
  }

  //Delete a todo item
  deleteTodoItem(todo: ITodo): void {
    const index = this.todoList.indexOf(todo, 0);
    this.todoList.splice(index, 1);
  }

  //Mark a todo item Doing
  isDoingTodo(todo: ITodo): void {
    todo.isDoing = true;
    todo.isDone = false;
    todo.isEditing = false;
  }

  //Mark a todo item Done
  isDoneTodo(todo: ITodo): void {
    todo.isDoing = false;
    todo.isDone = true;
    todo.isEditing = false;
  }

  //Mark a todo item Editing
  isEditingTodo(todo: ITodo): void {
    todo.isEditing = true;
  }

  //Mark a todo item not Editing
  isNotEditingTodo(todo: ITodo): void {
    todo.isEditing = false;
  }
}