import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event: any;
  @Input() small = false;
  state = 'nothing';

  constructor(private http: HttpService, private auth: AuthService) { }

  ngOnInit() {
  }

  updateInterest() {
    this.http.updateInterested(this.event.eventID);
    this.state = 'interested';
    const user = this.auth.getUser();
    this.event.usersInterested.push({userID: user.uid, userName: user.displayName});
  }

  updateCheckin() {
    this.http.updateCheckIn(this.event.eventID);
    this.state = 'attended';
    const user = this.auth.getUser();
    this.event.usersAttended.push({userID: user.uid, userName: user.displayName});
  }

}
