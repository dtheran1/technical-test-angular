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
      user: '@nathanf',
      followers: '1987',
      icon: 'facebook',
      today: '12'
    },
    {
      user: '@nathanf',
      followers: '1044',
      icon: 'twitter',
      today: '99'
    },
    {
      user: '@realnathanf',
      followers: '11k',
      icon: 'instagram',
      today: '1099'
    },
    {
      user: 'Nathan F.',
      followers: '8239',
      icon: 'youtube',
      today: '144'
    }
  ]
}
