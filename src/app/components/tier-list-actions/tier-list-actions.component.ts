import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SavedTierList } from 'src/app/models/saved-tier-list';
import { Tier } from 'src/app/models/tier';
import { TierListCharacter } from 'src/app/models/tier-list-character';

@Component({
  selector: 'app-tier-list-actions',
  templateUrl: './tier-list-actions.component.html',
  styleUrls: ['./tier-list-actions.component.scss'],
})
export class TierListActionsComponent {
  @Output() public loadTierList = new EventEmitter<any>();
  @Output() public exportTierList = new EventEmitter<any>();
  @Output() public toggleShowRemovedCharacters = new EventEmitter<any>();

  @Input() public tierListTitle;
  @Input() public tiers: Tier[];
  @Input() public removedCharacters: TierListCharacter[];
  @Input() public showRemovedCharacters = false;
  @Input() public language: string;

  public loadingTierList = false;
  public loadedTierLists: SavedTierList[] = [];

  public removingTierList = false;

  constructor(private snackBar: MatSnackBar) {}

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

  public share() {
    const baseUrl = 'http://optc.webarranco.fr';
    // const baseUrl = 'http://localhost:4200';
    const params = `?name=${encodeURI(
      this.tierListTitle
    )}&tiers=${JSON.stringify(
      this.tiers.map(tier => ({
        name: tier.name,
        characters: tier.characters.map(c => c.id),
      }))
    )}`;

    this.copyToClipboard(baseUrl + params);

    let message;

    if (this.language === 'FR') {
      message = `L'URL de partage de votre tier list a été copiée dans votre presse-papiers !`;
    } else if (this.language === 'EN') {
      message = `URL for sharing your tier list has been copy-pasted in your clipboard !`;
    }

    this.snackBar.open(message, null, {
      duration: 5000,
    });
  }

  public getSavedTierLists(): SavedTierList[] {
    return localStorage.getItem('tierLists') !== null
      ? JSON.parse(localStorage.getItem('tierLists'))
      : [];
  }

  public onSaveTierList() {
    const savedTierLists: SavedTierList[] = this.getSavedTierLists();
    const tierListWithSameNameAlreadyExists = savedTierLists.find(
      list => list.name === this.tierListTitle
    );

    if (!tierListWithSameNameAlreadyExists) {
      const tierListsUpdated: SavedTierList[] = savedTierLists.concat({
        name: this.tierListTitle,
        tiers: this.tiers,
        removedCharacters: this.removedCharacters,
      });
      localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));
    } else {
      const tierListsUpdated: SavedTierList[] = savedTierLists.map(list => {
        return list.name === this.tierListTitle
          ? {
              name: list.name,
              tiers: this.tiers,
              removedCharacters: this.removedCharacters,
            }
          : list;
      });
      localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));
    }

    this.snackBar.open(`Votre Tier List a bien été sauvegardée !`, null, {
      duration: 5000,
    });
  }

  public onLoadTierList() {
    if (!this.loadingTierList) {
      this.loadingTierList = true;
      this.loadedTierLists = this.getSavedTierLists();
    } else {
      this.loadingTierList = false;
      this.loadedTierLists = [];
    }
  }

  public onRemoveTierList() {
    if (!this.removingTierList) {
      this.removingTierList = true;
      this.loadedTierLists = this.getSavedTierLists();
    } else {
      this.removingTierList = false;
      this.loadedTierLists = [];
    }
  }

  public onToggleShowRemovedCharacters() {
    this.toggleShowRemovedCharacters.emit(!this.showRemovedCharacters);
  }

  public onExportTierList(showLastTier: boolean) {
    this.exportTierList.emit(showLastTier);
  }

  public selectTierListToLoad(savedTierList: SavedTierList) {
    this.loadTierList.emit(savedTierList);

    this.loadingTierList = false;
    this.loadedTierLists = [];
  }

  public selectTierListToRemove(savedTierList: SavedTierList) {
    const tierListsUpdated = this.loadedTierLists.filter(
      list => list.name !== savedTierList.name
    );

    localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));

    this.removingTierList = false;
    this.loadedTierLists = [];

    this.snackBar.open(`Votre Tier List a bien été supprimée !`, null, {
      duration: 5000,
    });
  }
}
