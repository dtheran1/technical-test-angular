import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  overviews = [
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
