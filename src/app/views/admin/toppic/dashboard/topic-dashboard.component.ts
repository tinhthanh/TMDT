import { Headers } from '@angular/http';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { ConfigValue } from '../../../../_models/ConfigValue';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'topic-dashboard.component.html'
})

export class TopicDashBoardComponent implements OnInit {
    public edittopic: any = {};
    public addtopic: any = {};

    modalRef: BsModalRef;
    modalRef2: BsModalRef;
    token: any = {};
    constructor(private http: HttpClient,
      private config: ConfigValue,
      private router: Router,
private modalService: BsModalService ) { }
    ngOnInit() {
       // tslint:disable-next-line:max-line-length
     this.token =  JSON.parse(localStorage.getItem(this.config.token_tmdt));
       this.http.get(this.config.url_port + '/api/all-topic', {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token.access_token)}).subscribe(
        data => {
          console.log(data);
        },
        (
          err: HttpErrorResponse) => {
            if ( err.error instanceof Error ) {
              console.log('erro client ' , err.error.message);
            } else {
              if (err.status) { // token het hang
                console.log('token het hang ');
                this.router.navigate(['/pages/login']);
              }
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          });
    }

    addTopic() {
      console.log('----add.----');
        console.log(this.addtopic.topicName, this.addtopic.topicDescription, this.addtopic.topicStatut);
      this.addtopic = {};
      this.modalRef.hide();
    }

    editTopic() {
      console.log('----edit.----');
      console.log(this.edittopic.topicName, this.edittopic.topicDescription, this.edittopic.topicStatut);
    this.edittopic = {};
    this.modalRef2.hide();
  }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-success' });
      }
      openModal2(template: TemplateRef<any>) {
        this.modalRef2 = this.modalService.show(template, { class: 'second modal-success' });
      }
      closeFirstModal() {
        this.modalRef.hide();
      }
}
