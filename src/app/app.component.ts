import { Component } from '@angular/core';

import { jsonLegends } from './legends';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public legends = jsonLegends;

  public legend = this.legends[0];

  public getColorFromType(type: string): string {
    switch (type) {
      case 'QCK':
        return 'blue';
      case 'STR':
        return 'red';
      case 'DEX':
        return 'green';
      case 'PSY':
        return 'yellow';
      case 'INT':
        return 'purple';
      default:
        return 'black';
    }
  }

  public color(type: string) {
    return {
      color: this.getColorFromType(type),
    };
  }

  public gradient(type1: string, type2: string) {
    return {
      background: `linear-gradient(to right,${this.getColorFromType(
        type1
      )}, ${this.getColorFromType(type2)})`,
    };
  }

  public selectLegend(legendName: string): void {
    this.legend = this.legends.find((l) => l.name === legendName);
  }
}
