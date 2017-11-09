import { TopicDashBoardComponent } from './dashboard/topic-dashboard.component';
import { TopicRouting } from './topic.routing';
import { NgModule } from '@angular/core';
import { TopicComponent } from './topic.component';

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    imports: [
        TopicRouting,
        ModalModule.forRoot(),
    ],
    declarations: [
    TopicComponent,
    TopicDashBoardComponent
    ]
})

export  class TopicModule { }