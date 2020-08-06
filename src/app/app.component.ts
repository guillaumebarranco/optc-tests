import { Component } from '@angular/core';

import { jsonLegends } from './legends';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public legend = jsonLegends[3] || JSON.parse(localStorage.getItem('legend'));

  public color(type: string) {
    switch (type) {
      case 'QCK':
        return {
          color: 'blue',
        };
      case 'STR':
        return {
          color: 'red',
        };
      case 'DEX':
        return {
          color: 'green',
        };
      case 'PSY':
        return {
          color: 'yellow',
        };
      case 'INT':
        return {
          color: 'purple',
        };
      default:
        return {
          color: 'black',
        };
    }
  }
}
