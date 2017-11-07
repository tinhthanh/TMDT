import { NgModule } from '@angular/core';
import { KhoaHocComponent } from './khoa-hoc.component';
import { ViewComponent } from './view/view.component';
import { KhoaHocRoutingModule } from './khoahoc-routing.module';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
     imports: [
      KhoaHocRoutingModule,
      CKEditorModule,
      CommonModule ,
      FormsModule,
     ],
     declarations: [
         KhoaHocComponent,
         ViewComponent,
         ViewDetailsComponent
     ]
})
export class KhoaHocModule { }
