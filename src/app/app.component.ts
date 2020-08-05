import { Component } from '@angular/core';

import { jsonLegends } from './legends';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public legend = jsonLegends[2];
}
