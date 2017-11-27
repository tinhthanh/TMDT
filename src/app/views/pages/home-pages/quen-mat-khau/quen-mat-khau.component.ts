import { HttpErrorResponse } from '@angular/common/http';
import { slideInDownAnimation } from './../../../../animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomePagesService } from '../../../../_service/home-pages/home-pages.service';
@Component({
    templateUrl: 'quen-mat-khau.component.html',
    animations:  [
        slideInDownAnimation
    ]
})

export class QuenMatKhauComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
     public button = 'Tiếp tục';
       ms: string;
       success = false ;
       forgetGroup: FormGroup
    constructor(
        private serviceHome: HomePagesService
    ) {
        this.forgetGroup = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                // tslint:disable-next-line:max-line-length
                Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ])
        });
     }
   public forgetSubmit() {
       this.button = 'Chờ trong giây lác..';
       if ( this.forgetGroup.valid ) {
           console.log(this.forgetGroup.value)
           console.log('ngon')
           this.serviceHome.checkforget(this.forgetGroup.value.email).subscribe(
               data => {
                    console.log(data);
                    this.success = true ;
               } , (
                   err: HttpErrorResponse) => {
                       console.log(err.error);
                       if ( err.error instanceof Error ) {
                           console.log('erro client' )
                       } else {
                           if ( err.status === 404 ) {
                               console.log(' email không tồn tại trong hệ thống ')
                           this.ms = 'Email không tồn tại trong hệ thống ';
                            }
                            if ( err.status === 0 ) {
                                 this.ms = 'không có internet ';
                            }
                       }
             } )
       } else {
           console.log('hieu du dieu')
       }
       this.button = 'Tiếp tục';
   }
    ngOnInit() { }
}
