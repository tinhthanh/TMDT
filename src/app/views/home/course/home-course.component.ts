import { slideInDownAnimation } from './../../../animations';
import { Item } from './../../../_models/shopping-cart/item';
import { ShoppingCartService } from './../../../_service/shopping-cart/shopping-cart.service';
import { ConfigValue } from 'app/_models/ConfigValue';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
@Component({
    templateUrl: 'home-course.component.html',
    providers: [
        CurrencyPipe
    ],
    animations: [  slideInDownAnimation ]
})

export class HomeCourseComponent implements OnInit {
    public id_q ;
    public course: any = {} ; // Khoa hoc
    public author: any = {};
    public objCourse: any = {} ;
    public listCourse: any  = [] ;
      item  = new Item() ;
    constructor(private title: Title,
    private http:    HttpClient,
    private config: ConfigValue,
    private router:  ActivatedRoute,
    private route: Router,
    private cartService: ShoppingCartService
) {
        this.title.setTitle('Khóa học')
    }
    ngOnInit() {
        if ( ! this.id_q ) {
             if ( this.router.snapshot.queryParams['id']  ) {
                this.id_q =  this.router.snapshot.queryParams['id'] ;
             } else {
                this.route.navigate(['/']);
             }
        }
        this.http.get(this.config.url_port + '/user/course/' + this.id_q ).subscribe( data =>  {
            if ( !data  ) {
                console.log('khong tim thay tai nguyen')
                this.route.navigate(['']);
            } else {
       //     console.log(data);
            this.course  = data ;
        this.author  = this.course.author;

        this.item.id =  this.course.courseID;
        if ( this.course.courseTitle.length  < 25 ) {
            this.item.name = this.course.courseTitle ;
        } else {
            this.item.name = this.course.courseTitle.substring(0, 25) + ' ...'
        }
        this.item.count  = 1 ;
        this.item.image = this.course.courseAvatar;
        this.item.price  = this.course.price ;

        this.course.price  = this.formatVND(this.course.price);
        console.log(this.cartService.cart)
       console.log(this.formatVND(213132));

        console.log(this.course);
            }
        }, (err: HttpErrorResponse) => {
             console.log(err.error) ;
        })
        this.http.get(this.config.url_port + '/user/course?page=1&size=4').subscribe(data => {
            this.objCourse = data;
            // console.log(this.objCourse.listOfResult);
            this.listCourse = this.objCourse.listOfResult;
            // console.log(this.listCourse)
        })
     }
     public formatVND(num) {
    return num.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$&,');
    }
    public ghiDanh() {
        this.cartService.addItem(this.item);
    }
  public  goProducts(id: any) {
       console.log(id);
        this.route.navigate(['/home/course'], { queryParams: { id: id } });
        this.ngOnInit();
        window.scrollTo(0, 0);
      }
 }