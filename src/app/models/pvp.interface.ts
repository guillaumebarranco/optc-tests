import {
  CharacterClass,
  CharacterTypeClass,
} from './character-class.interface';

export enum PvpStyle {
  DEF = 'DEF',
  ATK = 'ATK',
  SUPPORT = 'SUPPORT',
}

export enum PvpBuff {
  DEF = 'DEF',
  ATK = 'ATK',
  SPEED = 'SPEED',
  CT_SPEED = 'CT_SPEED',
  HP = 'HP',
}

type PvpTarget = 'ALL' | 'SELF' | CharacterClass | CharacterTypeClass;

interface PvpAttribute {
  value: number;
  targets: PvpTarget[];
  fromTime?: number;
  toTime?: number;
  fromHPPercent?: number;
  toHPPercent?: number;
}

type CapacityAttribute = {
  [key in PvpBuff]?: PvpAttribute;
};

export interface PvpData {
  cost: number;
  style: PvpStyle;
  ct: number;
  specialDescription: string[];
  capacityDescription: string[];
  capacityAttributes: CapacityAttribute[];
}
