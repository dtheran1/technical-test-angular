import { Component, Input } from '@angular/core';
import { User } from 'src/app/type.ts/UserType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() users: Array<User> = [];
}
