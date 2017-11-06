import { NgModule } from '@angular/core';
import { KhoaHocComponent } from './khoa-hoc.component';
import { ViewComponent } from './view/view.component';
import { KhoaHocRoutingModule } from './khoahoc-routing.module';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
     imports: [
      KhoaHocRoutingModule
     ],
     declarations: [
         KhoaHocComponent,
         ViewComponent,
         ViewDetailsComponent
     ]
})
export class KhoaHocModule { }
