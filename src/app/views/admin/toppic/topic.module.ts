import { AuthInterceptor } from './../../../_sercurity/AuthInterceptor';
import { TopicDashBoardComponent } from './dashboard/topic-dashboard.component';
import { TopicRouting } from './topic.routing';
import { NgModule } from '@angular/core';
import { TopicComponent } from './topic.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
    imports: [
        TopicRouting,
        ModalModule.forRoot(),
        FormsModule,
        HttpClientModule
    ],
    declarations: [
    TopicComponent,
    TopicDashBoardComponent
    ],
    exports: [
        CommonModule
    ]
    ,
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      }]
})

export  class TopicModule { }