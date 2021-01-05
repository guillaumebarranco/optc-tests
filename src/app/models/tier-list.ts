import { TierListCharacter } from './tier-list-character';

export enum TierListId {
  LEGEND = 'LEGEND',
  RR = 'RR',
  LRR = 'LRR',
  KIZUNA_LRR = 'KIZUNA_LRR',
  PERIOD_LRR = 'PERIOD_LRR',
  COLOSSEUM = 'COLOSSEUM',
  ARENA = 'ARENA',
  RAID = 'RAID',
  TM = 'TM',
  PVP = 'PVP',
  PVP_F2P = 'PVP_F2P', // Called with _F2P because PVP already existed, so to not break saved Tier Lists...
  SUPPORT = 'SUPPORT',
  KIZUNA = 'KIZUNA',
  AMBUSH = 'AMBUSH',
  SPECIAL = 'SPECIAL',
  F2P = 'F2P',
  P2P = 'P2P',
  JPN = 'JPN',
  ALL = 'ALL',
}

export interface TierList {
  id: TierListId;
  frenchName: string;
  englishName: string;
  characters: TierListCharacter[];
}
