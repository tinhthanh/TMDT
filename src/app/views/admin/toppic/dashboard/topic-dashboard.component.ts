import { Authentication } from './../../../../_service/AuthenticationService';
import { Headers } from '@angular/http';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { ConfigValue } from '../../../../_models/ConfigValue';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminTopicService } from '../../../../_service/admin-topic/admin-topic.service';
 @Component({
    templateUrl: 'topic-dashboard.component.html'
})

export class TopicDashBoardComponent implements OnInit {
   public edittopic: any = {};
   public addtopic: any = {};
   public isShow = false;
   public isprocess = false;
    modalRef: BsModalRef;
    modalRef2: BsModalRef;
     token: any = {};
    public lists;
    constructor(private http: HttpClient,
      private config: ConfigValue,
      private router: Router,
      private auth: Authentication,
      private topicservice: AdminTopicService,
      private modalService: BsModalService ) { }
    ngOnInit() {
      if ( this.auth.isLogin() ) {
          this.topicservice.getAllTopic().subscribe( data => {
            console.log(data);
            this.lists = data ;
          }, (err: HttpErrorResponse) => {
            if ( err.error instanceof Error ) {
               console.log(' erro client ', err.error.message);
            } else {
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
              if ( err.status === 401 ) {
                console.log(' token het hang ');
                this.isShow = true;
              }
            }
          });
      } else {
        this.isShow = true;
        console.log('khong co token');
      }
    }
    addTopic() {
      console.log('----add.----');
        console.log(this.addtopic.topicName, this.addtopic.topicDescription, this.addtopic.topicStatut);
      this.addtopic = {};
      this.modalRef.hide();
    }

    editTopic(): void {
      console.log('----edit.----');
      console.log(this.edittopic.topicName, this.edittopic.topicDescription, this.edittopic.topicStatut);
  }
// lay ở client
  // private findById(id: string): any {
  //     return  this.lists.filter( temp => temp.topicID === id );
  // }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-success' });
      }
      openModal2(template: TemplateRef<any>, temp: string) {
         this.isprocess = true;
        this.topicservice.getById(temp).subscribe( data => {
        this.edittopic = data;
        console.log(this.edittopic);
        this.modalRef2 = this.modalService.show(template, { class: 'second modal-success' });
      }, (err: HttpErrorResponse ) => {
        if ( err instanceof Error ) {
          console.log(' erro client ') ;
        }else {
          if ( err.status === 401 ) {
            console.log(this.isShow + 'firstt');
            this.isShow = true;
            console.log(this.isShow + 'end')
            console.log('token het hang');
            console.log(err.error);
          }
        }
      } );
       this.isprocess = false;
      }
      closeFirstModal() {
        this.modalRef.hide();
      }
      // để sử dụng isShow = true
      public tokenEvent( $event ): void {
        console.log($event);
         if ( $event === 'ok' ) {
           this.isShow = false;
           this.ngOnInit()
          console.log(' cập update token  ');
         }
      }
}
