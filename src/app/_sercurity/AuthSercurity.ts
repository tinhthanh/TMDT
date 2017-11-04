import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigValue } from './../_models/ConfigValue';

@Injectable()
export class AuthSercurity implements CanActivate{
     constructor(
         private router: Router,
         private configValue: ConfigValue ) {
     }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         const user = JSON.parse(localStorage.getItem(this.configValue.token_tmdt));
         if ( user && user.hasOwnProperty('profile') ) {
             const temp =  user;
              const role = temp['profile'].authorities;
                for ( let i = 0 ; i < role.length ; i++ ){
                    if (role[i].authority === this.configValue.role_admin) {
                        console.log(state.url);
                        return true;
                    }
                }
                this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } })
              return false ;
         }
         this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } })
        return  false;
     }
}