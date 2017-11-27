import { HongDanService } from './../../../../_service/admin-huong-dan/huong-dan.service';
import { Component, OnInit } from '@angular/core';
import {  HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: 'huong-dan2.component.html'
})

export class HuongDan2Component implements OnInit {
    user: any = {};
    sms: string;
    token: any = {} ;
    lists: any = [] ;

    topic: FormGroup;
        constructor(
            private huongDanSerice: HongDanService
    ) { }

    ngOnInit() {

        this.topic =  new FormGroup({
            topicName: new FormControl('', [
           Validators.required
                ] ) ,
                topicDescription: new FormControl('', [
                    Validators.required
                         ]),
                         topicStatut: new FormControl(0, [
           Validators.required
                ]) })
        }
    public addTopic( ) {
        console.log(this.topic.value);
        this.topic.value.listOfCourse = null;
        console.log(this.topic.value);
        this.huongDanSerice.createTopic(this.topic.value).subscribe( data => {
            console.log(data);
            console.log('them thanh cong');
        });
    }
     public callService() {
          this.huongDanSerice.getAllTopic().subscribe(data => {
              console.log(data);
              this.lists = data ;
         } ,  (err: HttpErrorResponse) => {
            if ( err.error instanceof Error ) {
                console.log('client side  ');
            } else {
                if ( err.status === 401 ) {
                    // console.log('mat khau Khong dung' )
                    this.sms = 'chua dang nhap';
                }
                if ( err.status === 0) {
                    console.log('chua ket noi internet ');
                }
            }
        })
     }
    //  public login(): void {
    //     this.user.username = 'admin' ;
    //     this.user.password = '123';
    //     this.http.post('http://localhost:8082/auth/login', this.user ).subscribe(data => {
    //         console.log(data);
    //         this.sms = 'dang nhap thanh cong' ;
    //         this.token =  data ;
    //         localStorage.setItem('token-demo', this.token.access_token);

    //     },  (err: HttpErrorResponse) => {
    //         if ( err.error instanceof Error ) {
    //             console.log('client side  ');
    //         } else {
    //             if ( err.status === 403 ) {
    //                 console.log('mat khau Khong dung' )
    //                 this.sms = 'mat khau khong dung';
    //             }
    //             if ( err.status === 0) {
    //                 console.log('chua ket noi internet ');
    //             }
    //         }
    //     });
    //  }

}
