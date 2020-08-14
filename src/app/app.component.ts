import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { dualLegends } from './data/dual-legends';
import { singleLegends } from './data/single-legends';
import { Subject } from 'rxjs';
import { Legend } from './models/legend.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public legends: Legend[] = [];
  public legend$: Subject<any> = new Subject();
  public selectedLegendId = null;
  public selectedLegendOrder = 'color';

  public ngOnInit() {
    this._refreshLegends();

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

  private _refreshLegends() {
    this.legends = this.orderLegends(singleLegends.concat(dualLegends));
  }

  public orderLegends(legends: Legend[]): Legend[] {
    switch (this.selectedLegendOrder) {
      case 'id':
        return legends.sort((a, b) => {
          if (Number(a.id) > Number(b.id)) {
            return 1;
          }
          if (Number(a.id) < Number(b.id)) {
            return -1;
          } else {
            return 0;
          }
        });

      case 'color':
        return legends;

      default:
        return legends;
    }
  }

  public updateOrder(order: string): void {
    this.selectedLegendOrder = order;
    this._refreshLegends();
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
