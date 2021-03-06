import { KichHoatComponent } from './kich-hoat/kich-hoat.component';
import { DoiMatKhauComponent } from './doi-mat-khau/doi-mat-khau.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

const routes: Routes = [
     {
         path : 'dang-ky',
         component : DangKyComponent
     },
     {
         path: 'dang-nhap',
         component: DangNhapComponent
     },
     {
         path : 'quen-mat-khau',
         component: QuenMatKhauComponent
     },
     {
         path: 'doi-mat-khau',
         component : DoiMatKhauComponent
     },
     {
         path: 'kich-hoat',
        component: KichHoatComponent
     }
]

@NgModule( {
     imports: [
         RouterModule.forChild(routes)
     ],
     exports: [
         RouterModule
     ]
})

export class HomePagesRouting {}