import { TierListCharacter } from './tier-list-character';

export enum TierListId {
  LEGEND = 'LEGEND',
  RR = 'RR',
  LRR = 'LRR',
  KIZUNA_LRR = 'KIZUNA_LRR',
  PERIOD_LRR = 'PERIOD_LRR',
  COLOSSEUM = 'COLOSSEUM',
  RAID = 'RAID',
  TM = 'TM',
  PVP = 'PVP',
  SUPPORT = 'SUPPORT',
  KIZUNA = 'KIZUNA',
  AMBUSH = 'AMBUSH',
  F2P = 'F2P',
  P2P = 'P2P',
  ALL = 'ALL',
}

export interface TierList {
  id: TierListId;
  frenchName: string;
  englishName: string;
  characters: TierListCharacter[];
}
