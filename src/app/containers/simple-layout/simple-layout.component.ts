import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <link href="/assets/style.css" rel="stylesheet">
  
  <router-outlet></router-outlet>`,
})
export class SimpleLayoutComponent { }
