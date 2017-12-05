import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'huong-dan1.component.html'
})

export class HuongDan1Component implements OnInit {
    ngoc: any;
    constructor() {  }
    ngOnInit() {
        this.ngoc = 'bit xe may';
     }
}
