import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-dashboard-app';

  cards = [
    {
      title: 'Twitter',
      url: 'https://twitter.com/',
      icon: 'twitter',
      description: 'Twitter is a social networking service that enables users to share information and interact with one another.'
    }
  ]
}
