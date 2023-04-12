import { Component } from '@angular/core';
import { User } from './type.ts/UserType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'social-media-dashboard-app';

  users: User[] = [
    {
      userName: '@nathanf',
      followers: '1987',
      icon: '../../../assets/images/icon-facebook.svg',
      red: 'facebook',
      description: 'followers',
      arrow:"../../../assets/images/icon-up.svg",
      today: '12'
    },
    {
      userName: '@nathanf',
      followers: '1044',
      icon: '../../../assets/images/icon-twitter.svg',
      red: 'twitter',
      description: 'followers',
      arrow:"../../../assets/images/icon-up.svg",
      today: '99'
    },
    {
      userName: '@realnathanf',
      followers: '11k',
      icon: '../../../assets/images/icon-instagram.svg',
      arrow:"../../../assets/images/icon-up.svg",
      red: 'instagram',
      description: 'followers',
      today: '1099'
    },
    {
      userName: 'Nathan F.',
      followers: '8239',
      icon: '../../../assets/images/icon-youtube.svg',
      arrow:"../../../assets/images/icon-down.svg",
      red: 'youtube',
      description: 'subscribers',
      today: '144'
    }
  ]
}
