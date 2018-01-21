import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any[] = [];
  orgs: any[] = [];
  quotes: string[] = ['../../../assets/MLKQuote.png',
    './../../assets/VOL1.png',
    './../../assets/VOL2.png',
    './../../assets/VOL3.png',
    './../../assets/VOL4.png',
    './../../assets/VOL5.png',
    './../../assets/VOL6.png',
    './../../assets/VOL7.png',
  ];
  name = '';

  constructor(private auth: AuthService, private popup: PopupService) {
    for (let i = 0; i < 3; i++) {
      this.events.push({
        eventID: '5',
        name: 'Hug puppies with the homeless',
        description: 'Come to the street to hug puppies with the homeless. Free ice-cream for the homeless, not for you!',
        tags: ['puppies', 'homeless'],
        usersAttended: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        usersInterested: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        },
        {
          name: 'Alen Polakof',
          userID: '3'
        }],
        timestamp: new Date().getDate() + 1000000 * i,
        longitude: -31.543,
        latitude: 56.574,
        duration: 3600000,
        imageURL: 'http://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development-300x200.jpg',
        creatorName: 'Luis Pastrana',
        creatorID: '1',
        volunteersNeeded: 13
      });
      this.events.push({
        eventID: '6',
        name: 'Play soccer with handicapped',
        description: 'We\'re looking for really bad soccer players that could play against gradnparents in wheelchairs. ' +
        'Bring your own ball.',
        tags: ['soccer', 'elderly'],
        usersAttended: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        usersInterested: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        timestamp: new Date().getDate() + 1000000 * i,
        longitude: -35.543,
        latitude: -40.574,
        duration: 4800000,
        imageURL: 'http://www.haitianphotos.com/spa/_files/spa_album/pic_3604.jpg',
        creatorName: 'Matias Szylkowski',
        creatorID: '1',
        volunteersNeeded: 20
      });
      this.orgs.push({
        name: 'ForTheKids',
        description: 'An Atlanta based foundation with the only purpose of guarantee a better future for the future of our nation',
        type: 'Child Support',
        orgsID: '7',
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61cVLQVvG9L.jpg',
        subscribers: 10004
      });
      this.orgs.push({
        name: 'Green Peace',
        description: 'Greenpeace will never stop fighting for a greener, healthier world for our oceans,' +
        ' forests, food, climate, and democracy.',
        type: 'Enviromental NGO',
        orgsID: '8',
        imageURL: 'https://www.greenpeace.org.uk/wp-content/themes/greenpeaceuk/static/img/default-thumbnail.jpg',
        subscribers: 438221
      });
    }
    this.auth.getAuthState().subscribe(
      (user) => {
        this.name = user.displayName;
      }
    );
  }

  ngOnInit() {
  }

  showPopup() {
    this.popup.setPopupVisibility(true);
  }

}
