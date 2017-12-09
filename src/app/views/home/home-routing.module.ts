import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeIndexComponent } from './index/home-index.component';
import { HomeCourseComponent } from 'app/views/home/course/home-course.component';
import { ListCourseComponent } from 'app/views/home/list-course/list-course.component';
const routes: Routes = [
     {
         path : '',
         children: [
             {
                 path: 'index',
                 component:  HomeIndexComponent,
                 data: {
                    title: 'Post example'
                  }
             },
             {
                 path: 'course',
                 component: HomeCourseComponent
             },
             {
                 path: 'list-course',
                 component: ListCourseComponent
             }
         ]
     }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }