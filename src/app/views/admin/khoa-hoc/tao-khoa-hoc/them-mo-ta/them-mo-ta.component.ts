import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from '../../../../../_service/tao-khoa-hoc/khoa-hoc.service';
import { KhoaHoc } from '../../../../../_models/tao-khoa-hoc/KhoaHoc';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'them-mo-ta.component.html'
})

export class ThemMoTaComponent implements OnInit {
    khoahoc: KhoaHoc;
    constructor(private khoahocservice: KhoaHocService,
    private router: Router) { }
    ngOnInit() {
        this.khoahocservice.moTaSource.subscribe(khoahoc => this.khoahoc = khoahoc)
     }
     newMessage() {
        this.khoahocservice.changeKhoaHoc(this.khoahoc);
        this.router.navigate(['/admin/khoa-hoc/tao-khoa-hoc/dashboard']);
      }
}
