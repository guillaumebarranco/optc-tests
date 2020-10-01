import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tier-list-informations-english',
  templateUrl: './tier-list-informations-english.component.html',
  styleUrls: [
    '../tier-list-informations-french/tier-list-informations-french.component.scss',
  ],
})
export class TierListInformationsEnglishComponent {
  constructor(
    public dialogRef: MatDialogRef<TierListInformationsEnglishComponent>
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
