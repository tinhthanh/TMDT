import { navigation } from './../../_nav';
import { Component, OnInit } from '@angular/core';
import { Authentication } from  '../../_service/AuthenticationService';
import { Router, ActivatedRoute } from  '@angular/router'; 

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: Authentication ) { }
  ngOnInit(): void {
    
  }
  doSubmit() {
     this.auth.login("admin", "123").then(res => {
        console.log(res);
     });
     this.router.navigate(['admin']);
     this.router.navigate(['admin']);
  }
   
}
