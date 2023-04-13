import { Component } from '@angular/core';
import { Overview, User } from './type.ts/UserType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  overviews: Overview[] = [
    {
      title: 'Page Views',
      views: '87',
      percentageOfViews: '3',
      red: '../../../assets/images/icon-facebook.svg',
      arrow:"../../../assets/images/icon-up.svg",
    },
    {
      title: 'Likes',
      views: '52',
      percentageOfViews: '2',
      red: '../../../assets/images/icon-facebook.svg',
      arrow:"../../../assets/images/icon-down.svg",
    },
    {
      title: 'Likes',
      views: '5462',
      percentageOfViews: '2257',
      red: '../../../assets/images/icon-instagram.svg',
      arrow:"../../../assets/images/icon-up.svg",
    },
    {
      title: 'Profile Views',
      views: '52k',
      percentageOfViews: '1375',
      red: '../../../assets/images/icon-instagram.svg',
      arrow:"../../../assets/images/icon-up.svg",
    },
    {
      title: 'Retweets',
      views: '117',
      percentageOfViews: '303',
      red: '../../../assets/images/icon-twitter.svg',
      arrow:"../../../assets/images/icon-up.svg",
    },
    {
      title: 'Likes',
      views: '507',
      percentageOfViews: '553',
      red: '../../../assets/images/icon-twitter.svg',
      arrow:"../../../assets/images/icon-up.svg",
    },
    {
      title: 'Likes',
      views: '107',
      percentageOfViews: '19',
      red: '../../../assets/images/icon-youtube.svg',
      arrow:"../../../assets/images/icon-down.svg",
    },
    {
      title: 'Total Views',
      views: '1407',
      percentageOfViews: '12',
      red: '../../../assets/images/icon-youtube.svg',
      arrow:"../../../assets/images/icon-down.svg",
    },
  ]
}
