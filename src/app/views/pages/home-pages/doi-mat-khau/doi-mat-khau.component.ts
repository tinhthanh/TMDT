import { slideInDownAnimation } from './../../../../animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
@Component({
    templateUrl: 'doi-mat-khau.component.html',
    animations: [  slideInDownAnimation ]
})

export class DoiMatKhauComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';

     forgetPass: FormGroup
    constructor() {
        this.forgetPass = new FormGroup({
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]),
            passwordnew: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]),
            passwordconform: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ])
        },
        this.conformPass
    );
    }
    public conformPass(g: FormGroup) {
     return g.get('passwordnew').value ===  g.get('passwordconform').value
     ? null : {'mismatch': true }
    }
    ngOnInit() {
    }
    public forgetPassSubmit() {
        if ( this.forgetPass.valid ) {
            console.log('ngon');
            console.log(this.forgetPass.value);
        } else {
            console.log('bit xe')
        }
    }
}
