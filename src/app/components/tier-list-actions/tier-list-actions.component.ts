import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import shortenUrl from '@kulkul/tinyurl-client';

import { SavedTierList } from '../../models/saved-tier-list';
import { Tier } from '../../models/tier';
import { TierListId } from '../../models/tier-list';
import { TierListCharacter } from '../../models/tier-list-character';
import { StorageService } from '../../services';
import { RemoveTierListFrenchComponent } from '../dialogs';
import { copyToClipboard } from '../../utils/utils';

@Component({
  selector: 'app-tier-list-actions',
  templateUrl: './tier-list-actions.component.html',
  styleUrls: ['./tier-list-actions.component.scss'],
})
export class TierListActionsComponent {
  @Output() public loadTierList = new EventEmitter<any>();
  @Output() public exportTierList = new EventEmitter<any>();
  @Output() public exportAllTierLists = new EventEmitter<void>();

  @Input() public tierListTitle;
  @Input() public tiers: Tier[];
  @Input() public currentTierListId: TierListId;
  @Input() public removedCharacters: TierListCharacter[];
  @Input() public showRemovedCharacters = false;
  @Input() public language: string;

  public loadingTierList = false;
  public loadedTierLists: SavedTierList[] = [];

  public removingTierList = false;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _storageService: StorageService
  ) {}

  public copyToClipboard(val: string) {
    copyToClipboard(val);
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
    )}&tierListId=${this.currentTierListId}`;

    const url = baseUrl + params;

    shortenUrl(url).then(result => {
      console.log('result', result);
      this.copyToClipboard(url);

      let message;

      if (this.language === 'FR') {
        message = `L'URL de partage de votre tier list a été copiée dans votre presse-papiers !`;
      } else if (this.language === 'EN') {
        message = `URL for sharing your tier list has been copy-pasted in your clipboard !`;
      }

      this.snackBar.open(message, null, {
        duration: 5000,
      });
    });
  }

  public onLoadTierList() {
    if (!this.loadingTierList) {
      this.loadingTierList = true;
      this.removingTierList = false;
      this.loadedTierLists = this._storageService.getSavedTierLists();
    } else {
      this.loadingTierList = false;
      this.loadedTierLists = [];
    }
  }

  public onRemoveTierList() {
    if (!this.removingTierList) {
      this.removingTierList = true;
      this.loadingTierList = false;
      this.loadedTierLists = this._storageService.getSavedTierLists();
    } else {
      this.removingTierList = false;
      this.loadedTierLists = [];
    }
  }

  public onExportTierList(showLastTier: boolean) {
    this.exportTierList.emit(showLastTier);
  }

  public onExportAllTierLists(): void {
    this.exportAllTierLists.emit();
  }

  public selectTierListToLoad(savedTierList: SavedTierList) {
    this.loadTierList.emit(savedTierList);

    this.loadingTierList = false;
    this.loadedTierLists = [];
  }

  public selectTierListToRemove(savedTierList: SavedTierList) {
    let component;

    if (this.language === 'FR') {
      component = RemoveTierListFrenchComponent;
    } else if (this.language === 'EN') {
      // component = RemoveTierListEnglishComponent;
    }
    this.dialog
      .open(component)
      .afterClosed()
      .subscribe(validateRemove => {
        if (validateRemove) {
          this._removeTierList(savedTierList);
        }
      });
  }

  private _removeTierList(savedTierList: SavedTierList) {
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
