import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  lat: number = 29.6475473;
  lng: number = -82.3436095;
  constructor() { }

  ngOnInit() {
  }

}
