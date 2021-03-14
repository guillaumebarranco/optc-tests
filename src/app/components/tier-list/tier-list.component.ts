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
  TierSettingsFrenchComponent,
  TierSettingsEnglishComponent,
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
import { downloadFile } from 'src/app/utils/utils';
import { getFrenchUrl } from 'src/app/utils/url-mapping';

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
  public _basicTiers: string[] = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];

  public hideLastTier = false;
  public showActions = false;
  public showFilters = false;

  public removedCharacters: TierListCharacter[] = [];
  public _filteredCharacters: string[] = [];

  public _filters: TierListFilters = null;

  public _isStreamerMode = false;
  public _isExporting = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog,
    private _storageService: StorageService
  ) {}

  // Init

  public ngOnInit(): void {
    this._filters = getDefaultFilters();

    this._displayNews();

    this._activatedRoute.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this._initTierFromUrlShare(params);
      } else {
        this._initTiers(TierListId.LEGEND);
      }
    });
  }

  public updateTierName(text: string, index: number) {
    this.tiers[index].name = text;
  }

  private _displayNews(): void {
    const text =
      this.language === 'FR'
        ? ` Mise à jour 23/10/2020 !
            Vous pouvez désormais effectuer un double-clic sur un personnage pour avoir
            accès à sa fiche descriptive sur https://optc-db.github.io !
            Les nouveaux personnages des différentes catégories ont été ajoutées (jusqu'à Shanks INT Légende)`
        : ` 2020/10/23 Update !
            You can now double click on a character to see his characteristics on https://optc-db.github.io !
            New characters from different categories have been added (Until Shanks INT Legend)`;

    if (!this._storageService.hasSeenLastMajUpdate()) {
      this._storageService.userSawLastMajUpdate();
      this._snackBar.open(text, 'OK', {
        duration: 20000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }

  private _initTierFromUrlShare(params: Params): void {
    if (params.language === 'FR' || params.language === 'EN') {
      this.language = params.language;
    }

    if (params.name && params.tiers) {
      this.currentTierList = tierLists.find(t => t.id === params.tierListId);

      const sharedTiers: SavedTier[] = JSON.parse(params.tiers);

      this.tiers = this._getTiersFromSharedTiers(sharedTiers);
      this.tierListTitle = params.name;

      this.removedCharacters = this.currentTierList.characters.filter(c => {
        const tiersCharactersIds = this.tiers.map(t =>
          t.characters.map(tch => tch.id)
        );
        return !flatten(tiersCharactersIds).includes(c.id);
      });
    } else if (params.tierListId) {
      this._initTiers(params.tierListId);
    } else {
      this._initTiers(TierListId.LEGEND);
    }
  }

  private _getTiersFromSharedTiers(sharedTiers: SavedTier[]): Tier[] {
    return sharedTiers.map((tier, index) => ({
      ...tier,
      color: tier.color || this.colors[index],
      characters: this.currentTierList.characters.reduce(
        (acc: TierListCharacter[], character: TierListCharacter) =>
          tier.characters.includes(character.id) ? acc.concat(character) : acc,
        []
      ),
    }));
  }

  private _initTiers(tierListId: TierListId): void {
    this.currentTierList = this.tierLists.find(t => t.id === tierListId);

    this._changeTierListName();

    this.removedCharacters = [];

    this.tiers = this._basicTiers.map((x, index) => {
      return {
        name: x,
        color: this.colors[index],
        characters: x === 'F' ? [...this.currentTierList.characters] : [],
      };
    });
  }

  // Tier List Updates

  private _changeTierListName(): void {
    if (this.language === 'FR') {
      this.tierListTitle = `Tier List des ${this.currentTierList.frenchName}`;
    } else if (this.language === 'EN') {
      this.tierListTitle = `${this.currentTierList.englishName} Tier List`;
    }
  }

  public _switchTierList(tierListId: TierListId): void {
    window.history.replaceState(null, null, `?tierListId=${tierListId}`);
    this._initTiers(tierListId);
    this._filtersCharactersList();
  }

  public drop(event: any): void {
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

  // Tier List Actions

  public _onLoadTierList(savedTierList: SavedTierList): void {
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
            this._isLastTier(tier) &&
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
        color: tier.color || this.colors[index],
      };
    });

    this.removedCharacters = savedTierList.removedCharacters
      ? this.currentTierList.characters.filter(c =>
          savedTierList.removedCharacters.includes(c.id)
        )
      : [];

    this._snackBar.open(`Votre Tier List a bien été chargée !`, null, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  public _onExportTierList(removeLastTier: boolean): void {
    window.scrollTo(0, 0);

    this._isExporting = true;

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
            this._isExporting = false;
          }, 100);
        }
      );
    }, 500);
  }

  public _onExportAllTierLists(): void {
    const allSavedTierLists = this._storageService.getSavedTierLists();
    downloadFile('tierslists.json', JSON.stringify(allSavedTierLists));
  }

  private _filtersCharactersList(): void {
    const filteredCharacters = filtersCharactersList(
      this.currentTierList,
      this._filters
    );
    this._filteredCharacters = [...filteredCharacters];
  }

  // Tiers Actions

  public removeCharacterFromTier(
    tier: Tier,
    characterToRemove: TierListCharacter
  ): boolean {
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
  ): boolean {
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

  public getTierStyle(index: number): any {
    return {
      'background-color': this.colors[index],
    };
  }

  public _onSaveTierList(): void {
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
      this._dialog
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
    const tiers = this.tiers.map((tier, index) => {
      return {
        ...tier,
        color: tier.color || this.colors[index],
      };
    });

    this._storageService
      .saveTierList(
        this.currentTierList.id,
        this.tierListTitle,
        tiers,
        this.removedCharacters
      )
      .then(() => {
        this._snackBar.open(`Votre Tier List a bien été sauvegardée !`, null, {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      });
  }

  public _onOpenTierSettings(tier: Tier): void {
    const component =
      this.language === 'FR'
        ? TierSettingsFrenchComponent
        : TierSettingsEnglishComponent;

    this._dialog
      .open(component, {
        data: {
          tier,
          colors: this.colors,
          language: this.language,
        },
        width: '800px',
      })
      .afterClosed()
      .subscribe((action: string) => {
        if (action) {
          if (action === 'add-tier-before') {
            this.tiers = this.tiers.reduce((accTiers, t) => {
              if (t.name === tier.name) {
                const newTierIndex = this.tiers.length + 1;
                const newTierName = `Tier ${newTierIndex}`;

                accTiers = accTiers.concat({
                  name: newTierName,
                  characters: [],
                  color: '#00bfff',
                });
              }

              return accTiers.concat(t);
            }, []);
          } else if (action === 'add-tier-after') {
            this.tiers = this.tiers.reduce((accTiers, t) => {
              accTiers = accTiers.concat(t);

              if (t.name === tier.name) {
                const newTierIndex = this.tiers.length + 1;
                const newTierName = `Tier ${newTierIndex}`;

                accTiers = accTiers.concat({
                  name: newTierName,
                  characters: [],
                  color: '#00bfff',
                });
              }

              return accTiers;
            }, []);
          } else if (action === 'remove-tier') {
            this.tiers = this.tiers.filter(t => t.name !== tier.name);
          } else if (action.includes('color:')) {
            this.tiers = this.tiers.map(t => {
              if (t.name === tier.name) {
                return {
                  ...t,
                  color: action.split(':')[1],
                };
              }

              return t;
            });
          }
        }
      });
  }

  public _isLastTier(tier) {
    return this.tiers[this.tiers.length - 1].name === tier.name;
  }

  // Characters Settings

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

  public _seeCharacterInformation(characterId: string): void {
    let url = `https://optc-db.github.io/characters/#/view/${characterId}`;

    if (this.language === 'FR') {
      url = getFrenchUrl(characterId);
    }

    window.open(url, '_blank');
  }

  // Tier List Filters

  public _onToggleShowRemovedCharacters(): void {
    this._filters.showRemovedCharacters = !this._filters.showRemovedCharacters;
  }

  public _onToggleHideSixStarsLegendsHavingSixPlusVersion(): void {
    this._filters.hideSixStarsLegendsHavingSixPlusVersion = !this._filters
      .hideSixStarsLegendsHavingSixPlusVersion;

    this._filtersCharactersList();
  }

  public _onToggleShowGlobalOnlyCharacters(): void {
    this._filters.showGlobalOnly = !this._filters.showGlobalOnly;

    this._filtersCharactersList();
  }

  public _onUpdateYearSelection(value: string): void {
    this._filters.selectedYearLegend = value;
    this._filtersCharactersList();
  }

  public _onToggleCharacterTypeDisplay(value: TierListCharacterType): void {
    this._filters.characterTypesDisplay[value] = !this._filters
      .characterTypesDisplay[value];

    this._filtersCharactersList();
  }

  // Global actions

  public changeLanguage(language: string): void {
    this.language = language;
    localStorage.setItem('language', language);
    this._changeTierListName();
  }

  public _toggleActionsButton(): void {
    this.showFilters = false;
    this.showActions = !this.showActions;
  }

  public _toggleFiltersButton(): void {
    this.showActions = false;
    this.showFilters = !this.showFilters;
  }

  public _toggleStreamerMode(): void {
    this._isStreamerMode = !this._isStreamerMode;
  }

  public showInformationsDialog(): void {
    let component;

    if (this.language === 'FR') {
      component = TierListInformationsFrenchComponent;
    } else if (this.language === 'EN') {
      component = TierListInformationsEnglishComponent;
    }

    this._dialog
      .open(component, {
        width: '1000px',
        height: '500px',
      })
      .afterClosed()
      .subscribe();
  }
}
