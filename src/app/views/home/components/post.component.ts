import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {
    constructor( private router: Router ) { }
    ngOnInit() { }
    goToHome() {
        console.log('ddsds');
        this.router.navigate(['components/mydemo']) ;

    }
}