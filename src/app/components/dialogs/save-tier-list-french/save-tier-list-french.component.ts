import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-tier-list-french',
  templateUrl: './save-tier-list-french.component.html',
  styleUrls: ['./save-tier-list-french.component.scss'],
})
export class SaveTierListFrenchComponent {
  constructor(public dialogRef: MatDialogRef<SaveTierListFrenchComponent>) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
