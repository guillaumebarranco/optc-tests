import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { rrs } from '../../data/tier-lists/rr';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { legends } from 'src/app/data/tier-lists/legends';
import { lrrs } from 'src/app/data/tier-lists/lrr';
import { soutiens } from 'src/app/data/tier-lists/soutiens';
import { colisees } from 'src/app/data/tier-lists/colisees';
import { raids } from 'src/app/data/tier-lists/raids';
import { tms } from 'src/app/data/tier-lists/tm';

interface SavedTierList {
  name: string;
  tiers: Tier[];
}

interface TierList {
  name: string;
  characters: string[];
}

interface Tier {
  name: string;
  characters: string[];
}

@Component({
  selector: 'app-rrs',
  templateUrl: './rare-recruits.component.html',
  styleUrls: ['./rare-recruits.component.scss'],
})
export class RareRecruitsComponent implements OnInit {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  public tierLists: TierList[] = [
    {
      name: 'Tier List des Légendes',
      characters: legends,
    },
    {
      name: 'Tier List des Personnages RR',
      characters: rrs,
    },
    {
      name: 'Tier List des Personnages LRR',
      characters: lrrs,
    },
    {
      name: 'Tier List des Personnages Spéciaux (soutiens)',
      characters: soutiens,
    },
    {
      name: 'Tier List des Personnages Colisées',
      characters: colisees,
    },
    {
      name: 'Tier List des Personnages Raids',
      characters: raids,
    },
    {
      name: 'Tier List des Personnages TM',
      characters: tms,
    },
  ];
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

  public loadingTierList = false;
  public loadedTierLists: SavedTierList[] = [];

  public removingTierList = false;

  public ngOnInit() {
    this._initTiers(0);
  }

  private _initTiers(index: number): void {
    this.allCharacters = this.tierLists[index].characters;
    this.tierListTitle = this.tierLists[index].name;

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

  public getSavedTierLists(): SavedTierList[] {
    return localStorage.getItem('tierLists') !== null
      ? JSON.parse(localStorage.getItem('tierLists'))
      : [];
  }

  public saveTierList() {
    const savedTierLists: SavedTierList[] = this.getSavedTierLists();
    const tierListWithSameNameAlreadyExists = savedTierLists.find(
      (list) => list.name === this.tierListTitle
    );

    if (!tierListWithSameNameAlreadyExists) {
      const tierListsUpdated: SavedTierList[] = savedTierLists.concat({
        name: this.tierListTitle,
        tiers: this.tiers,
      });
      localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));
    } else {
      const tierListsUpdated: SavedTierList[] = savedTierLists.map((list) => {
        return list.name === this.tierListTitle
          ? {
              name: list.name,
              tiers: this.tiers,
            }
          : list;
      });
      localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));
    }
  }

  public loadTierList() {
    if (!this.loadingTierList) {
      this.loadingTierList = true;
      this.loadedTierLists = this.getSavedTierLists();
    } else {
      this.loadingTierList = false;
      this.loadedTierLists = [];
    }
  }

  public removeTierList() {
    if (!this.removingTierList) {
      this.removingTierList = true;
      this.loadedTierLists = this.getSavedTierLists();
    } else {
      this.removingTierList = false;
      this.loadedTierLists = [];
    }
  }

  public selectTierListToLoad(savedTierList: SavedTierList) {
    this.tierListTitle = savedTierList.name;
    this.tiers = savedTierList.tiers;

    this.loadingTierList = false;
    this.loadedTierLists = [];
  }

  public selectTierListToRemove(savedTierList: SavedTierList) {
    const tierListsUpdated = this.loadedTierLists.filter(
      (list) => list.name !== savedTierList.name
    );

    localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));

    this.removingTierList = false;
    this.loadedTierLists = [];
  }

  public downloadImage() {
    const transformToCanvas: any = html2canvas;
    transformToCanvas(this.screen.nativeElement, { useCORS: true }).then(
      (canvas) => {
        this.canvas.nativeElement.src = canvas.toDataURL();
        this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
        this.downloadLink.nativeElement.download = `${this.tierListTitle}.png`;
        this.downloadLink.nativeElement.click();
      }
    );
  }

  public getTierStyle(index: number) {
    return {
      'background-color': this.colors[index],
    };
  }
}
