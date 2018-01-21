import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  show = false;
  lat = 29.6475473;
  lng = -82.3436095;
  time;
  name: string;
  tags: string;
  date;

  constructor(private popup: PopupService) { }

  ngOnInit() {
    this.popup.getObservable().subscribe((value) => {
      this.show = value.visible;
    });
  }

  discard() {
    this.popup.setPopupVisibility(false);
  }

}
