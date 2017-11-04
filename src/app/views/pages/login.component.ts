import { AlertService } from './../../_service/alert.service';
import { navigation } from './../../_nav';
import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../_service/AuthenticationService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  model: any= {};
  loading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: Authentication,
    private alertService: AlertService) { }
  ngOnInit(): void {
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }
  doSubmit() {
     this.loading = true;
  //   this.model.username = 'admin';
 //    this.model.password = '123';
     this.auth.login(this.model.username, this.model.password).then(res => {
      this.router.navigate([this.returnUrl]);
     }).catch( error => {
         console.log(error);
        if (error.status === 500) {
          // console.log('Mat khau khong dung');
          this.alertService.erros('Tài khoản hoặc mặt khẩu không đúng');
           this.loading = false;
        }
     }
     );
    //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //  console.log(this.returnUrl);
  }



}
