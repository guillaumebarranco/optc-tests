import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-tier-list-english',
  templateUrl: './save-tier-list-english.component.html',
  styleUrls: ['./save-tier-list-english.component.scss'],
})
export class SaveTierListEnglishComponent {
  constructor(public dialogRef: MatDialogRef<SaveTierListEnglishComponent>) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
