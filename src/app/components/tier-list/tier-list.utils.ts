import {
  japLegends,
  legends,
  legends2015,
  legends2016,
  legends2017,
  legends2018,
  legends2019,
  legends2020,
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
import { pvps } from 'src/app/data/tier-lists/pvp';
import { kizunaLrrs } from 'src/app/data/tier-lists/kizuna_lrrs';
import { periodsLrrs } from 'src/app/data/tier-lists/periods_lrrs';

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
    case TierListCharacterType.RAID:
      return `${basePath}/raid/f${character.id}.png`;
    case TierListCharacterType.TM:
      return `${basePath}/tm/f${character.id}.png`;
    case TierListCharacterType.PVP:
      return `${basePath}/pvp/f${character.id}.png`;
    case TierListCharacterType.SUPPORT:
      return `${basePath}/support/f${character.id}.png`;
    case TierListCharacterType.KIZUNA:
      return `${basePath}/kizuna/f${character.id}.png`;
    case TierListCharacterType.AMBUSH:
      return `${basePath}/ambush/f${character.id}.png`;
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
    currentTierList.id === TierListId.ALL
  ) {
    filteredCharacters = filterLegends([...filteredCharacters], filters);
  }

  if (
    currentTierList.id === TierListId.F2P ||
    currentTierList.id === TierListId.P2P ||
    currentTierList.id === TierListId.ALL
  ) {
    filteredCharacters = filterCategories([...filteredCharacters], filters);
  }

  return filteredCharacters;
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
      case TierListCharacterType.AMBUSH:
        filteredCharacters = filteredCharacters = filteredCharacters.filter(
          c => !ambushs.includes(c)
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
          c => !pvps.includes(c)
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
