import { Item } from './../../_models/shopping-cart/item';
import { ConfigValue } from './../../_models/ConfigValue';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class ShoppingCartService {
    // cart = new BehaviorSubject<Item>(new Item());
    // addItem(khoahoc: Item) {
    //     this.cart.next(khoahoc);
    //   }
    //   deleteItem() {
    //     this.cart.next(new Item());
    //   }
      tong: Number =  0 ; // tong tien
      tongSL: Number = 0 ;
      cart: Item[] = [] ;
    constructor(private config: ConfigValue) { }
    // public loadCart() {
    //     if ( localStorage.getItem(this.config.cart)) {
    //         this.cart = JSON.parse (localStorage.getItem(this.config.cart)) ;
    //     } else {
    //          localStorage.setItem(this.config.cart, JSON.stringify( this.cart));
    //     }
    // }
    public tinhTong() {
     let temp = 0 ;
      for ( let i = 0 ; i < this.cart.length ; i++ ) {
        temp +=  ( this.cart[i].count * this.cart[i].price ) ;
    }
    this.tong = temp ;
    this.tongSoLuong();
    }
    // public saveCart() {
    //     localStorage.setItem(this.config.cart, JSON.stringify( this.cart));
    // }
    public addItem( item: Item  ) {
        this.cart.push(item);
    //    this.saveCart();
       this.tinhTong();
    }
    public changeCout(id: any , count: Number) {
      for ( let i = 0 ; i < this.cart.length ; i++ ) {
        if ( this.cart[i].id === id ) {
            this.cart[i].count = count;
            if ( this.cart[i].count === 0 ) {
              this.cart.splice(i, 1);
            }

        }
    }
    this.tinhTong();
    }
    public tongSoLuong() {
      let temp = 0 ;
      for ( let i = 0 ; i < this.cart.length ; i++ ) {
        temp +=  ( this.cart[i].count ) ;
    }
    this.tongSL = temp ;
    }
    public deleteItem(id: any) {
        for ( let i = 0 ; i < this.cart.length ; i++ ) {
            if ( this.cart[i].id === id ) {
                console.log('co')
                this.cart.splice(i, 1);
                console.log(this.cart);
            }
        }
        this.tinhTong();
        // this.saveCart();
    }
}