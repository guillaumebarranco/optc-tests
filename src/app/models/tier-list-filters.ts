import { TierListCharacterType } from './tier-list-character-type';

type TierListCharacterTypeFilter = {
  [key in TierListCharacterType]: boolean;
};

export interface TierListFilters {
  showSixStarsLegends: boolean;
  showSixPlusLegends: boolean;
  selectedYearLegend: string;
  showRemovedCharacters: boolean;
  characterTypesDisplay: TierListCharacterTypeFilter;
  hideSixStarsLegendsHavingSixPlusVersion: boolean;
}
