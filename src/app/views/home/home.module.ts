import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { PostComponent } from './components/post.component';
@NgModule( {
      imports: [ 
       HomeRoutingModule
      ],
      declarations :[
           PostComponent
      ]
})
export class HomeModule {
 }