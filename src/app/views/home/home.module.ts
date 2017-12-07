import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { PostComponent } from './components/post.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
@NgModule( {
      imports: [
            NgxCarouselModule,
       HomeRoutingModule
      ],
      declarations : [
           PostComponent
      ]
})

export class HomeModule {
 }