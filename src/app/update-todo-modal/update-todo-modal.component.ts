import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';


@Component({
  selector: 'update-todo-modal',
  templateUrl: './update-todo-modal.component.html',
  styleUrls: ['./update-todo-modal.component.scss']
})
export class UpdateTodoModalComponent implements OnInit {
  @Input() todo: ITodo;

  closeResult: string;
  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal, private todoService: TodoService) {}

  yesUpdateTodo() {
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
  ngOnInit() {
    console.log(this.todo)
  } 
}