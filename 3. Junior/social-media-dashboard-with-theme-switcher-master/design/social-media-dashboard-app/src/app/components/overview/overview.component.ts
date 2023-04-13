import { Component, Input } from '@angular/core';
import { Overview } from 'src/app/type.ts/UserType';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() overviews: Array<Overview> = []
}
