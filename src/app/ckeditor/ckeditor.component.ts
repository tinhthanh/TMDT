import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  template:   `
  <ckeditor [(ngModel)]="content" debounce="500">
  <p>Hello <strong>world</strong></p>
</ckeditor>
<input [(ngModel)]="content" />
<div [innerHTML]="content"></div>


  `,
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
  content: string;
  constructor() {
    this.content = 'hihi';
   }

  ngOnInit() {

  }

}
