import { HttpClientModule } from '@angular/common/http';
import { HomePagesService } from './../../../_service/home-pages/home-pages.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KichHoatComponent } from './kich-hoat/kich-hoat.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { DoiMatKhauComponent } from './doi-mat-khau/doi-mat-khau.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { HomePagesRouting } from './home-pages.routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

@NgModule({
     imports: [
        HomePagesRouting, FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
     ],
     declarations: [
         DangKyComponent,
         DangNhapComponent,
         DoiMatKhauComponent,
         QuenMatKhauComponent,
         KichHoatComponent
     ],
     providers: [
         HomePagesService
     ]
})

export class HomePagesModule {}