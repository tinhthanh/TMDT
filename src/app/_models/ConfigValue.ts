import { Injectable } from '@angular/core';

@Injectable()
export class ConfigValue {
     url_port = 'http://127.0.0.1:8080';
     token_tmdt = 'token_tmdt';
     role_admin = 'ROLE_ADMIN';
     role_user = 'ROLE_USER';
     token = 'token';

     // api lang
      l_port = 'http://localhost:8080'
      l_token = 'l_token';
}
