import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigValue } from './../../_models/ConfigValue';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-home-navbar',
    templateUrl: './home-navbar.component.html'
})

export class HomeNavbarComponent implements OnInit {
    public submenu = false;
    public megamenu = true;
    public user: any = { }; // thong tin nguoi dung
    isLogin = false;

    effectNavbar =false;
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 600) {
            this.effectNavbar =  true;
        } else {
         this.effectNavbar = false;
        }
      //  console.log(this.navIsFixed +  ' -'  + number)
      }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
     // console.log(event.target.innerWidth);
      if (event.target.innerWidth < 990 ) {
          this.megamenu = false ;
      } else {
          this.megamenu = true;
      }
    }
    constructor( private config: ConfigValue,
    private http: HttpClient ,
    @Inject(DOCUMENT) private document: Document ) { }
    ngOnInit() {
        // kiem tra đang nhap
        // console.log(localStorage.getItem(this.config.token))
        if (localStorage.getItem(this.config.token)) {
             this.isLogin = true ;
             let headers = new HttpHeaders();
             headers = headers.set('Authorization', localStorage.getItem(this.config.token))
            this.http.get(this.config.url_port + '/user/info', { headers: headers }).subscribe( data => {
              console.log(data);
              this.user = data ;
            });
        } else {
            this.isLogin = false;
        }
        // 
        // console.log(window.innerWidth);
        if ( window.innerWidth < 990 ) {
            this.megamenu = false;
        } else {
            this.megamenu = true;
        }
     }
}