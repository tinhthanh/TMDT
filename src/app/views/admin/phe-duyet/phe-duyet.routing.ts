import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PheDuyetComponent } from './phe-duyet.component';
import { DuyetKhoaHocComponent } from './duyet-khoa-hoc/duyet-khoa-hoc.component';
import { DuyetTaiKhoanComponent } from './duyet-tai-khoan/duyet-tai-khoan.component';
import { DuyetBinhLuanComponent } from './duyet-binh-luan/duyet-binh-luan.component';
const routes: Routes = [
     {
         path: '',
         component: PheDuyetComponent,
         children: [
             {
                 path: 'duyet-khoa-hoc',
                 component: DuyetKhoaHocComponent
             },
             {
                path: 'duyet-tai-khoan',
                component: DuyetTaiKhoanComponent
            },
            {
                path: 'duyet-binh-luan',
                component: DuyetBinhLuanComponent
            }
         ]
     }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PheDuyetRouting { }
