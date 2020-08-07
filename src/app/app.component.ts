import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { dualLegends } from './data/dual-legends';
import { singleLegends } from './data/single-legends';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public legends = singleLegends.concat(dualLegends);
  public legend$: Subject<any> = new Subject();
  public selectedLegendId = null;

  public ngOnInit() {
    const currentLegend =
      localStorage.getItem('selectLegendId') !== null
        ? this.legends.find(
            (l) => l.id === localStorage.getItem('selectLegendId').toString()
          )
        : this.legends[0];

    console.log('currentLegend', currentLegend);

    setTimeout(() => {
      this.legend$.next(currentLegend);
    }, 100);

    this.selectedLegendId = currentLegend.id;
  }

  public getColorFromType(type: string): string {
    switch (type) {
      case 'QCK':
        return 'blue';
      case 'STR':
        return 'red';
      case 'DEX':
        return 'green';
      case 'PSY':
        return 'rgb(240, 195, 0)';
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

  public selectLegend(id: string): void {
    if (this.selectedLegendId !== id) {
      this.legend$.next(this.legends.find((l) => l.name === id));
      this.selectedLegendId = id;
      localStorage.setItem('selectLegendId', id);
      window.location.reload();
    }
  }
}
