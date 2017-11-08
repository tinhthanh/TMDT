import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KhoaHocService } from '../../../../../_service/tao-khoa-hoc/khoa-hoc.service';
import { KhoaHoc } from '../../../../../_models/tao-khoa-hoc/KhoaHoc';

import { SlicePipe } from '@angular/common';

@Component({
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    khoahoc: KhoaHoc = new KhoaHoc();
    constructor( private khoahocservice: KhoaHocService,
        private router: Router) {
      }
    ngOnInit() {
      this.khoahocservice.moTaSource.subscribe(khoahoc => this.khoahoc = khoahoc)
        // if ( this.khoahoc) {
        //     this.khoahoc.motachitiet = 'x';
        //     this.khoahocservice.changeKhoaHoc( this.khoahoc )
        // }
    }
    goThemMoTa() {
        this.khoahocservice.changeKhoaHoc( this.khoahoc )
        this.router.navigate(['/admin/khoa-hoc/tao-khoa-hoc/them-mo-ta']);
    }
    removeData() {
         this.khoahocservice.remove();
    }
}
