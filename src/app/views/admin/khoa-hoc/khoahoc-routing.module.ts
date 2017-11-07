import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { KhoaHocComponent } from './khoa-hoc.component';
import { ViewComponent } from './view/view.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
      path: '',
      component:  KhoaHocComponent,
      data: {
          title: 'khoa hoc'
      },
      children: [
          {
              path: 'view',
              component: ViewComponent,
              data: {
                  title: 'view '
              }
          },
          {
              path: 'view-details/:id',
              component: ViewDetailsComponent,
              data: {
                  title: 'view details'
              }
          },
          {
            path: 'tao-khoa-hoc',
            loadChildren: './tao-khoa-hoc/tao-khoa-hoc.module#TaoKhoaHocModule',
            data: {
                title: 'Tao khoa hoc'
            }
        }
      ]
  }
]
@NgModule({
     imports: [
     RouterModule.forChild(routes)
     ],
     exports: [
         RouterModule
     ]
})
 export class KhoaHocRoutingModule { }
