import { HomePagesComponent } from './home-pages/home-pages.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { P500Component } from './500.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { RoleComponent } from './role.component';
import { LoginComponent } from './login.component';
import { AlertComponent } from '../../_notification/alert.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule ],
  declarations: [
    P500Component,
    RegisterComponent,
    RoleComponent,
    LoginComponent,
    AlertComponent,
    HomePagesComponent
  ]
})
export class PagesModule { }
