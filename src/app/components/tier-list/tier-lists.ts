import { legends, japLegends } from '../../data/tier-lists/legends';
import {
  legendsSixPlus,
  japLegendsSixPLus,
} from '../../data/tier-lists/legends_sixplus';
import { japLrrs, lrrs } from '../../data/tier-lists/lrr';
import { japPvpLrrs, pvpLrrs } from '../../data/tier-lists/pvp_lrrs';
import { japSoutiens, soutiens } from '../../data/tier-lists/soutiens';
import { colisees, japColisees } from '../../data/tier-lists/colisees';
import { japRaids, raids } from '../../data/tier-lists/raids';
import { japTms, tms } from '../../data/tier-lists/tm';
import { japKizunas, kizunas } from '../../data/tier-lists/kizuna';
import { ambushs, japAmbushs } from '../../data/tier-lists/ambush';
import { TierList, TierListId } from '../../models/tier-list';
import { japRrs, rrs } from '../../data/tier-lists/rr';
import { TierListCharacter } from 'src/app/models/tier-list-character';
import { TierListCharacterType } from 'src/app/models/tier-list-character-type';
import {
  japPeriodsLrrs,
  periodsLrrs,
} from 'src/app/data/tier-lists/periods_lrrs';
import { japKizunaLrrs, kizunaLrrs } from 'src/app/data/tier-lists/kizuna_lrrs';
import { japPvps, pvps } from 'src/app/data/tier-lists/pvp';

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

export const allLegends = [
  ...formatedLegends,
  ...formatedSixPlusLegends,
  ...formatedJapLegends,
  ...formatedJapSixPlusLegends,
];

const formatedRrs = rrs.map(id => ({
  id,
  type: TierListCharacterType.RR,
}));

const formatedJapRrs = japRrs.map(id => ({
  id,
  type: TierListCharacterType.RR,
}));

const formatedLrrs = lrrs.map(id => ({
  id,
  type: TierListCharacterType.LRR,
}));

const formatedJapLrrs = japLrrs.map(id => ({
  id,
  type: TierListCharacterType.LRR,
}));

const formatedPeriodsLrrs = periodsLrrs.map(id => ({
  id,
  type: TierListCharacterType.PERIOD_LRR,
}));

const formatedJapPeriodsLrrs = japPeriodsLrrs.map(id => ({
  id,
  type: TierListCharacterType.PERIOD_LRR,
}));

const formatedKizunaLrrs = kizunaLrrs.map(id => ({
  id,
  type: TierListCharacterType.KIZUNA_LRR,
}));

const formatedJapKizunaLrrs = japKizunaLrrs.map(id => ({
  id,
  type: TierListCharacterType.KIZUNA_LRR,
}));

const formatedColosseums = colisees.map(id => ({
  id,
  type: TierListCharacterType.COLOSSEUM,
}));

const formatedJapColosseums = japColisees.map(id => ({
  id,
  type: TierListCharacterType.COLOSSEUM,
}));

const formatedRaids = raids.map(id => ({
  id,
  type: TierListCharacterType.RAID,
}));

const formatedJapRaids = japRaids.map(id => ({
  id,
  type: TierListCharacterType.RAID,
}));

const formatedTms = tms.map(id => ({
  id,
  type: TierListCharacterType.TM,
}));

const formatedJapTms = japTms.map(id => ({
  id,
  type: TierListCharacterType.TM,
}));

const formatedPvps = pvps.map(id => ({
  id,
  type: TierListCharacterType.PVP_F2P,
}));

const formatedPvpLrrs = pvpLrrs.map(id => ({
  id,
  type: TierListCharacterType.PVP,
}));

const formatedJapPvps = japPvps.map(id => ({
  id,
  type: TierListCharacterType.PVP_F2P,
}));

const formatedJapPvpLrrs = japPvpLrrs.map(id => ({
  id,
  type: TierListCharacterType.PVP,
}));

const formatedSupports = soutiens.map(id => ({
  id,
  type: TierListCharacterType.SUPPORT,
}));

const formatedJapSupports = japSoutiens.map(id => ({
  id,
  type: TierListCharacterType.SUPPORT,
}));

const formatedKizunas = kizunas.map(id => ({
  id,
  type: TierListCharacterType.KIZUNA,
}));

const formatedJapKizunas = japKizunas.map(id => ({
  id,
  type: TierListCharacterType.KIZUNA,
}));

const formatedAmbushes = ambushs.map(id => ({
  id,
  type: TierListCharacterType.AMBUSH,
}));

const formatedJapAmbushes = japAmbushs.map(id => ({
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
  ...formatedPeriodsLrrs,
  ...formatedKizunaLrrs,
  ...formatedPvpLrrs,
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
    id: TierListId.PVP_F2P,
  },
  {
    frenchName: 'Personnages PVP LRR',
    englishName: 'PVP LRR Characters',
    characters: formatedPvpLrrs,
    id: TierListId.PVP,
  },
  {
    frenchName: 'Personnages Kizuna',
    englishName: 'Kizuna Characters',
    characters: formatedKizunas,
    id: TierListId.KIZUNA,
  },
  {
    frenchName: 'Personnages LRR',
    englishName: 'LRR Characters',
    characters: formatedLrrs,
    id: TierListId.LRR,
  },
  {
    frenchName: 'Personnages Kizuna LRR',
    englishName: 'Kizuna LRR Characters',
    characters: formatedKizunaLrrs,
    id: TierListId.KIZUNA_LRR,
  },
  {
    frenchName: 'Personnages LRR (périodes)',
    englishName: 'Periods LRR Characters',
    characters: formatedPeriodsLrrs,
    id: TierListId.PERIOD_LRR,
  },
  {
    frenchName: 'Personnages Spéciaux (soutiens)',
    englishName: 'Special Characters (support)',
    characters: formatedSupports,
    id: TierListId.SUPPORT,
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
      ...formatedPvps,
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
      ...formatedPeriodsLrrs,
      ...formatedKizunaLrrs,
      ...formatedPvpLrrs,
      ...formatedSupports,
      ...allLegends,
    ],
    id: TierListId.P2P,
  },
  {
    frenchName: 'Personnages uniquement sur JPN',
    englishName: 'JPN Characters only',
    characters: [
      ...formatedJapLegends,
      ...formatedJapSixPlusLegends,
      ...formatedJapRrs,
      ...formatedJapTms,
      ...formatedJapColosseums,
      ...formatedJapPvps,
      ...formatedJapKizunas,
      ...formatedJapRaids,
      ...formatedJapLrrs,
      ...formatedJapPeriodsLrrs,
      ...formatedJapKizunaLrrs,
      ...formatedJapPvpLrrs,
      ...formatedJapSupports,
      ...formatedJapAmbushes,
    ],
    id: TierListId.JPN,
  },
  {
    frenchName: 'Personnages au complet',
    englishName: 'All Characters',
    characters: [...combinedAllCategoriesCharacters],
    id: TierListId.ALL,
  },
];
