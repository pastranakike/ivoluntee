import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tags: any[] = ['Fundraising', 'Pets', 'Soccer', 'Science', 'Helping People'];

  constructor() {
   }

  ngOnInit() {
  }

}
