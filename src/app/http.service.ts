import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Injectable()
export class HttpService {
  baseURL = '10.192.182.197:5000/';

  constructor(private http: HttpClient) { }

  public httpGet(path: string): Observable<any> {
    console.log(this.baseURL + path);
    return this.http
    .get(this.baseURL + path)
    .retry(3);
  }

}
