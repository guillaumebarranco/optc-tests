import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tier-list-informations-french',
  templateUrl: './tier-list-informations-french.component.html',
  styleUrls: ['./tier-list-informations-french.component.scss'],
})
export class TierListInformationsFrenchComponent {
  constructor(
    public dialogRef: MatDialogRef<TierListInformationsFrenchComponent>
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
