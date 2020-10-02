import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TierListId } from 'src/app/models/tier-list';
import { TierListCharacterType } from 'src/app/models/tier-list-character-type';
import { TierListFilters } from 'src/app/models/tier-list-filters';

@Component({
  selector: 'app-tier-list-filters',
  templateUrl: './tier-list-filters.component.html',
  styleUrls: ['./tier-list-filters.component.scss'],
})
export class TierListFiltersComponent {
  @Output() public updateYearSelection = new EventEmitter<string>();
  @Output() public toggleCharacterTypeDisplay = new EventEmitter<
    TierListCharacterType
  >();

  @Input() public tierListId: TierListId;
  @Input() public language: string;
  @Input() public filters: TierListFilters;

  public _tierListIdEnum = TierListId;
  public _tierListCharacterType = TierListCharacterType;

  public _onUpdateYearSelection(selectedYear: string) {
    this.updateYearSelection.emit(selectedYear);
  }

  public _onToggleCharacterTypeDisplay(type: TierListCharacterType) {
    this.toggleCharacterTypeDisplay.emit(type);
  }
}
