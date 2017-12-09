import { Item } from './../../_models/shopping-cart/item';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigValue } from './../../_models/ConfigValue';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ShoppingCartService } from 'app/_service/shopping-cart/shopping-cart.service';


@Component({
    selector: 'app-home-navbar',
    templateUrl: './home-navbar.component.html',
    styleUrls: ['./home-navbar.component.css']
})

export class HomeNavbarComponent implements OnInit {
    item: Item = new Item();
    cart: Item[] ;
    public submenu = false;
    public megamenu = true;
    public user: any = { }; // thong tin nguoi dung
    isLogin = false;
    effectNavbar = false;
    orderShow = false;
    profileShow = false;
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
    @Inject(DOCUMENT) private document: Document,
    private route: Router ,
    public cartService: ShoppingCartService
   )  { }
    ngOnInit() {
        // this.cartService.cart.subscribe(data => {
        //     this.item =  data;
        // })
          this.cart =  this.cartService.cart;
        // kiem tra đang nhap
        // console.log(localStorage.getItem(this.config.token))
       console.log(  this.item);
        if (localStorage.getItem(this.config.token)) {
             this.isLogin = true ;
             let headers = new HttpHeaders();
             headers = headers.set('Authorization', localStorage.getItem(this.config.token))
            this.http.get(this.config.url_port + '/user/info', { headers: headers }).subscribe( data => {
              console.log(data);
              this.user = data ;
            }, (err: HttpErrorResponse) => {
                if ( err.status === 401 ) {
                    this.isLogin = false;
                }
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
     public logout() {
        localStorage.removeItem(this.config.token);
        //  this.route.navigate(['/pages/home-pages/dang-nhap'])
        this.ngOnInit();
     }
     onSearchChange(searchValue: string, id: any ) {
    this.cartService.changeCout(id , Number( searchValue) );
     this.cartService.tinhTong();
      }
     public deleteItem(id: any ) {
         this.cartService.deleteItem(id);
      }
}