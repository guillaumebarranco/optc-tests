import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tier-list-informations',
  templateUrl: './tier-list-informations.component.html',
})
export class TierListInformationsComponent {
  constructor(public dialogRef: MatDialogRef<TierListInformationsComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
