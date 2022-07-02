import { Component } from '@angular/core';
import { TemplateRef } from '@angular/core' ;    
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal' ;   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'test-bootstrap';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
