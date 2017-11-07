import { PheDuyetRouting } from './phe-duyet.routing';
import { NgModule } from '@angular/core';
import { DuyetKhoaHocComponent } from './duyet-khoa-hoc/duyet-khoa-hoc.component';
import { DuyetTaiKhoanComponent } from './duyet-tai-khoan/duyet-tai-khoan.component';
import {PheDuyetComponent} from './phe-duyet.component';
import { DuyetBinhLuanComponent } from './duyet-binh-luan/duyet-binh-luan.component';

@NgModule({
    imports: [
    PheDuyetRouting
    ],
 declarations: [
     DuyetKhoaHocComponent,
     DuyetTaiKhoanComponent,
     PheDuyetComponent,
     DuyetBinhLuanComponent
 ]

})
export class PheDuyetModuel { }
