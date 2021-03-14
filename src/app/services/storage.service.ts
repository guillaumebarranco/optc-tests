import { SavedTierList } from '../models/saved-tier-list';
import { Tier } from '../models/tier';
import { TierListId } from '../models/tier-list';
import { TierListCharacter } from '../models/tier-list-character';

const TIER_LISTS_KEY = 'tierLists';

const LAST_MAJ_UPDATE = '23_10_2020_MAJ';

export class StorageService {
  public getSavedTierLists(): SavedTierList[] {
    return localStorage.getItem(TIER_LISTS_KEY) !== null
      ? JSON.parse(localStorage.getItem(TIER_LISTS_KEY))
      : [];
  }

  public saveTierList(
    id: TierListId,
    title: string,
    tiers: Tier[],
    removedCharacters: TierListCharacter[]
  ): Promise<any> {
    return new Promise(resolve => {
      const savedTierLists: SavedTierList[] = this.getSavedTierLists();
      const tierListWithSameNameAlreadyExists = savedTierLists.find(
        list => list.name === title
      );

      if (!tierListWithSameNameAlreadyExists) {
        const tierListsUpdated: SavedTierList[] = savedTierLists.concat({
          name: title,
          tiers: tiers.map(tier => {
            return {
              characters: tier.characters.map(c => c.id),
              name: tier.name,
              color: tier.color,
            };
          }),
          removedCharacters: removedCharacters.map(c => c.id),
          tierListId: id,
        });
        localStorage.setItem(TIER_LISTS_KEY, JSON.stringify(tierListsUpdated));
      } else {
        const tierListsUpdated: SavedTierList[] = savedTierLists.map(list => {
          return list.name === title
            ? {
                name: list.name,
                tiers: tiers.map(tier => {
                  return {
                    characters: tier.characters.map(c => c.id),
                    name: tier.name,
                    color: tier.color,
                  };
                }),
                removedCharacters: removedCharacters.map(c => c.id),
                tierListId: id,
              }
            : list;
        });
        localStorage.setItem(TIER_LISTS_KEY, JSON.stringify(tierListsUpdated));
      }

      resolve(null);
    });
  }

  public hasSeenLastMajUpdate(): boolean {
    return localStorage.getItem(LAST_MAJ_UPDATE) !== null;
  }

  public userSawLastMajUpdate(): void {
    localStorage.setItem(LAST_MAJ_UPDATE, 'true');
  }
}
