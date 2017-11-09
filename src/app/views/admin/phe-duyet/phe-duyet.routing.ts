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
         data: {
            title: 'Phê duyệt'
        },
         children: [
             {
                 path: 'duyet-khoa-hoc',
                 component: DuyetKhoaHocComponent,
                 data: {
                    title: 'Duyệt khóa'
                },
             },
             {
                path: 'duyet-tai-khoan',
                component: DuyetTaiKhoanComponent,
                data: {
                    title: 'Duyệt tài khoản'
                },
            },
            {
                path: 'duyet-binh-luan',
                component: DuyetBinhLuanComponent,
                data: {
                    title: 'Duyệt bình luận'
                },
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
