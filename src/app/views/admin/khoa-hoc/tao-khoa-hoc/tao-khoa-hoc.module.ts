import { TaoKhoaHocComponent } from './tao-khoa-hoc.component';
import { NgModule } from '@angular/core';
import {  TaoKhoaHocRouting } from './tao-khoa-hoc.routing';
import { ThemBaiHocComponent } from './them-bai-hoc/them-bai-hoc.component';
import { ThemChuongMucComponent } from './them-chuong-muc/them-chuong-muc.component';
import { ThemVideoBaiHocComponent } from './them-video-bai-hoc/them-video-bai-hoc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KhoaHocService } from '../../../../_service/tao-khoa-hoc/khoa-hoc.service';
import {  ThemMoTaComponent} from './them-mo-ta/them-mo-ta.component';
@NgModule( {
     imports: [
        FormsModule,
         TaoKhoaHocRouting,
         CKEditorModule,
         CommonModule ,
         FormsModule
     ],
     declarations: [
        ThemBaiHocComponent,
        ThemChuongMucComponent,
        ThemVideoBaiHocComponent,
        TaoKhoaHocComponent,
        DashboardComponent,
        ThemMoTaComponent
     ],
     providers: [
         KhoaHocService
     ]
})

export class TaoKhoaHocModule { }
