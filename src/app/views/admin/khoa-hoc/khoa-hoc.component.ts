import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'khoa-hoc.component.html'
})

export class KhoaHocComponent implements OnInit {
    content: string;
    constructor(private router: Router) { }
    ngOnInit() {
        this.content = 'hihi';
        this.router.navigate(['/admin/khoa-hoc/view']);
     }
}
