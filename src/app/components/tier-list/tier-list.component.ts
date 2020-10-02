import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

import { TierListInformationsFrenchComponent } from '../tier-list-informations-french/tier-list-informations-french.component';
import { TierList } from '../../models/tier-list';
import { Tier } from '../../models/tier';
import { SavedTierList } from '../../models/saved-tier-list';
import { combinedAllCategoriesCharacters, tierLists } from './tier-lists';
import { TierListInformationsEnglishComponent } from '../tier-list-informations-english/tier-list-informations-english.component';
import { TierListCharacter } from '../../models/tier-list-character';
import { filtersCharactersList, getCharacterImgPath } from './tier-list.utils';
import { TierListFilters } from '../../models/tier-list-filters';
import { TierListCharacterType } from 'src/app/models/tier-list-character-type';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
  @ViewChild('screen') public screen: ElementRef;
  @ViewChild('canvas') public canvas: ElementRef;
  @ViewChild('downloadLink') public downloadLink: ElementRef;

  public language =
    localStorage.getItem('language') !== null
      ? localStorage.getItem('language')
      : 'FR';

  public tierLists: TierList[] = tierLists;
  public allCharacters = [];
  public currentTierList: TierList;
  public _currentTierIndex = 0;
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
  public removedCharacters: TierListCharacter[] = [];
  public _filteredCharacters: string[] = [];

  public _filters: TierListFilters = {
    showSixStarsLegends: true,
    showSixPlusLegends: true,
    selectedYearLegend: 'none',
    characterTypesDisplay: {
      [TierListCharacterType.LEGEND]: true,
      [TierListCharacterType.SIX_PLUS_LEGEND]: true,
      [TierListCharacterType.JAP_LEGEND]: true,
      [TierListCharacterType.JAP_SIX_PLUS_LEGEND]: true,
      [TierListCharacterType.RR]: true,
      [TierListCharacterType.LRR]: true,
      [TierListCharacterType.COLOSSEUM]: true,
      [TierListCharacterType.RAID]: true,
      [TierListCharacterType.TM]: true,
      [TierListCharacterType.PVP]: true,
      [TierListCharacterType.SUPPORT]: true,
      [TierListCharacterType.KIZUNA]: true,
      [TierListCharacterType.AMBUSH]: true,
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.language === 'FR' || params.language === 'EN') {
        this.language = params.language;
      }

      if (params.name && params.tiers) {
        const sharedTiers = JSON.parse(params.tiers);

        this.tiers = sharedTiers.map(tier => ({
          ...tier,
          characters: tier.characters.map(c => {
            return combinedAllCategoriesCharacters.find(cc => cc.id === c);
          }),
        }));

        this.tierListTitle = params.name;
        this._currentTierIndex = -1;
      } else {
        this._initTiers(0);
      }
    });
  }

  private _initTiers(index: number): void {
    this.allCharacters = this.tierLists[index].characters;

    this.currentTierList = this.tierLists[index];

    this._changeTierListName();

    this.removedCharacters = [];

    this.tiers = this.basicTiers.map(x => {
      return {
        name: x,
        characters: x === 'F' ? [...this.allCharacters] : [],
      };
    });
  }

  private _changeTierListName(): void {
    if (this.language === 'FR') {
      this.tierListTitle = `Tier List des ${this.currentTierList.frenchName}`;
    } else if (this.language === 'EN') {
      this.tierListTitle = `${this.currentTierList.englishName} Tier List`;
    }
  }

  public switchTierList(tierIndex: number) {
    this._currentTierIndex = tierIndex;
    this._initTiers(tierIndex);
  }

  public drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousContainer.data.indexOf(event.item.data),
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousContainer.data.indexOf(event.item.data),
        event.currentIndex
      );
    }
  }

  public showInformationsDialog(): void {
    let component;

    if (this.language === 'FR') {
      component = TierListInformationsFrenchComponent;
    } else if (this.language === 'EN') {
      component = TierListInformationsEnglishComponent;
    }

    this.dialog
      .open(component, {
        width: '1000px',
        height: '500px',
      })
      .afterClosed()
      .subscribe();
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
    window.scrollTo(0, 0);

    if (removeLastTier) {
      this.hideLastTier = true;
    }

    setTimeout(() => {
      const transformToCanvas: any = html2canvas;

      transformToCanvas(this.screen.nativeElement, { useCORS: true }).then(
        canvas => {
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

  public removeCharacterFromTier(
    tier: Tier,
    characterToRemove: TierListCharacter
  ) {
    const foundTier = this.tiers.find(t => t.name === tier.name);

    const updatedTier = {
      ...foundTier,
      characters: foundTier.characters.filter(
        c => c.id !== characterToRemove.id
      ),
    };

    this.tiers = this.tiers
      .filter(t => t.name !== tier.name)
      .concat(updatedTier);

    this.removedCharacters.push(characterToRemove);

    return false;
  }

  public putCharacterBackInTier(
    tier: Tier,
    characterToRePutInTier: TierListCharacter
  ) {
    const foundTier = this.tiers.find(t => t.name === tier.name);

    const updatedTier: Tier = {
      ...foundTier,
      characters: foundTier.characters.concat(characterToRePutInTier),
    };

    this.tiers = this.tiers
      .filter(t => t.name !== tier.name)
      .concat(updatedTier);

    this.removedCharacters = this.removedCharacters.filter(
      c => c.id !== characterToRePutInTier.id
    );

    return false;
  }

  public getTierStyle(index: number) {
    return {
      'background-color': this.colors[index],
    };
  }

  public filtersCharactersList(): void {
    const filteredCharacters = filtersCharactersList(
      this.currentTierList,
      this._filters
    );
    this._filteredCharacters = [...filteredCharacters];
  }

  public _onUpdateYearSelection(value: string): void {
    this._filters.selectedYearLegend = value;
    this.filtersCharactersList();
  }

  public _onToggleCharacterTypeDisplay(value: TierListCharacterType): void {
    this._filters.characterTypesDisplay[value] = !this._filters
      .characterTypesDisplay[value];

    this.filtersCharactersList();
  }

  public changeLanguage(language: string): void {
    this.language = language;
    localStorage.setItem('language', language);
    this._changeTierListName();
  }

  public _getCharacterImgPath(character: TierListCharacter): string {
    return getCharacterImgPath(character);
  }

  public _getImgStyleFormFiltering(characterId: string): any {
    const shouldBeHidden =
      !this._filteredCharacters.includes(characterId) &&
      this._filteredCharacters.length > 0;

    if (shouldBeHidden) {
      return {
        display: 'none',
      };
    } else {
      return {};
    }
  }
}
