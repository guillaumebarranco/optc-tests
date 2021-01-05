import {
  japLegends,
  legends,
  legends2015,
  legends2016,
  legends2017,
  legends2018,
  legends2019,
  legends2020,
  sixStarsLegendsWithSixPlusVersion,
} from '../../data/tier-lists/legends';
import {
  japLegendsSixPLus,
  legendsSixPlus,
  legendsSixPlus2017,
  legendsSixPlus2018,
  legendsSixPlus2019,
  legendsSixPlus2020,
} from '../../data/tier-lists/legends_sixplus';
import { TierList, TierListId } from '../../models/tier-list';
import { TierListFilters } from '../../models/tier-list-filters';
import { TierListCharacter } from '../../models/tier-list-character';
import { TierListCharacterType } from '../../models/tier-list-character-type';
import { tms } from 'src/app/data/tier-lists/tm';
import { colisees } from 'src/app/data/tier-lists/colisees';
import { raids } from 'src/app/data/tier-lists/raids';
import { kizunas } from 'src/app/data/tier-lists/kizuna';
import { ambushs } from 'src/app/data/tier-lists/ambush';
import { rrs } from 'src/app/data/tier-lists/rr';
import { lrrs } from 'src/app/data/tier-lists/lrr';
import { soutiens } from 'src/app/data/tier-lists/soutiens';
import { pvpLrrs } from 'src/app/data/tier-lists/pvp_lrrs';
import { kizunaLrrs } from 'src/app/data/tier-lists/kizuna_lrrs';
import { periodsLrrs } from 'src/app/data/tier-lists/periods_lrrs';
import { pvps } from 'src/app/data/tier-lists/pvp';
import { arenas } from 'src/app/data/tier-lists/arenes';
import { specials } from 'src/app/data/tier-lists/special';

export function getCharacterImgPath(character: TierListCharacter): string {
  const basePath = 'assets/characters';

  switch (character.type) {
    case TierListCharacterType.LEGEND:
      return `${basePath}/legend/sixstars/f${character.id}.png`;
    case TierListCharacterType.SIX_PLUS_LEGEND:
      return `${basePath}/legend/sixplus/f${character.id}.png`;
    case TierListCharacterType.JAP_LEGEND:
      return `${basePath}/legend/sixstars/f${character.id}.png`;
    case TierListCharacterType.JAP_SIX_PLUS_LEGEND:
      return `${basePath}/legend/sixplus/f${character.id}.png`;
    case TierListCharacterType.RR:
      return `${basePath}/rr/f${character.id}.png`;
    case TierListCharacterType.LRR:
      return `${basePath}/lrr/f${character.id}.png`;
    case TierListCharacterType.KIZUNA_LRR:
      return `${basePath}/kizuna_lrr/f${character.id}.png`;
    case TierListCharacterType.PERIOD_LRR:
      return `${basePath}/periods_lrr/f${character.id}.png`;
    case TierListCharacterType.COLOSSEUM:
      return `${basePath}/colosseum/f${character.id}.png`;
    case TierListCharacterType.ARENA:
      return `${basePath}/arena/f${character.id}.png`;
    case TierListCharacterType.RAID:
      return `${basePath}/raid/f${character.id}.png`;
    case TierListCharacterType.TM:
      return `${basePath}/tm/f${character.id}.png`;
    case TierListCharacterType.PVP:
      return `${basePath}/pvp/f${character.id}.png`;
    case TierListCharacterType.PVP_F2P:
      return `${basePath}/pvp_f2p/f${character.id}.png`;
    case TierListCharacterType.SUPPORT:
      return `${basePath}/support/f${character.id}.png`;
    case TierListCharacterType.KIZUNA:
      return `${basePath}/kizuna/f${character.id}.png`;
    case TierListCharacterType.AMBUSH:
      return `${basePath}/ambush/f${character.id}.png`;
    case TierListCharacterType.SPECIAL:
      return `${basePath}/special/f${character.id}.png`;
    default:
      return '';
  }
}

export function filtersCharactersList(
  currentTierList: TierList,
  filters: TierListFilters
): string[] {
  let filteredCharacters: string[] = [
    ...currentTierList.characters.map(c => c.id),
  ];

  if (
    currentTierList.id === TierListId.LEGEND ||
    currentTierList.id === TierListId.P2P ||
    currentTierList.id === TierListId.ALL ||
    currentTierList.id === TierListId.JPN
  ) {
    filteredCharacters = filterLegends([...filteredCharacters], filters);
  }

  if (
    currentTierList.id === TierListId.F2P ||
    currentTierList.id === TierListId.P2P ||
    currentTierList.id === TierListId.ALL ||
    currentTierList.id === TierListId.JPN
  ) {
    filteredCharacters = filterCategories([...filteredCharacters], filters);
  }

  if (filters.hideSixStarsLegendsHavingSixPlusVersion) {
    filteredCharacters = filteredCharacters.filter(
      c => !sixStarsLegendsWithSixPlusVersion.includes(c)
    );
  }

  return filteredCharacters;
}

export function getDefaultFilters(): TierListFilters {
  return {
    showSixStarsLegends: true,
    showSixPlusLegends: true,
    selectedYearLegend: 'none',
    showRemovedCharacters: false,
    hideSixStarsLegendsHavingSixPlusVersion: false,
    characterTypesDisplay: {
      [TierListCharacterType.LEGEND]: true,
      [TierListCharacterType.SIX_PLUS_LEGEND]: true,
      [TierListCharacterType.JAP_LEGEND]: true,
      [TierListCharacterType.JAP_SIX_PLUS_LEGEND]: true,
      [TierListCharacterType.RR]: true,
      [TierListCharacterType.LRR]: true,
      [TierListCharacterType.COLOSSEUM]: true,
      [TierListCharacterType.ARENA]: true,
      [TierListCharacterType.RAID]: true,
      [TierListCharacterType.TM]: true,
      [TierListCharacterType.PVP_F2P]: true,
      [TierListCharacterType.PVP]: true,
      [TierListCharacterType.SUPPORT]: true,
      [TierListCharacterType.KIZUNA]: true,
      [TierListCharacterType.AMBUSH]: true,
      [TierListCharacterType.KIZUNA_LRR]: true,
      [TierListCharacterType.PERIOD_LRR]: true,
      [TierListCharacterType.SPECIAL]: true,
    },
  };
}

function filterCategories(
  filteredCharacters: string[],
  filters: TierListFilters
) {
  const categoriesToHide = Object.keys(filters.characterTypesDisplay).filter(
    key => filters.characterTypesDisplay[key] === false
  );

  categoriesToHide.forEach((categoryToHide: TierListCharacterType) => {
    switch (categoryToHide) {
      case TierListCharacterType.TM:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !tms.includes(c)
        );
        break;
      case TierListCharacterType.COLOSSEUM:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !colisees.includes(c)
        );
        break;
      case TierListCharacterType.ARENA:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !arenas.includes(c)
        );
        break;
      case TierListCharacterType.RAID:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !raids.includes(c)
        );
        break;
      case TierListCharacterType.KIZUNA:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !kizunas.includes(c)
        );
        break;
      case TierListCharacterType.PVP_F2P:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !pvps.includes(c)
        );
        break;
      case TierListCharacterType.AMBUSH:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !ambushs.includes(c)
        );
        break;
      case TierListCharacterType.SPECIAL:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !specials.includes(c)
        );
        break;
      case TierListCharacterType.LEGEND:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c =>
            ![
              ...legends,
              ...legendsSixPlus,
              ...japLegends,
              ...japLegendsSixPLus,
            ].includes(c)
        );
        break;
      case TierListCharacterType.RR:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !rrs.includes(c)
        );
        break;
      case TierListCharacterType.LRR:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !lrrs.includes(c)
        );
        break;
      case TierListCharacterType.KIZUNA_LRR:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !kizunaLrrs.includes(c)
        );
        break;
      case TierListCharacterType.PERIOD_LRR:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !periodsLrrs.includes(c)
        );
        break;
      case TierListCharacterType.SUPPORT:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !soutiens.includes(c)
        );
        break;
      case TierListCharacterType.PVP:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !pvpLrrs.includes(c)
        );
        break;
      default:
        filteredCharacters = filteredCharacters;
        break;
    }
  });

  return filteredCharacters;
}

function filterLegends(filteredCharacters: string[], filters: TierListFilters) {
  if (!filters.showSixStarsLegends) {
    filteredCharacters = filteredCharacters.filter(c => !legends.includes(c));
  }

  if (!filters.showSixPlusLegends) {
    filteredCharacters = filteredCharacters.filter(
      c => !legendsSixPlus.includes(c)
    );
  }

  if (filters.selectedYearLegend !== 'none') {
    switch (filters.selectedYearLegend.toString()) {
      case '2015':
        filteredCharacters = filteredCharacters.filter(c =>
          legends2015.includes(c)
        );
        break;
      case '2016':
        filteredCharacters = filteredCharacters.filter(c =>
          legends2016.includes(c)
        );
        break;
      case '2017':
        filteredCharacters = filteredCharacters.filter(c =>
          [...legends2017, ...legendsSixPlus2017].includes(c)
        );
        break;
      case '2018':
        filteredCharacters = filteredCharacters.filter(c =>
          [...legends2018, ...legendsSixPlus2018].includes(c)
        );
        break;
      case '2019':
        filteredCharacters = filteredCharacters.filter(c =>
          [...legends2019, ...legendsSixPlus2019].includes(c)
        );
        break;
      case '2020':
        filteredCharacters = filteredCharacters.filter(c =>
          [...legends2020, ...legendsSixPlus2020].includes(c)
        );
        break;

      default:
        break;
    }
  }

  return filteredCharacters;
}
