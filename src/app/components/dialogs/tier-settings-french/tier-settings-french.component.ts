import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tier } from 'src/app/models/tier';

@Component({
  selector: 'app-tier-settings-french',
  templateUrl: './tier-settings-french.component.html',
  styleUrls: ['./tier-settings-french.component.scss'],
})
export class TierSettingsFrenchComponent {
  public _tier: Tier;
  public _language: string;
  public _colors: string[];

  constructor(
    public dialogRef: MatDialogRef<TierSettingsFrenchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this._tier = data.tier;
    this._language = data.language;
    this._colors = data.colors;
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
