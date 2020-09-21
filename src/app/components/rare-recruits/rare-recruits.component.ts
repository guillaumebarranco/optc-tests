import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Inject,
} from '@angular/core';

import * as html2canvas from 'html2canvas';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
    const params = `?name=${this.tierListTitle}&tiers=${JSON.stringify(
      this.tiers
    )}`;

    this.copyToClipboard(baseUrl + encodeURI(params));

    this.snackBar.open(
      `L'URL de partage de votre tier list a été copiée dans votre presse-papiers !`,
      null,
      {
        duration: 5000,
      }
    );
  }

  public showInformationsDialog(): void {
    const dialogRef = this.dialog.open(InformationsDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
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

    this.snackBar.open(`Votre Tier List a bien été sauvegardée !`, null, {
      duration: 5000,
    });
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

    this.snackBar.open(`Votre Tier List a bien été chargée !`, null, {
      duration: 5000,
    });
  }

  public selectTierListToRemove(savedTierList: SavedTierList) {
    const tierListsUpdated = this.loadedTierLists.filter(
      (list) => list.name !== savedTierList.name
    );

    localStorage.setItem('tierLists', JSON.stringify(tierListsUpdated));

    this.removingTierList = false;
    this.loadedTierLists = [];

    this.snackBar.open(`Votre Tier List a bien été supprimée !`, null, {
      duration: 5000,
    });
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

@Component({
  selector: 'app-informations-dialog',
  template: `
    <div>
      Bienvenue sur OPTC TierList Maker <br />
      <br />
      Ici vous pouvez réaliser vos différentes Tier List pour One Piece Treasure
      Cruise par catégorie. <br />
      Voici la liste des fonctionnalités : <br />
      <br />

      <ul>
        <li>Le titre de la Tier list est modifiable</li>
        <li>Les noms des différents Tiers sont modifiables</li>
        <li>
          Uniquement dans le dernier Tier, vous pouvez effectuer un clic droit
          sur un personnage pour le supprimer de la Tier List. Vous pouvez
          ré-afficher les personnages supprimés via un bouton d'action. Les
          personnages peuvent ensuite être remis dans la tier list avec un
          nouveau clic droit.
        </li>
        <li>
          Vous pouvez sauvegarder votre Tier List à tout moment pour la
          reprendre plus tard ou simplement la garder. Votre Tier List est
          stockée dans votre propre navigateur via le Local Storage.
        </li>
        <li>
          Vous pouvez sauvegarder autant de Tier Lists que vous le souhaitez
        </li>
        <li>
          Vous pouvez charger une Tier List précédemment sauvegardée. Cela
          effacera votre Tier List en cours si elle n'a pas été sauvegardée au
          préalable.
        </li>
        <li>Vous pouvez supprimer une Tier List précédemment sauvegardée</li>
        <li>
          Vous pouvez partager une Tier List via une simple URL. Cliquez sur le
          bouton de partage et l'URL contenant votre Tier List sera copiée dans
          votre presse-papiers (faites CTRL+V ensuite)
        </li>
        <li>Vous pouvez exporter votre Tier List sous forme d'une image</li>
        <li>
          Vous pouvez exporter votre Tier List sous forme d'une image tout en
          choisissant de cacher le dernier Tier
        </li>
      </ul>
    </div>
  `,
})
export class InformationsDialogComponent {
  constructor(public dialogRef: MatDialogRef<InformationsDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
