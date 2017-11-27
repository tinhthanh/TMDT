import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuongDanComponent } from './huong-dan.component';
import { HuongDan1Component } from 'app/views/admin/huong-dan/huong-dan1/huong-dan1.compnent';
import { HuongDan2Component } from 'app/views/admin/huong-dan/huong-dan2/huong-dan2.component';

const routes: Routes = [
  { path: '', component: HuongDanComponent
  ,
  children: [
 {
     path: 'huong-dan1' ,
     component: HuongDan1Component
 }, {
     path: 'huong-dan2',
     component: HuongDan2Component
 }
], data: {
      title: 'Hướng dẫn'
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HongDanRoutingModule { }
