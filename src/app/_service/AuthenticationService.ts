import { HttpErrorResponse } from '@angular/common/http';
import { Token } from './../_models/Token';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { ConfigValue } from '../_models/ConfigValue';

// luu mãng từ resfull gửi về
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class Authentication{
    private headers = new Headers();
    private user ;
     object_token: any = {};
     private isFlat  = false;
      constructor(private http: Http ,
            private config: ConfigValue ){
        this.headers.append('Content-Type', 'application/json');
       }
     login(username: string, password: string): Promise<Token> {
      return this.http
        .post(this.config.url_port + '/auth/login', JSON.stringify({ email: username, password: password }) , {headers: this.headers})
        .toPromise()
        .then(res => {
              const user =  res.json();
                 if (user &&  user.access_token ) {
                   //   localStorage.setItem(this.config.token_tmdt, JSON.stringify(user)) ;
                   const headers = new Headers({ 'Authorization': user.access_token });
                    const hd =  new RequestOptions({ headers: headers });
                      this.http.get(this.config.url_port + '/user/info', hd)
                         .toPromise()
                         .then( resv => resv.json())
                         .then(
                              resv => {
                                localStorage.setItem(this.config.token_tmdt, JSON.stringify(resv));
                              }
                         );
                 } else {
                     return null;
                 }
               return user as Token  } )
        .catch(this.handleError);
      }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
     logout() {
         localStorage.removeItem(this.config.token_tmdt);
         localStorage.removeItem(this.config.token);
      }
      public isLogin(): boolean {
         if ( localStorage.getItem(this.config.token) ) {
            return true;
         } else {
          return false;
         }
      }
      // private getToken() {
      //           // lấy token từ client
      //           const currentUser = JSON.parse(localStorage.getItem(this.config.token_tmdt));
      //           if ( currentUser ) {
      //           if (currentUser && currentUser.access_token) {
      //               const headers = new Headers({ 'Authorization': currentUser.access_token });
      //               return new RequestOptions({ headers: headers });
      //           }
      //         } else {
      //           return new RequestOptions();
      //         }
      //       }
            public token(): string {
              this.object_token = JSON.parse(localStorage.getItem(this.config.token_tmdt));
              console.log(this.object_token);
                if ( this.object_token ) {
                  return  this.object_token.access_token;
                } else {
                return null;
                }
            }
            public refresh(username: string , password: string): Promise<boolean> {
              this.isFlat = false;
              return this.http
              .post(this.config.url_port + '/auth/login', JSON.stringify({ email: username, password: password }) ,
               {headers: this.headers})
              .toPromise()
              .then(res => {
                    const user =  res.json();
                        localStorage.setItem(this.config.token, user.access_token)
                       if (user &&  user.access_token ) {
                         this.isFlat = true;
                       }
                     return this.isFlat } )
              .catch(this.handleError);
           }
                 }
