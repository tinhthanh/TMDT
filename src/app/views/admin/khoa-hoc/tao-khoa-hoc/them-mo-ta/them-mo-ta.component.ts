import { Component, OnInit, HostBinding } from '@angular/core';
import { KhoaHocService } from '../../../../../_service/tao-khoa-hoc/khoa-hoc.service';
import { KhoaHoc } from '../../../../../_models/tao-khoa-hoc/KhoaHoc';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../../../../../animations';
@Component({
    templateUrl: 'them-mo-ta.component.html',
    animations: [
        slideInDownAnimation
    ]
})

export class ThemMoTaComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    
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
