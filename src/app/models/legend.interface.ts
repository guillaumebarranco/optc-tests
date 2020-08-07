interface LegendArtwork {
  fiveStars: string;
  sixStars: string;
  sixPlusStars: string;
}

interface Support {
  hasSupportEffect: boolean;
  supportedCharacters: string[];
  levels: string[];
}

interface PotentialAbility {
  type: string;
  icon: string;
  effects: string[];
}

interface CharacterStat {
  initial: number;
  afterLimitBreak: number;
  afterLimitBreakPlus: number;
}

interface SpecialTurns {
  initial: number;
  max: number;
  gainWithLimitBreak: number;
  gainWithLimitBreakPlus: number;
}

interface SpecialWithStage {
  specialTurns: SpecialTurns;
  special: string;
}

interface Picture {
  fiveStarsPicture: string;
  sixStarsPicture: string;
  sixPlusStarsPicture: string;
}

interface LegendData {
  story: string;
  type: string;
  classes: string[];
  combo: number;
  hp: CharacterStat;
  atk: CharacterStat;
  rcv: CharacterStat;
  captainAbility: string;
  captainAbilityAfterLimitBreakPlus: string;
  captainAbilityAdditionnalInformation: string;
  captainAction: string;
  captainActionTurns: number;
  specialWithStages: SpecialWithStage[];
  special: string;
  specialTurns: SpecialTurns;
  picture: Picture;
  crewmateAbilities: CrewmateAbility[];
}

interface CrewmateAbility {
  ability: string;
  needLimitBreak: boolean;
}

interface DualLegendForm {
  name: string;
  story: string;
  type: string;
  classes: string[];
  combo: number;
  hp: CharacterStat;
  atk: CharacterStat;
  rcv: CharacterStat;
  captainAbility: string;
  captainAbilityAfterLimitBreakPlus: string;
  captainAbilityAdditionnalInformation: string;
  ownSpecial: string;
  picture: Picture;
  crewmateAbilities: CrewmateAbility[];
}

interface DualLegendData {
  hasOnlyOneSpecial: boolean;
  hasDifferentCrewmateAbility1: boolean;
  hasDifferentCrewmateAbility2: boolean;
  specialWithStages: SpecialWithStage[];
  special: string;
  specialTurns: SpecialTurns;
  switchEffect: string;
  firstForm: DualLegendForm;
  secondForm: DualLegendForm;
  finalForm: DualLegendForm;
}

export interface Legend {
  id: string;
  title: string;
  name: string;
  isDual: boolean;
  artwork: LegendArtwork;
  dualCharacterData: DualLegendData;
  singleCharacterData: LegendData;
  sockets: number;
  cost: number;
  hasLimitBreak: boolean;
  hasLimitBreakPlus: boolean;
  potentialAbilities: PotentialAbility[];
  evolvers: string[];
  support: Support;
  batch: string;
}
