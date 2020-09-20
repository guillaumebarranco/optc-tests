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
import { kizunas } from 'src/app/data/tier-lists/kizuna';
import { ambushs } from 'src/app/data/tier-lists/ambush';
import { ActivatedRoute } from '@angular/router';

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
      name: 'Légendes',
      characters: legends,
    },
    {
      name: 'Personnages RR',
      characters: rrs,
    },
    {
      name: 'Personnages Colisées',
      characters: colisees,
    },
    {
      name: 'Personnages Raids',
      characters: raids,
    },
    {
      name: 'Personnages TM',
      characters: tms,
    },
    {
      name: 'Personnages LRR',
      characters: lrrs,
    },
    {
      name: 'Personnages Spéciaux (soutiens)',
      characters: soutiens,
    },
    {
      name: 'Personnages Kizuna',
      characters: kizunas,
    },
    {
      name: 'Personnages Ambush',
      characters: ambushs,
    },
    {
      name: 'Tout les personnages F2P',
      characters: [...tms, ...colisees, ...raids, ...kizunas, ...ambushs],
    },
    {
      name: 'Tous les personnages Premium',
      characters: [...rrs, ...lrrs, ...legends],
    },
    {
      name: 'Tous les personnages',
      characters: [
        ...tms,
        ...colisees,
        ...raids,
        ...kizunas,
        ...ambushs,
        ...rrs,
        ...lrrs,
        ...legends,
      ],
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

  public hideLastTier = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('params', params);

      if (params.name && params.tiers) {
        console.log('params.name', params.name);
        console.log('params.tiers', params.tiers);

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

    this.tiers = this.basicTiers.map((x) => {
      return {
        name: x,
        characters: x === 'F' ? [...this.allCharacters] : [],
      };
    });
  }

  public copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
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

  public share() {
    const baseUrl = 'http://optc.webarranco.fr';
    // const baseUrl = 'http://localhost:4200';
    const url = `${baseUrl}?name=${this.tierListTitle}&tiers=${JSON.stringify(
      this.tiers
    )}`;

    this.copyToClipboard(url);
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

  public downloadImage(removeLastTier: boolean) {
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

  public getTierStyle(index: number) {
    return {
      'background-color': this.colors[index],
    };
  }
}
