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
      constructor(private http: Http ,
            private config: ConfigValue ){
        this.headers.append('Content-Type', 'application/json');
       }
     login(username: string, password: string): Promise<Token> {
      return this.http
        .post(this.config.url_port + '/auth/login', JSON.stringify({ username: username, password: password }) , {headers: this.headers})
        .toPromise()
        .then(res => {
              const user =  res.json();
                 if (user &&  user.access_token ) {
                   //   localStorage.setItem(this.config.token_tmdt, JSON.stringify(user)) ;
                   const headers = new Headers({ 'Authorization': 'Bearer ' + user.access_token });
                    const hd =  new RequestOptions({ headers: headers });
                      this.http.get(this.config.url_port + '/api/whoami', hd)
                         .toPromise()
                         .then( resv => resv.json())
                         .then(
                              resv => {
                                console.log(resv);
                                user.profile =  resv;
                                console.log(user);
                                localStorage.setItem(this.config.token_tmdt, JSON.stringify(user));
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
      private getToken() {
                // lấy token từ client
                const currentUser = JSON.parse(localStorage.getItem(this.config.token_tmdt));
                if ( currentUser ) {
                if (currentUser && currentUser.access_token) {
                    const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
                    return new RequestOptions({ headers: headers });
                }
              } else {
                return new RequestOptions();
              }
            }
            public token(): string {
              this.object_token = JSON.parse(localStorage.getItem(this.config.token_tmdt));
              console.log(this.object_token);
                if ( this.object_token ) {
                  return 'Bearer ' + this.object_token.access_token;
                } else {
                return null;
                }
            }
     }
