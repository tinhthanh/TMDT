import { navigation } from './../../../../_nav';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'tao-khoa-hoc.component.html'
})

export class TaoKhoaHocComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
        this.router.navigate(['/admin/khoa-hoc/tao-khoa-hoc/dashboard']);
     }
}
