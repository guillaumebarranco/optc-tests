import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-tier-list-english',
  templateUrl: './remove-tier-list-english.component.html',
  styleUrls: ['./remove-tier-list-english.component.scss'],
})
export class RemoveTierListEnglishComponent {
  public _tierListTitle: string;

  constructor(
    public dialogRef: MatDialogRef<RemoveTierListEnglishComponent>,
    @Inject(MAT_DIALOG_DATA) public tierListTitle: string
  ) {
    this._tierListTitle = tierListTitle;
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
