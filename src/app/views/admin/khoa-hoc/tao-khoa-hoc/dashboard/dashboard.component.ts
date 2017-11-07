import { Component, OnInit } from '@angular/core';

@Component({
    template: `
<ckeditor [(ngModel)]="content" debounce="500">
<p>Hello <strong>world</strong></p>
</ckeditor>
<input [(ngModel)]="content" />
<div [innerHTML]="content"></div>
    `
})

export class DashboardComponent implements OnInit {
    content: string;
    constructor() {
        this.content = `<p>My HTML</p>`;
      }

    ngOnInit() { }
}