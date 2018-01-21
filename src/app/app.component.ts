import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, HttpService]
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpService, private auth: AuthService) { }

}
