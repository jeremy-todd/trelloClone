import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ListOfTodoItemsComponent } from './list-of-todo-items/list-of-todo-items.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';


const routes: Routes = [
  { path: 'status', component: TodoComponent },
  { path: 'todo', component: TodoComponent,
    children: [
      { path: 'todo-details/:id', component: TodoDetailsComponent }
    ]
  },
  //{ path: 'todoList', component: ListOfTodoItemsComponent },
  { path: 'todoList', component: TodoDisplayComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
