import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigValue } from './../_models/ConfigValue';

@Injectable()
export class LoginRouteGuard implements CanActivate{
     constructor(
         private router: Router,
         private configValue: ConfigValue ) {
     }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         const user = JSON.parse(localStorage.getItem(this.configValue.token_tmdt));
         if ( user && user.hasOwnProperty('profile') ) {
                this.router.navigate(['/admin'], { queryParams: { returnUrl: state.url } })
              return true ;
         }
         this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url } })
        return  false;
     }
}
