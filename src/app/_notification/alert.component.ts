import { AlertService } from './../_service/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
     message: any;
    constructor(private alert: AlertService ) { }
    ngOnInit() {
         this.alert.getMessage().subscribe(message => { this.message = message })
     }
}
