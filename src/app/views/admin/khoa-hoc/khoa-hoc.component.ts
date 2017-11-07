import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'khoa-hoc.component.html'
})

export class KhoaHocComponent implements OnInit {
    content: string;
    constructor() { }
    ngOnInit() {
        this.content = 'hihi';
     }
}
