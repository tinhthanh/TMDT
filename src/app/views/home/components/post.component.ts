import { ConfigValue } from './../../../_models/ConfigValue';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxCarousel } from 'ngx-carousel';


@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html',
    styles: [`
    .bannerStyle h1 {
        background-color: #ccc;
        min-height: 300px;
        text-align: center;
        line-height: 300px;
    }
    .leftRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        left: 0;
    }
 
    .rightRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        right: 0;
    }
  `]
})

export class PostComponent implements OnInit {
    public carouselOne: NgxCarousel;
    constructor( private router: Router, private http:  HttpClient, private config: ConfigValue ) { }
    ngOnInit() {
        const test: any = {} ;
         test.email  = 'lang.tt16@gmail.com';
         test.password = '1234';
        this.http.post( 'http://192.168.1.117:8080/auth/login', test).subscribe(data => {
            console.log(data);
        });
        this.http.get( 'http://192.168.1.117:8080/user/info').subscribe(data => {
            console.log(data);
        });

        this.carouselOne = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 2000,
            point: {
              visible: true,
              pointStyles: `
              .ngxcarouselPoint {
                list-style-type: none;
                text-align: center;
                padding: 12px;
                margin: 0;
                white-space: nowrap;
                overflow: auto;
                position: absolute;
                width: 100%;
                bottom: 20px;
                left: 0;
                box-sizing: border-box;
              }
              .ngxcarouselPoint li {
                display: inline-block;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.55);
                padding: 5px;
                margin: 0 3px;
                transition: .4s ease all;
              }
              .ngxcarouselPoint li.active {
                  background: white;
                  width: 10px;
              }
            `
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
          }
     }
     public myfunc(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
     }
    goToHome() {
        console.log('ddsds');
        this.router.navigate(['components/mydemo']) ;

    }
}