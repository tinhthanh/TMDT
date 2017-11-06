import { navigation } from './../../../../_nav';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
@Component({
    templateUrl: 'view-details.component.html'
})
export class ViewDetailsComponent implements OnInit {
        id: number;
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
        ngOnInit() {
            this.route.params.forEach((params: Params) => {
                if (params['id'] !== undefined) {
                 const id = +params['id'];
                    this.id  =  id ;
                }
              });
          }
          gotoView() {
               this.router.navigate(['/admin/khoa-hoc/view'])
          }
}
