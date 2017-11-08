import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KhoaHoc } from '../../_models/tao-khoa-hoc/KhoaHoc';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class KhoaHocService {
       moTaSource = new BehaviorSubject<KhoaHoc>(new KhoaHoc());
      constructor() {
      }
    changeKhoaHoc(khoahoc: KhoaHoc) {
      this.moTaSource.next(khoahoc);
    }
    remove() {
      this.moTaSource.next(new KhoaHoc());
    }
}
