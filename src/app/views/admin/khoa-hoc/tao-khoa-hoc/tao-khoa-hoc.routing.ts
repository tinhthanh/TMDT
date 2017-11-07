import { ThemVideoBaiHocComponent } from './them-video-bai-hoc/them-video-bai-hoc.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { ThemChuongMucComponent } from './them-chuong-muc/them-chuong-muc.component';
import { TaoKhoaHocComponent } from './tao-khoa-hoc.component';
import { ThemBaiHocComponent } from './them-bai-hoc/them-bai-hoc.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { CommonModule } from '@angular/common';
const routes: Routes = [
        {
        path: '',
        component: TaoKhoaHocComponent,
        children: [
            {
                path: 'them-chuong-muc',
                component: ThemChuongMucComponent,
                data: {
                    title: 'Thêm chương'
                }
            },

            {
                path: 'them-bai-hoc',
                component: ThemBaiHocComponent,
                data: {
                    title: 'Thêm bài học'
                }
            },
            {
                path: 'them-video-bai-hoc',
                component: ThemVideoBaiHocComponent,
                data: {
                    title: 'Thêm video bài hoc'
                }
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'dasboard'
                }
            }
        ]
    }
]

@NgModule({
       imports: [
        CommonModule,
           RouterModule.forChild(routes)
       ],
       exports: [
           RouterModule
       ]
})

export class TaoKhoaHocRouting {}