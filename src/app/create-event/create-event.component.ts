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
  time = '17:30';
  name = '';
  tags = '';
  date = '01-21-2018';
  duration = 60;
  description = '';

  constructor(private popup: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.popup.getObservable().subscribe((value) => {
      this.show = value;
    });
  }

  discard() {
    this.popup.setPopupVisibility(false);
    this.time = '17:30';
    this.name = '';
    this.tags = '';
    this.date = '01-21-2018';
    this.duration = 60;
    this.description = '';
  }

  sendEvent() {
    const event = {
      latitude: this.longitude,
      longitude: this.latitude,
      time: this.duration * 60000,
      name: this.name,
      tags: this.tags === '' ? [] : this.tags.split(','),
      timestamp: new Date(this.date + ' ' + this.time).getTime(),
      usersAttended: [],
      usersInterested: [],
      description: this.description
    };

    console.log(this.time);
    this.http.createEvent(event).subscribe((value) => {
      console.log(value);
      this.discard();
    });
  }

}
