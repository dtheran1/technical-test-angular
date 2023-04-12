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
      icon: '../../../assets/images/icon-facebook.svg',
      red: 'facebook',
      arrow:"../../../assets/images/icon-up.svg",
      today: '12'
    },
    {
      user: '@nathanf',
      followers: '1044',
      icon: '../../../assets/images/icon-twitter.svg',
      red: 'twitter',
      arrow:"../../../assets/images/icon-up.svg",
      today: '99'
    },
    {
      user: '@realnathanf',
      followers: '11k',
      icon: '../../../assets/images/icon-instagram.svg',
      arrow:"../../../assets/images/icon-up.svg",
      red: 'instagram',
      today: '1099'
    },
    {
      user: 'Nathan F.',
      followers: '8239',
      icon: '../../../assets/images/icon-youtube.svg',
      arrow:"../../../assets/images/icon-down.svg",
      red: 'youtube',
      today: '144'
    }
  ]
}
