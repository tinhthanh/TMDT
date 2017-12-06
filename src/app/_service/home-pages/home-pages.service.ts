import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../../_models/ConfigValue';
@Injectable()
export class HomePagesService {
    constructor( private http: HttpClient,
       private  config: ConfigValue
     ) { }
    public homeLogin( user: any): any {
        return this.http.post(this.config.url_port + '/auth/login', user);
    }
    public homeRegister(user: any ): any {
     return this.http.post(this.config.l_port + '/user', user);
    }
    public homeActiveLink(link: string): any {
         return this.http.patch(this.config.l_port + '/user/register_status' , link);
    }
    public checkforget(email: string): any {
         return this.http.get(this.config.l_port + '/user/token_reset_password?email=' + email );
    }
    public forgetPass( obj: any ): any {
    return this.http.patch(this.config.l_port + '/user/password_reset', obj );
    }
}
