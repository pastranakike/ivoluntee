import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  show = false;
  latitude = 29.6475473;
  longitude = -82.3436095;
  time = 0;
  name = '';
  tags = '';
  date = new Date();
  duration: number;
  description = '';

  constructor(private popup: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.popup.getObservable().subscribe((value) => {
      this.show = value;
    });
  }

  discard() {
    this.popup.setPopupVisibility(false);
  }

  sendEvent() {
    const event = {
      latitude: this.longitude,
      longitude: this.latitude,
      time: this.duration * 60000,
      name: this.name,
      tags: this.tags.split(','),
      timestamp: new Date(this.date).getDate(),
      usersAttended: [],
      usersInterested: [],
      description: this.description
    };

    this.http.createEvent(event);
  }

}
