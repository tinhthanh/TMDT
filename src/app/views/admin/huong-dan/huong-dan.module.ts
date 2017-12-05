import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HongDanService } from './../../../_service/admin-huong-dan/huong-dan.service';
import { AuthInterceptor } from './../../../_sercurity/AuthInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HuongDanComponent } from './huong-dan.component';
import { NgModule } from '@angular/core';
import { HongDanRoutingModule } from 'app/views/admin/huong-dan/huong-dan.routing.module';
import { HuongDan2Component } from 'app/views/admin/huong-dan/huong-dan2/huong-dan2.component';
import { HuongDan1Component } from 'app/views/admin/huong-dan/huong-dan1/huong-dan1.compnent';

@NgModule({
    imports: [
        HongDanRoutingModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        HuongDanComponent,
        HuongDan1Component,
        HuongDan2Component
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
      HongDanService ]
})
export class HuongDanModule { }
