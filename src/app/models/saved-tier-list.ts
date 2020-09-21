import { Tier } from './tier';

export interface SavedTierList {
  name: string;
  tiers: Tier[];
  removedCharacters: string[];
}
