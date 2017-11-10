import { Authentication } from './../../../../_service/AuthenticationService';
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
      private auth: Authentication,
private modalService: BsModalService ) { }
    ngOnInit() {

      if ( localStorage.getItem(this.config.token ) ) {
       this.http.get(this.config.url_port + '/api/all-topic').subscribe(
        data => {
          console.log(data);
        },
        (
          err: HttpErrorResponse) => {
             console.log(err.error);
            if ( err.error instanceof Error ) {
              console.log('erro client ' , err.error.message);
            } else {
              if (err.status) { // token het hang
                console.log('token het hang ');
                this.router.navigate(['/pages/login'])
              }
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          });
        } else {
          console.log('bit xe-----------------------------')
          this.router.navigate(['/pages/login'])
        }
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
