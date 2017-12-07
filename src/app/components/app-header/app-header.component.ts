import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigValue } from './../../_models/ConfigValue';
import { Component, OnInit } from '@angular/core';
import { Authentication } from 'app/_service/AuthenticationService';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
   user: any = { };
  ngOnInit(): void {
    // console.log(localStorage.getItem(this.config.token));
     let headers = new HttpHeaders();
     headers = headers.set('Authorization', localStorage.getItem(this.config.token))
    this.http.get(this.config.url_port + '/user/info', { headers: headers }).subscribe( data => {
      console.log(data);
      this.user = data ;
    });
  }
  constructor(private auth: Authentication,
    private config: ConfigValue,
     private http: HttpClient
  ) {

  }
 }


