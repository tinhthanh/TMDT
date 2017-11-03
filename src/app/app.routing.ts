import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpModule } from  '@angular/http';
import { ConfigValue } from './_models/ConfigValue';
import { AuthSercurity } from  './_sercurity/AuthSercurity';
import { Authentication } from './_service/AuthenticationService';
// Import Containers

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
  path: 'admin',
  redirectTo: '/dashboard',
  pathMatch: 'full',
  canActivate: [AuthSercurity]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthSercurity]
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule',
        canActivate: [AuthSercurity]
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
      }
    ]
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
];

// chú ý commonModule để phái trên hoặc dưới
@NgModule({
  imports: [ 
    HttpModule,
    CommonModule ,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ 
    Authentication,
     ConfigValue,
     AuthSercurity
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
