import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

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
import { ActivatedRoute, Router } from '@angular/router';
import { TierListInformationsComponent } from '../tier-list-informations/tier-list-informations.component';
import { TierList } from 'src/app/models/tier-list';
import { Tier } from 'src/app/models/tier';
import { SavedTierList } from 'src/app/models/saved-tier-list';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
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
      name: 'Personnages F2P',
      characters: [...tms, ...colisees, ...raids, ...kizunas, ...ambushs],
    },
    {
      name: 'Personnages Premium',
      characters: [...rrs, ...lrrs, ...legends],
    },
    {
      name: 'Personnages au complet',
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

  public hideLastTier = false;
  public showActions = false;

  public showRemovedCharacters = false;
  public removedCharacters: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('window.location.hostname', window.location.hostname);

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
    const dialogRef = this.dialog.open(TierListInformationsComponent, {
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe();
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
}
