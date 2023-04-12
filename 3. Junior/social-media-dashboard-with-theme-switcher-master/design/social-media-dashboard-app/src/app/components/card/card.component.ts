import { Component, Input } from '@angular/core';

interface Card {
  user: string,
  followers: string,
  icon: string,
  red: string,
  arrow: string,
  today: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cards: Array<Card> = [];
}
