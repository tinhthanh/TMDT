import { Injectable } from '@angular/core';

@Injectable()
export class ConfigValue {
     url_port = 'http://127.0.0.1:8080';
     cart = 'cart';
// url_port = 'http://192.168.1.117:8080'
//      abount = 'abount';
     role_admin = 'ROLE_ADMIN';
     role_user = 'ROLE_USER';
     token = 'token';
}
