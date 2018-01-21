import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, HttpService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.httpGet('api').subscribe((value) => {
      console.log(value);
    }, (error) => {
      console.log(error);
    });
  }

}
