import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomePagesService } from '../../../../_service/home-pages/home-pages.service';
import { ConfigValue } from '../../../../_models/ConfigValue';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'dang-nhap.component.html',
    styleUrls: [ 'dang-nhap.component.css']
})

export class DangNhapComponent implements OnInit {
   loginGroup:  FormGroup;
    ms: string ;
    constructor( private serviceHome: HomePagesService,
        private route: Router ,
    private  config: ConfigValue ) { }

    ngOnInit() {
        if (localStorage.getItem(this.config.l_token) ) {
            this.route.navigate(['/'])
          }
        this.loginGroup = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                // tslint:disable-next-line:max-line-length
                Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                          ]),
            password: new FormControl('', [
                Validators.minLength(8),
                Validators.required
            ]),
            forword: new FormControl(true)

        })
    }
    public login() {
        if (this.loginGroup.valid) {
            console.log(this.loginGroup.value);
            this.serviceHome.homeLogin(this.loginGroup.value).subscribe( data => {
                console.log(data);
                localStorage.setItem(this.config.l_token, data.token);
                this.route.navigate(['/'])
             }, (err: HttpErrorResponse) => {
                  if ( err.error instanceof Error ) {
                      console.log('erro clien side ')
                  } else {
                      if ( err.status === 0 ){
                          console.log('Không kết nối internet ')
                          this.ms = 'không có internet thử lại ';
                      }
                      if ( err.status === 403 ) {
                          this.ms = 'Tài khoãn hoặc mặt khẩu không đúng !'
                          console.log('taoi khoan hoac mat khau khong dung');
                      }
                  }
             })

          } else {
              console.log('du lieu thieu de dang nhap');
          }
    }
 }