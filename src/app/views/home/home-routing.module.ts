import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post.component';
const routes: Routes = [
     {
         path : '',
         children: [
             {
                 path: 'post',
                 component:  PostComponent,
                 data: {
                    title: 'Post example'
                  }
             }
         ]
     }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }