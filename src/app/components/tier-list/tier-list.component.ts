import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { TierListInformationsComponent } from '../tier-list-informations/tier-list-informations.component';
import { TierList } from 'src/app/models/tier-list';
import { Tier } from 'src/app/models/tier';
import { SavedTierList } from 'src/app/models/saved-tier-list';
import { tierLists } from './tier-lists';
import {
  japLegends,
  legends,
  legends2015,
  legends2016,
  legends2017,
  legends2018,
  legends2019,
  legends2020,
} from 'src/app/data/tier-lists/legends';
import { legendsSixPlus } from 'src/app/data/tier-lists/legends_sixplus';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  public tierLists: TierList[] = tierLists;
  public allCharacters = [];
  public tierListTitle = '';
  public tiers: Tier[] = [];
  public colors = [
    'rgb(255, 127, 127)',
    'rgb(255, 191, 127)',
    'rgb(255, 223, 127)',
    '#FFFF7F',
    'rgb(191, 255, 127)',
    'rgb(127, 255, 127)',
    'rgb(127, 255, 255)',
  ];
  public basicTiers: string[] = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];

  public hideLastTier = false;
  public showActions = false;
  public showFilters = false;

  public showRemovedCharacters = false;
  public removedCharacters: string[] = [];

  public _filters = {
    showSixStarsLegends: true,
    showSixPlusLegends: true,
    selectedYearLegend: 'none',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.name && params.tiers) {
        this.tiers = JSON.parse(params.tiers);
        this.tierListTitle = params.name;
      } else {
        this._initTiers(0);
      }
    });
  }

  private _initTiers(index: number): void {
    this.allCharacters = this.tierLists[index].characters;
    this.tierListTitle = `Tier List des ${this.tierLists[index].name}`;
    this.removedCharacters = [];

    this.tiers = this.basicTiers.map((x) => {
      return {
        name: x,
        characters: x === 'F' ? [...this.allCharacters] : [],
      };
    });
  }

  public switchTierList(tierIndex: number) {
    this._initTiers(tierIndex);
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public showInformationsDialog(): void {
    this.dialog.open(TierListInformationsComponent).afterClosed().subscribe();
  }

  public getSavedTierLists(): SavedTierList[] {
    return localStorage.getItem('tierLists') !== null
      ? JSON.parse(localStorage.getItem('tierLists'))
      : [];
  }

  public onLoadTierList(savedTierList: SavedTierList) {
    this.tierListTitle = savedTierList.name;
    this.tiers = savedTierList.tiers;
    this.removedCharacters = savedTierList.removedCharacters || [];

    this.snackBar.open(`Votre Tier List a bien été chargée !`, null, {
      duration: 5000,
    });
  }

  public onExportTierList(removeLastTier: boolean) {
    if (removeLastTier) {
      this.hideLastTier = true;
    }

    setTimeout(() => {
      const transformToCanvas: any = html2canvas;

      transformToCanvas(this.screen.nativeElement, { useCORS: true }).then(
        (canvas) => {
          this.canvas.nativeElement.src = canvas.toDataURL();
          this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
          this.downloadLink.nativeElement.download = `${this.tierListTitle}.png`;
          this.downloadLink.nativeElement.click();

          setTimeout(() => {
            this.hideLastTier = false;
          }, 100);
        }
      );
    }, 500);
  }

  public onToggleShowRemovedCharacters(value: boolean) {
    this.showRemovedCharacters = value;
  }

  public removeCharacterFromTier(tier: Tier, characterToRemove: string) {
    const foundTier = this.tiers.find((t) => t.name === tier.name);

    const updatedTier = {
      ...foundTier,
      characters: foundTier.characters.filter((c) => c !== characterToRemove),
    };

    this.tiers = this.tiers
      .filter((t) => t.name !== tier.name)
      .concat(updatedTier);

    this.removedCharacters.push(characterToRemove);

    return false;
  }

  public putCharacterBackInTier(tier: Tier, characterToRePutInTier: string) {
    const foundTier = this.tiers.find((t) => t.name === tier.name);

    const updatedTier = {
      ...foundTier,
      characters: foundTier.characters.concat(characterToRePutInTier),
    };

    this.tiers = this.tiers
      .filter((t) => t.name !== tier.name)
      .concat(updatedTier);

    this.removedCharacters = this.removedCharacters.filter(
      (c) => c !== characterToRePutInTier
    );

    return false;
  }

  public getTierStyle(index: number) {
    return {
      'background-color': this.colors[index],
    };
  }

  public _filteredCharactersList(characters: string[]): string[] {
    let filteredCharacters = [...characters];

    if (!this._filters.showSixStarsLegends) {
      filteredCharacters = filteredCharacters.filter(
        (c) => !legends.includes(c)
      );
    }

    if (!this._filters.showSixPlusLegends) {
      filteredCharacters = filteredCharacters.filter(
        (c) => !legendsSixPlus.includes(c)
      );
    }

    if (this._filters.selectedYearLegend !== 'none') {
      switch (this._filters.selectedYearLegend.toString()) {
        case '2015':
          filteredCharacters = filteredCharacters.filter((c) =>
            legends2015.includes(c)
          );
          break;
        case '2016':
          filteredCharacters = filteredCharacters.filter((c) =>
            legends2016.includes(c)
          );
          break;
        case '2017':
          filteredCharacters = filteredCharacters.filter((c) =>
            legends2017.includes(c)
          );
          break;
        case '2018':
          filteredCharacters = filteredCharacters.filter((c) =>
            legends2018.includes(c)
          );
          break;
        case '2019':
          filteredCharacters = filteredCharacters.filter((c) =>
            legends2019.includes(c)
          );
          break;
        case '2020':
          filteredCharacters = filteredCharacters.filter((c) =>
            legends2020.includes(c)
          );
          break;
        case 'jap':
          filteredCharacters = filteredCharacters.filter((c) =>
            japLegends.includes(c)
          );
          break;

        default:
          break;
      }
    }

    return filteredCharacters;
  }
}
