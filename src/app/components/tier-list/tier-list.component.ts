import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params } from '@angular/router';

import * as html2canvas from 'html2canvas';

import {
  TierListInformationsEnglishComponent,
  TierListInformationsFrenchComponent,
  SaveTierListFrenchComponent,
  SaveTierListEnglishComponent,
} from '../dialogs';
import { TierList, TierListId } from '../../models/tier-list';
import { Tier } from '../../models/tier';
import { SavedTier, SavedTierList } from '../../models/saved-tier-list';
import { tierLists } from './tier-lists';
import { TierListCharacter } from '../../models/tier-list-character';
import {
  filtersCharactersList,
  getCharacterImgPath,
  getDefaultFilters,
} from './tier-list.utils';
import { TierListFilters } from '../../models/tier-list-filters';
import { TierListCharacterType } from '../../models/tier-list-character-type';
import { StorageService } from '../../services';

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
  public currentTierList: TierList;
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

  public removedCharacters: TierListCharacter[] = [];
  public _filteredCharacters: string[] = [];

  public _filters: TierListFilters = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _storageService: StorageService
  ) {}

  public ngOnInit() {
    this._filters = getDefaultFilters();

    this.activatedRoute.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this._initTierFromUrlShare(params);
      } else {
        this._initTiers(TierListId.LEGEND);
      }
    });
  }

  private _initTierFromUrlShare(params: Params): void {
    if (params.language === 'FR' || params.language === 'EN') {
      this.language = params.language;
    }

    if (params.name && params.tiers) {
      this.currentTierList = tierLists.find(t => t.id === params.tierListId);

      const sharedTiers: SavedTier[] = JSON.parse(params.tiers);

      this.tiers = sharedTiers.map(tier => ({
        ...tier,
        characters: this.currentTierList.characters.reduce(
          (acc: TierListCharacter[], character: TierListCharacter) =>
            tier.characters.includes(character.id)
              ? acc.concat(character)
              : acc,
          []
        ),
      }));

      this.removedCharacters = this.currentTierList.characters.filter(c => {
        const tiersCharactersIds = this.tiers.map(t =>
          t.characters.map(tch => tch.id)
        );
        return !flatten(tiersCharactersIds).includes(c.id);
      });

      this.tierListTitle = params.name;
    } else {
      this._initTiers(TierListId.LEGEND);
    }
  }

  private _initTiers(tierListId: TierListId): void {
    this.currentTierList = this.tierLists.find(t => t.id === tierListId);

    this._changeTierListName();

    this.removedCharacters = [];

    this.tiers = this.basicTiers.map(x => {
      return {
        name: x,
        characters: x === 'F' ? [...this.currentTierList.characters] : [],
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

  public switchTierList(tierListId: TierListId) {
    this._initTiers(tierListId);
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

  public onLoadTierList(savedTierList: SavedTierList) {
    this.tierListTitle = savedTierList.name;

    this.currentTierList = tierLists.find(
      t => t.id === savedTierList.tierListId
    );

    const alreadyAddedCharacters = [];

    this.tiers = savedTierList.tiers.map((tier, index) => {
      const tierCharacters: TierListCharacter[] = this.currentTierList.characters.reduce(
        (acc, character) => {
          if (tier.characters.includes(character.id)) {
            alreadyAddedCharacters.push(character.id);
            return acc.concat(character);
          }

          if (
            index === 6 &&
            !tier.characters.includes(character.id) &&
            !savedTierList.removedCharacters.includes(character.id) &&
            !alreadyAddedCharacters.includes(character.id)
          ) {
            return acc.concat(character);
          }

          return acc;
        },
        []
      );

      return {
        characters: tierCharacters,
        name: tier.name,
      };
    });

    this.removedCharacters = savedTierList.removedCharacters
      ? this.currentTierList.characters.filter(c =>
          savedTierList.removedCharacters.includes(c.id)
        )
      : [];

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

  public _onExportAllTierLists(): void {
    const allSavedTierLists = this._storageService.getSavedTierLists();
    this._download('tierslists.json', JSON.stringify(allSavedTierLists));
  }

  public _download(filename: string, text: string) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  public onToggleShowRemovedCharacters() {
    this._filters.showRemovedCharacters = !this._filters.showRemovedCharacters;
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

  public _toggleActionsButton(): void {
    this.showFilters = false;
    this.showActions = !this.showActions;
  }

  public _toggleFiltersButton(): void {
    this.showActions = false;
    this.showFilters = !this.showFilters;
  }

  public _onSaveTierList() {
    let component;

    if (this.language === 'FR') {
      component = SaveTierListFrenchComponent;
    } else if (this.language === 'EN') {
      component = SaveTierListEnglishComponent;
    }

    const tierListAlreadySaved = this._storageService
      .getSavedTierLists()
      .find(t => t.name === this.tierListTitle);

    if (tierListAlreadySaved) {
      this.dialog
        .open(component)
        .afterClosed()
        .subscribe(validateSave => {
          if (validateSave) {
            this._saveTierList();
          }
        });
    } else {
      this._saveTierList();
    }
  }

  private _saveTierList(): void {
    this._storageService
      .saveTierList(
        this.currentTierList.id,
        this.tierListTitle,
        this.tiers,
        this.removedCharacters
      )
      .then(() => {
        this.snackBar.open(`Votre Tier List a bien été sauvegardée !`, null, {
          duration: 5000,
        });
      });
  }
}
