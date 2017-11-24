import { Authentication } from './../../../../_service/AuthenticationService';
import { Headers } from '@angular/http';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { ConfigValue } from '../../../../_models/ConfigValue';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
   private id: string;
    modalRef: BsModalRef;
    modalRef2: BsModalRef;
    modaldelete: BsModalRef;
    public lists;
    constructor(private http: HttpClient,
      private config: ConfigValue,
      private router: Router,
      private auth: Authentication,
      private topicservice: AdminTopicService,
      private modalService: BsModalService ) { }
    ngOnInit() {
      if ( this.auth.isLogin() ) {
          this.topicservice.getAllTopic()
          .subscribe( data => {
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
              if ( err.status === 0 ) {
                console.log(' không kết nối dược với service')
              }
            }
          });
      } else {
        this.isShow = true;
        console.log('khong co token');
      }
    }
    public deleteTopic() {
      this.topicservice.deleteTopic(this.id).subscribe( res => {
        console.log(res)
        for ( let i = 0  ; i < this.lists.length ; i++ ) {
          if ( this.lists[i].topicID === this.id ) {
            this.lists.splice(i, 1 );
          }
        }
      } , ( err: HttpErrorResponse) => {
         if ( err.error instanceof Error ) {
           console.log('erro client ' )
         } else {
           console.log( 'erro service ')
           if ( err.status === 401 ) {
             console.log( 'token hết hạng')
             this.isShow = true ;
           }
           if ( err.status === 0 ) {
             console.log(' không kết nối được với máy chuể ')
           }
           if ( err.status === 400 ) {
             console.log( ' bad reqest ')
           }
           console.log(err.message)

          }
      }  )
      this.modaldelete.hide();
    }
    openModalRemove(template: TemplateRef<any> , id: string) {
      this.id = id ;
      this.modaldelete = this.modalService.show(template , { class: 'modal-success' });
    }
    addTopic() {
      if ( ! this.addtopic.topicStatut ) {
          this.addtopic.topicStatut = 1;
      } else {
        this.addtopic.topicStatut = 0;
       }
         this.addtopic.topicID =  null;
        this.topicservice.createTopic(this.addtopic).subscribe(
          res =>  {
            console.log(res);
            if ( res && res.topicID ) {
              this.lists.push(res);
            } else {
              console.log('erro response ');
            }
          } ,  (err: HttpErrorResponse) => {
             if ( err.error instanceof Error ) {
               console.log('erro client  ') ;
             } else {
              if ( err.status === 401 ) {
                console.log(' token het hang ');
                this.isShow = true;
              }
              if ( err.status === 0 ) {
                console.log(' không kết nối dược với service')
              }
              if  ( err.status === 400 ) {
                console.log(' bad request ') ;
              }
             }
            //  this.isShow = !this.isShow
          }
        );

      this.addtopic = {};
      this.modalRef.hide();
    }

    editTopic(): void {
      console.log('----edit.----');
      if ( this.edittopic.topicStatut  === false  )  {
        this.edittopic.topicStatut = 0;
      } else {
        this.edittopic.topicStatut = 1 ;
      }
      console.log(this.edittopic.topicName, this.edittopic.topicDescription, this.edittopic.topicStatut);
      console.log(this.edittopic)
      this.edittopic.topicID = this.id ;
       this.topicservice.updateTopic(this.id, this.edittopic).subscribe( res => {
       // let topic = this.findById(this.id) ;
            // topic = res;
             for ( let i = 0 ; i < this.lists.length ; i++) {
                if (this.lists[i].topicID === this.id ) {
                  console.log(this.lists[i]);
                  this.lists[i] = res;
                }
             }
       }, ( err: HttpErrorResponse) => {
            if ( err.error instanceof Error ) {
              console.log('erro clinet ')
            } else {
              if ( err.status === 401 ) {
                console.log(' token het hang ');
                this.isShow = true;
              }
              if ( err.status === 0 ) {
                console.log(' không kết nối dược với service')
              }
              if ( err.status === 400 ) {
                console.log(' bad request')
              }
            }
       });
       this.modalRef2.hide();
  }
// lay ở client
  private findById(id: string): any {
      return  this.lists.filter( temp => temp.topicID === id );
  }
  // them topic
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-success' });
      }

      // edit topic
      openModal2(template: TemplateRef<any>, temp: string) {
        this.id = temp ;
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
            console.log(' token het hang ');
            this.isShow = true;
          }
          if ( err.status === 0 ) {
            console.log(' không kết nối dược với service')
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
