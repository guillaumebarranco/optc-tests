import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-tier-list-french',
  templateUrl: './remove-tier-list-french.component.html',
  styleUrls: ['./remove-tier-list-french.component.scss'],
})
export class RemoveTierListFrenchComponent {
  public _tierListTitle: string;

  constructor(
    public dialogRef: MatDialogRef<RemoveTierListFrenchComponent>,
    @Inject(MAT_DIALOG_DATA) public tierListTitle: string
  ) {
    this._tierListTitle = tierListTitle;
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
