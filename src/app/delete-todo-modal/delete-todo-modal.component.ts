import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'delete-todo-modal',
  templateUrl: './delete-todo-modal.component.html',
  styleUrls: ['./delete-todo-modal.component.scss']
})
export class DeleteTodoModalComponent implements OnInit {

  closeResult: string;
  modalRef: NgbModalRef;
  @Input() todo: ITodo;

  constructor(private modalService: NgbModal, private todoService: TodoService) {}

  yesDeleteTodo(todo: ITodo) {
    this.todoService.deleteTodoItem(todo)
    this.modalRef.close();
  }

  open(content) {
    this.modalRef = this.modalService.open(content , {
      ariaLabelledBy: "modal-basic-title"
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {}
}