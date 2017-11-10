import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { TopicComponent } from './topic.component';
import { TopicDashBoardComponent } from './dashboard/topic-dashboard.component';

const routes: Routes = [
   {
        path: '',
        component: TopicComponent,
        data: {
            title: 'Topic'
        },
        children: [
            {
                path: 'topic-dashboard',
                component: TopicDashBoardComponent,
                data: {
                    title: 'Topic Dashboard'
                },
            }
        ]
   }
];
 @NgModule({
      imports: [
           RouterModule.forChild(routes)
      ],
      exports: [
           RouterModule
      ]
 })
export class TopicRouting { }