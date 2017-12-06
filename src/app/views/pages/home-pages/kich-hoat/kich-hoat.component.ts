import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HomePagesService } from '../../../../_service/home-pages/home-pages.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';
@Component({
    templateUrl: 'kich-hoat.component.html'
})
export class KichHoatComponent implements OnInit {
    public quen_mk = false ;
    private obj: any = {} ;
    forgetPass: FormGroup
    ms: string
    private key: any = {};
    constructor( private router: ActivatedRoute ,
        private routes: Router,
      private serviceHome: HomePagesService
    ) {

        this.forgetPass = new FormGroup({
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
               public forgetPassSubmit() {
                   if ( this.forgetPass.valid ) {
                       console.log('ngon');
                       this.obj.newPassword = this.forgetPass.value.passwordnew;
                       console.log(this.forgetPass.value);
                       console.log(this.obj)
            this.serviceHome.forgetPass(this.obj).subscribe(
            data => {
             console.log(data);
              this.routes.navigate(['/pages/home-pages/dang-nhap']);
            },
        (err: HttpErrorResponse ) => {
             console.log(err)
             if ( err.error instanceof Error ) {
                 console.log('Erro client')
                 this.ms = 'Erro fornt end '
             } else {
                 if ( err.status === 0 ) {
                     console.log('bạn chưa kết nối internet')
                     this.ms = 'Bạn chưa kết nối internet';
                 }
                 if ( err.status === 403 ) {
                     this.ms = 'Liên kết này đã hết hạng'
                     console.log('Liên kết này đã hết hạng ')
                 }
             }
        }
   );


                   } else {
                       console.log('bit xe')
                   }
               }
    ngOnInit(): void {
        const key  = this.router.snapshot.params['key'];
        console.log(key);
 if ( this.router.snapshot.queryParams['key']) {
      this.key.key  =  this.router.snapshot.queryParams['key'] ;
    this.serviceHome.homeActiveLink( this.key ).subscribe(
        data => {
              this.routes.navigate(['/pages/home-pages/dang-nhap']);
            console.log(data);
        },
        (err: HttpErrorResponse ) => {
             console.log(err)
        }
   );

   }
   if ( this.router.snapshot.queryParams['key-change']) {
       this.quen_mk = true;
       this.obj.key = this.router.snapshot.queryParams['key-change'] ;

//     this.serviceHome.forgetPass(this.obj)(this.router.snapshot.queryParams['key-change'] ).subscribe(
//         data => {
//             console.log(data);
//         },
//         (err: HttpErrorResponse ) => {
//              console.log(err)
//         }
//    );
//   this.routes.navigate(['/pages/home-pages/dang-nhap']);
   }
 //  console.log(key);
    }
}