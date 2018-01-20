import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-row',
  templateUrl: './events-row.component.html',
  styleUrls: ['./events-row.component.css']
})
export class EventsRowComponent implements OnInit {
  @Input() events: any[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
