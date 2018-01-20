import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent implements OnInit {
  private user = null;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }

  logout() {
    this.auth.logout();
  }

}
