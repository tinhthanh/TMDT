import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigValue } from './../_models/ConfigValue';

@Injectable()
export class AuthSercurity implements CanActivate {
    private can: boolean;
     constructor(
         private router: Router,
         private configValue: ConfigValue ) {
             this.can = false;
     }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         if (this.can) {
             return true;
           } else {
            this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } })
             return false;
         }
    //      const user = JSON.parse(localStorage.getItem(this.configValue.token_tmdt));
    //       console.log(user);
    //      if ( user && user.hasOwnProperty('profile') ) {
    //          const temp =  user;
    //           const role = temp['profile'].authorities;
    //             for ( let i = 0 ; i < role.length ; i++ ){
    //                 if (role[i].authority === this.configValue.role_admin) {
    //                     console.log(state.url);
    //                     return true;
    //                 }
    //             }
    //             this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } })
    //           return false ;
    //      }
    //      this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } })
    //     return  false;
    //  }
}
setCanActivate(can) {
    this.can = can;
  }
}
