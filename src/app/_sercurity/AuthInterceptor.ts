import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Authentication } from '../_service/AuthenticationService';
import { ConfigValue } from '../_models/ConfigValue';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: Authentication,
          private config: ConfigValue) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = localStorage.getItem(this.config.token);
    // Clone the request to add the new header.
    console.log('------------------');
     if ( authHeader ) {
       const authReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + authHeader)       });
          console.log(' dis me ');
        return next.handle(authReq);
        } else {
    // Pass on the cloned request instead of the original request.
    return next.handle(req);
  }
}
}
