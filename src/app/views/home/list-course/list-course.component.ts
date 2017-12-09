import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigValue } from 'app/_models/ConfigValue';

@Component({
    templateUrl: 'list-course.component.html'
})

export class ListCourseComponent implements OnInit {
    constructor( private title: Title ,
    private http: HttpClient ,
    private config: ConfigValue ) {
    }
    ngOnInit() {
        this.title.setTitle('Danh sách khóa học mới ');
     this.http.get(this.config.url_port + '/user/course?page=1&size=10').subscribe(data => {
         console.log(data);
     })
     this.http.get(this.config.url_port + '/user/topic?page=1&size=10').subscribe(data => {
        console.log(data);
    }, (err: HttpErrorResponse) => {
         console.log('')
         if ( err.status === 204 ) {
             console.log('không tìm thấy tài nguyên ');
         }
    })

     }
}
