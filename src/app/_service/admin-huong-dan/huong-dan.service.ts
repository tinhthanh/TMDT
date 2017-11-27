import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../../_models/ConfigValue';
@Injectable()
export class HongDanService {
 constructor( private http: HttpClient,
        private config: ConfigValue ) { }
 public getAllTopic(): any {
      return this.http.get(this.config.url_port + '/api/topic/all-topic');
 }public createTopic( topic: any ): any {
    return this.http.post(this.config.url_port + '/api/topic/create', topic);
}

 }
