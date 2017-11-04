import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import {  Subject} from 'rxjs/Subject';

@Injectable()
export class AlertService {
      private subject = new Subject<any>();
      private keep = false;
      constructor(
           private router: Router
      ) {
         router.events.subscribe(event => {
              if ( event instanceof NavigationStart ) {
                // hiện thông báo ở một nơi
                   this.keep = false;
              } else {
                  // xoa thông báo
                   this.subject.next() ;
              }
         })
      }
    success(message: string, keep = false) {
         this.keep = keep;
         this.subject.next({ type: 'success', text: message });
    }
    erros(message: string, keep = false ) {
         this.keep = keep ;
         this.subject.next({ type: 'error', text: message});
    }
    getMessage(): Observable<any> {
         return this.subject.asObservable();
    }
}
