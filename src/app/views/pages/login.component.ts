
import { AlertService } from './../../_service/alert.service';
import { navigation } from './../../_nav';
import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../_service/AuthenticationService';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthSercurity } from '../../_sercurity/AuthSercurity';
import { ConfigValue } from '../../_models/ConfigValue';
@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  model: any= {};
  loading = false;
  object_token: any = { };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: Authentication,
    private alertService: AlertService,
    private authsercurity: AuthSercurity,
    private config: ConfigValue ) { }
  ngOnInit(): void {
    this.auth.logout();  // xoa tokem
    this.authsercurity.setCanActivate(false); // chna vao trang admin
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }
  doSubmit() {
     this.loading = true;
  //   this.model.username = 'admin';
 //    this.model.password = '123';
        console.log(this.auth.login(this.model.username, this.model.password).then(res => {
          this.authsercurity.setCanActivate(true);
           localStorage.setItem(this.config.token, res.access_token);
           this.chuyenTrang();
          console.log(res);
       return res;
     }).catch( error => {
         console.log(error);
        if (error.status === 403) {
          // console.log('Mat khau khong dung');
          this.alertService.erros('Tài khoản hoặc mặt khẩu không đúng');
           this.loading = false;
           return null;
        }
     }
         ) );
    //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //  console.log(this.returnUrl);

  }
   chuyenTrang(): void {
    this.router.navigate([ this.returnUrl ]);
   }
}
