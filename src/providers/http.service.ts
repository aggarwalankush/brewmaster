import { Injectable } from '@angular/core';
import { dummyData, RequestQuery } from './model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  private requestUrl = 'localhost:8080/request';

  constructor(public http: HttpClient) {
  }

  getRequestQuery(): Promise<RequestQuery> {

    return new Promise<RequestQuery>((resolve, reject) => {
      resolve(dummyData);
    });

    // return this.get(this.requestUrl);
  }

  private get(url: string, options?): Promise<any> {
    return this.http.get(url, options).toPromise();
  }

}
