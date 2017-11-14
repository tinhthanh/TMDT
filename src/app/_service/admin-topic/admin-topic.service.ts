import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../../_models/ConfigValue';
@Injectable()
export class AdminTopicService {
 constructor( private http: HttpClient,
        private config: ConfigValue ) { }
 public getAllTopic(): any {
      return this.http.get(this.config.url_port + '/api/all-topic');
 }
 public getById(id: string ): any {
    return this.http.get(this.config.url_port + '/api/topic/' + id);
 }
 public updateTopic(id: string , topic: any): any {
     return this.http.put(this.config.url_port + '/api/update/' + id , topic );
 }

 }
