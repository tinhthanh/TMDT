import { ShoppingCartService } from './../../_service/shopping-cart/shopping-cart.service';
import { ListCourseComponent } from 'app/views/home/list-course/list-course.component';
import { HomeCourseComponent } from './course/home-course.component';
import { HomeIndexComponent } from './index/home-index.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule( {
      imports: [
       NgxCarouselModule,
       HomeRoutingModule,
       FormsModule,
       CommonModule
      ],
      declarations : [
            HomeIndexComponent,
            HomeCourseComponent,
            ListCourseComponent
      ],
      providers: [
            // ShoppingCartService
      ]
})

export class HomeModule {
 }