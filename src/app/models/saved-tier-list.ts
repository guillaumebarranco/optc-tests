import { TierListId } from './tier-list';

export interface SavedTier {
  name: string;
  characters: string[];
}

export interface SavedTierList {
  name: string;
  tiers: SavedTier[];
  tierListId: TierListId;
  removedCharacters: string[];
}
