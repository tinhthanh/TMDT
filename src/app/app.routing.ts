import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ConfigValue } from './_models/ConfigValue';
import { AuthSercurity } from './_sercurity/AuthSercurity';
import { Authentication } from './_service/AuthenticationService';
// Import Containers
import {  P404Component } from './views/pages/404.component';

import { AlertService } from './_service/alert.service';


// import { AlertComponent } from './_notification/alert.component';
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
  HomeLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/post',
    pathMatch: 'full',
  },
  {
    path: 'ckeditor',
    component: CkeditorComponent,
  },
  {
    path: 'admin',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'khoa-hoc',
        loadChildren: './views/admin/khoa-hoc/khoahoc.module#KhoaHocModule'
      },
      {
        path: 'phe-duyet',
        loadChildren: './views/admin/phe-duyet/phe-duyet.module#PheDuyetModuel'
      }
    ],
    canActivate: [AuthSercurity]
  },
  {
    path: 'home',
    component: HomeLayoutComponent ,
    children: [
      {
        path: '',
        loadChildren: './views/home/home.module#HomeModule'
      }
    ]
  }
   ,
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
  ,
  {
   path: '**', component: P404Component
    }
];

// chú ý commonModule để phái trên hoặc dưới
@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot(routes 
      // , { enableTracing: true }
    ),
  ],
  providers: [
    Authentication,
     ConfigValue,
     AuthSercurity,
     AlertService
  ],
  declarations:  [
    P404Component
    /* ,
    AlertComponent */
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
