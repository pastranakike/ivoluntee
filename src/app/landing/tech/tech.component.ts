import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  items: any[] = [];

  constructor() { 
      this.items = [
        {
          name: 'Github',
          description: "GitHub use",
          imageURL: 'https://image.flaticon.com/icons/svg/25/25231.svg',
        },
        {
          name: 'HTML/CSS',
          description: "HTML/CSS use",
          imageURL: 'https://image.freepik.com/free-icon/html-file-with-code-symbol_318-45756.jpg',
        },
        {
          name: 'Visual Studio Code',
          description: "VSU use",
          imageURL: 'http://img13.deviantart.net/cb8e/i/2012/344/9/1/flurry_ios_visual_studio_2012_replacement_icon_by_flakshack-d5nnelp.png',
        },
        {
          name: 'Angular 4',
          description: "Angular 4 use",
          imageURL: 'data:image/png;base64,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',
        },
        {
          name: 'Firebase',
          description: "Firebase use",
          imageURL: "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
        },
        {
          name: 'Python',
          description: "Python use",
          imageURL: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png',
        },
        {
          name: 'PyMongo',
          description: "PyMongo use",
          imageURL: 'http://voidcanvas.com/wp-content/uploads/2015/06/mongodb.png',
        },
        {
          name: 'Flask',
          description: "Flask use",
          imageURL: 'http://www.unixstickers.com/image/data/stickers/flask/Flask-logo.sh.png',
        }
      ]
    }

  ngOnInit() {
  }

}
