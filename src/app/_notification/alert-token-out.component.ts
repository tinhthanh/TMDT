import { Component, OnInit,  Output, Input, EventEmitter } from '@angular/core';
import { Authentication } from '../_service/AuthenticationService';

@Component({
    selector: 'app-token-out',
    templateUrl: 'alert-token-out.component.html',
    styleUrls: ['alert-token-out.component.css']
})

export class AlertTokenOutComponent implements OnInit {
    public  loading = false;
    public model: any = {};
    public sms: string;
    @Input() isShow: boolean ;
   @Output() fucEvent  = new EventEmitter<string>();
    constructor(private auth: Authentication) { }
    ngOnInit() { }
    public doSubmit(): void {
        this.sms = 'Loading.....';
        this.loading = !this.loading;
        this.auth.refresh(this.model.username, this.model.password).then( res => {
             console.log(res + ' qua lock');
              if ( res ) {
                this.fucEvent.emit('ok');
              }
        }).catch(error => {
           if ( error.status === 403 ) {
            this.sms = ' Tài khoản hoặc mặt khẩu không đúng ';
           }
        });
        this.sms = null;
        this.loading = !this.loading;
    }

}
