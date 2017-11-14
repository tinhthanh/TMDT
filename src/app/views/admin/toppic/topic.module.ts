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
import { AlertTokenOutComponent } from '../../../_notification/alert-token-out.component';

import { AdminTopicService } from '../../../_service/admin-topic/admin-topic.service';

@NgModule({
    imports: [
        TopicRouting,
        ModalModule.forRoot(),
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
    TopicComponent,
    TopicDashBoardComponent,
    AlertTokenOutComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
      AdminTopicService
    ]
})

export  class TopicModule { }