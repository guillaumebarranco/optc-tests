import { legends, japLegends } from '../../data/tier-lists/legends';
import {
  legendsSixPlus,
  japLegendsSixPLus,
} from '../../data/tier-lists/legends_sixplus';
import { lrrs } from '../../data/tier-lists/lrr';
import { pvps } from '../../data/tier-lists/pvp';
import { soutiens } from '../../data/tier-lists/soutiens';
import { colisees } from '../../data/tier-lists/colisees';
import { raids } from '../../data/tier-lists/raids';
import { tms } from '../../data/tier-lists/tm';
import { kizunas } from '../../data/tier-lists/kizuna';
import { ambushs } from '../../data/tier-lists/ambush';
import { TierList, TierListId } from '../../models/tier-list';
import { rrs } from '../../data/tier-lists/rr';
import { TierListCharacter } from 'src/app/models/tier-list-character';
import { TierListCharacterType } from 'src/app/models/tier-list-character-type';

const formatedLegends: TierListCharacter[] = legends.map(id => ({
  id,
  type: TierListCharacterType.LEGEND,
}));

const formatedSixPlusLegends = legendsSixPlus.map(id => ({
  id,
  type: TierListCharacterType.SIX_PLUS_LEGEND,
}));

const formatedJapLegends = japLegends.map(id => ({
  id,
  type: TierListCharacterType.JAP_LEGEND,
}));

const formatedJapSixPlusLegends = japLegendsSixPLus.map(id => ({
  id,
  type: TierListCharacterType.JAP_SIX_PLUS_LEGEND,
}));

const allLegends = [
  ...formatedLegends,
  ...formatedSixPlusLegends,
  ...formatedJapLegends,
  ...formatedJapSixPlusLegends,
];

const formatedRrs = rrs.map(id => ({
  id,
  type: TierListCharacterType.RR,
}));

const formatedLrrs = lrrs.map(id => ({
  id,
  type: TierListCharacterType.LRR,
}));

const formatedColosseums = colisees.map(id => ({
  id,
  type: TierListCharacterType.COLOSSEUM,
}));

const formatedRaids = raids.map(id => ({
  id,
  type: TierListCharacterType.RAID,
}));

const formatedTms = tms.map(id => ({
  id,
  type: TierListCharacterType.TM,
}));

const formatedPvps = pvps.map(id => ({
  id,
  type: TierListCharacterType.PVP,
}));

const formatedSupports = soutiens.map(id => ({
  id,
  type: TierListCharacterType.SUPPORT,
}));

const formatedKizunas = kizunas.map(id => ({
  id,
  type: TierListCharacterType.KIZUNA,
}));

const formatedAmbushes = ambushs.map(id => ({
  id,
  type: TierListCharacterType.AMBUSH,
}));

export const combinedAllCategoriesCharacters = [
  ...formatedTms,
  ...formatedColosseums,
  ...formatedRaids,
  ...formatedKizunas,
  ...formatedAmbushes,
  ...formatedRrs,
  ...formatedLrrs,
  ...formatedPvps,
  ...formatedSupports,
  ...allLegends,
];

export const tierLists: TierList[] = [
  {
    frenchName: 'Légendes',
    englishName: 'Legends',
    characters: allLegends,
    id: TierListId.LEGEND,
  },
  {
    frenchName: 'Personnages RR',
    englishName: 'RR Characters',
    characters: formatedRrs,
    id: TierListId.RR,
  },
  {
    frenchName: 'Personnages Colisées',
    englishName: 'Colosseums Characters',
    characters: formatedColosseums,
    id: TierListId.COLOSSEUM,
  },
  {
    frenchName: 'Personnages Raids',
    englishName: 'Raids Characters',
    characters: formatedRaids,
    id: TierListId.RAID,
  },
  {
    frenchName: 'Personnages TM',
    englishName: 'TM Characters',
    characters: formatedTms,
    id: TierListId.TM,
  },
  {
    frenchName: 'Personnages PVP',
    englishName: 'PVP Characters',
    characters: formatedPvps,
    id: TierListId.PVP,
  },
  {
    frenchName: 'Personnages LRR',
    englishName: 'LRR Characters',
    characters: formatedLrrs,
    id: TierListId.LRR,
  },
  {
    frenchName: 'Personnages Spéciaux (soutiens)',
    englishName: 'Special Characters (support)',
    characters: formatedSupports,
    id: TierListId.SUPPORT,
  },
  {
    frenchName: 'Personnages Kizuna',
    englishName: 'Kizuna Characters',
    characters: formatedKizunas,
    id: TierListId.KIZUNA,
  },
  {
    frenchName: 'Personnages Ambush',
    englishName: 'Ambush Characters',
    characters: formatedAmbushes,
    id: TierListId.AMBUSH,
  },
  {
    frenchName: 'Personnages F2P',
    englishName: 'F2P Characters',
    characters: [
      ...formatedTms,
      ...formatedColosseums,
      ...formatedRaids,
      ...formatedKizunas,
      ...formatedAmbushes,
    ],
    id: TierListId.F2P,
  },
  {
    frenchName: 'Personnages Premium',
    englishName: 'Premium Characters',
    characters: [
      ...formatedRrs,
      ...formatedLrrs,
      ...formatedPvps,
      ...formatedSupports,
      ...allLegends,
    ],
    id: TierListId.P2P,
  },
  {
    frenchName: 'Personnages au complet',
    englishName: 'All Characters',
    characters: [...combinedAllCategoriesCharacters],
    id: TierListId.ALL,
  },
];