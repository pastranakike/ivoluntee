import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Injectable()
export class HttpService {

  baseURL = 'https://cycjzetwmn.localtunnel.me/';

  private userID: string;

  constructor(private http: HttpClient) { }

  public httpGet(path: string, body: any): Observable<any> {
    console.log(this.baseURL + path);
    return this.http
    .get(this.baseURL + path, body)
    .retry(1);
  }

  public httpPost(path: string, body: any): Observable<any> {
    console.log(this.baseURL + path);
    return this.http
    .post(this.baseURL + path, body)
    .retry(1);
  }

  public signedIn(userID: string, userName: string) {
    this.userID = userID;
    const body = {
      userID: userID,
      userName: userName,
      eventsAssisted: [],
      eventsInterested: [],
      score: 0,
      tags: ['puppies', 'elderly', 'food']
    };
    return this.httpPost('users/create_user', body).subscribe(
      (value) => {console.log(value); }
    );
  }

}
