import { HomePagesComponent } from './home-pages/home-pages.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { P500Component } from './500.component';
import { RegisterComponent } from './register.component';
import {  RoleComponent } from './role.component';
import { LoginComponent } from './login.component' ;
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Role access'
        },
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          title: 'Role access'
        },
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      }
    ]
  },
  {
    path:  'home-pages',
    component: HomePagesComponent,
    loadChildren: './home-pages/home-pages.module#HomePagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesRoutingModule {}
