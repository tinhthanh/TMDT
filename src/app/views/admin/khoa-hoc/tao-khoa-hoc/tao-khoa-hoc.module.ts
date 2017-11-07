import { TaoKhoaHocComponent } from './tao-khoa-hoc.component';
import { NgModule } from '@angular/core';
import {  TaoKhoaHocRouting } from './tao-khoa-hoc.routing';
import { ThemBaiHocComponent } from './them-bai-hoc/them-bai-hoc.component';
import { ThemChuongMucComponent } from './them-chuong-muc/them-chuong-muc.component';
import { ThemVideoBaiHocComponent } from './them-video-bai-hoc/them-video-bai-hoc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
@NgModule( {
     imports: [
        FormsModule,
         TaoKhoaHocRouting
     ],
     declarations: [
        ThemBaiHocComponent,
        ThemChuongMucComponent,
        ThemVideoBaiHocComponent,
        TaoKhoaHocComponent,
        DashboardComponent
     ]
})

export class TaoKhoaHocModule { }
