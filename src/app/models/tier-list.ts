import { TierListCharacter } from './tier-list-character';

export interface TierList {
  frenchName: string;
  englishName: string;
  characters: TierListCharacter[];
}
