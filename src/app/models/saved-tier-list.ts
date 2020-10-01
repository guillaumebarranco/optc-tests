import { Tier } from './tier';
import { TierListCharacter } from './tier-list-character';

export interface SavedTierList {
  name: string;
  tiers: Tier[];
  removedCharacters: TierListCharacter[];
}
