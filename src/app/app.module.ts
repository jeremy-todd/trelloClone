import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';
import { UpdateTodoModalComponent } from './update-todo-modal/update-todo-modal.component';
import { DeleteTodoModalComponent } from './delete-todo-modal/delete-todo-modal.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './todo/todo.component';
import { ListOfTodoItemsComponent } from './list-of-todo-items/list-of-todo-items.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoModalComponent,
    UpdateTodoModalComponent,
    DeleteTodoModalComponent,
    TodoDetailsComponent,
    TodoComponent,
    ListOfTodoItemsComponent,
    TodoDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
