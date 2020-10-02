import { Tier } from './tier';
import { TierListId } from './tier-list';
import { TierListCharacter } from './tier-list-character';

export interface SavedTierList {
  name: string;
  tiers: Tier[];
  tierListId: TierListId;
  removedCharacters: TierListCharacter[];
}
