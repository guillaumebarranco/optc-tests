import {
  japLegends,
  legends,
  legends2015,
  legends2016,
  legends2017,
  legends2018,
  legends2019,
  legends2020,
  legends2021,
  sixStarsLegendsWithSixPlusVersion,
} from '../../data/tier-lists/legends';
import {
  japLegendsSixPLus,
  legendsSixPlus,
  legendsSixPlus2017,
  legendsSixPlus2018,
  legendsSixPlus2019,
  legendsSixPlus2020,
  legendsSixPlus2021,
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
import { japOnlyAllCategoriesCharacters } from './tier-lists';
import { tmLrrs } from 'src/app/data/tier-lists/tm_lrr';

const tierCharacterTypeImgPath: { [key in TierListCharacterType]: string } = {
  [TierListCharacterType.LEGEND]: `/legend/sixstars/`,
  [TierListCharacterType.SIX_PLUS_LEGEND]: `/legend/sixplus/`,
  [TierListCharacterType.JAP_LEGEND]: `/legend/sixstars/`,
  [TierListCharacterType.JAP_SIX_PLUS_LEGEND]: `/legend/sixplus/`,
  [TierListCharacterType.RR]: `/rr/`,
  [TierListCharacterType.LRR]: `/lrr/`,
  [TierListCharacterType.KIZUNA_LRR]: `/kizuna_lrr/`,
  [TierListCharacterType.PERIOD_LRR]: `/periods_lrr/`,
  [TierListCharacterType.COLOSSEUM]: `/colosseum/`,
  [TierListCharacterType.ARENA]: `/arena/`,
  [TierListCharacterType.RAID]: `/raid/`,
  [TierListCharacterType.TM]: `/tm/`,
  [TierListCharacterType.TM_LRR]: `/tm_lrr/`,
  [TierListCharacterType.PVP]: `/pvp/`,
  [TierListCharacterType.PVP_F2P]: `/pvp_f2p/`,
  [TierListCharacterType.SUPPORT]: `/support/`,
  [TierListCharacterType.KIZUNA]: `/kizuna/`,
  [TierListCharacterType.AMBUSH]: `/ambush/`,
  [TierListCharacterType.SPECIAL]: `/special/`,
};

const tierCharacterTypeCharactersList: {
  [key in TierListCharacterType]: string[];
} = {
  [TierListCharacterType.LEGEND]: [
    ...legends,
    ...legendsSixPlus,
    ...japLegends,
    ...japLegendsSixPLus,
  ],
  [TierListCharacterType.SIX_PLUS_LEGEND]: [
    ...legendsSixPlus,
    ...japLegendsSixPLus,
  ],
  [TierListCharacterType.JAP_LEGEND]: [...japLegends, ...japLegendsSixPLus],
  [TierListCharacterType.JAP_SIX_PLUS_LEGEND]: [...japLegendsSixPLus],
  [TierListCharacterType.RR]: rrs,
  [TierListCharacterType.LRR]: lrrs,
  [TierListCharacterType.KIZUNA_LRR]: kizunaLrrs,
  [TierListCharacterType.PERIOD_LRR]: periodsLrrs,
  [TierListCharacterType.COLOSSEUM]: colisees,
  [TierListCharacterType.ARENA]: arenas,
  [TierListCharacterType.RAID]: raids,
  [TierListCharacterType.TM]: tms,
  [TierListCharacterType.TM_LRR]: tmLrrs,
  [TierListCharacterType.PVP]: pvpLrrs,
  [TierListCharacterType.PVP_F2P]: pvps,
  [TierListCharacterType.SUPPORT]: soutiens,
  [TierListCharacterType.KIZUNA]: kizunas,
  [TierListCharacterType.AMBUSH]: ambushs,
  [TierListCharacterType.SPECIAL]: specials,
};

export function getCharacterImgPath(character: TierListCharacter): string {
  const basePath = 'assets/characters';

  return `${basePath}${tierCharacterTypeImgPath[character.type]}/f${
    character.id
  }.png`;
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
    console.log(
      'sixStarsLegendsWithSixPlusVersion',
      sixStarsLegendsWithSixPlusVersion
    );

    console.log('legends2018', legends2018);

    filteredCharacters = filteredCharacters.filter(
      c => !sixStarsLegendsWithSixPlusVersion.includes(c)
    );
  }

  if (filters.showGlobalOnly) {
    filteredCharacters = filteredCharacters.filter(
      c => !japOnlyAllCategoriesCharacters.map(j => j.id).includes(c)
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
    hideSixStarsLegendsHavingSixPlusVersion: true,
    showGlobalOnly: false,
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
      [TierListCharacterType.TM_LRR]: true,
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
    return (filteredCharacters = filteredCharacters =
      filteredCharacters.filter(
        c => !tierCharacterTypeCharactersList[categoryToHide].includes(c)
      ));
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
      case '2021':
        filteredCharacters = filteredCharacters.filter(c =>
          [
            ...legends2021,
            ...legendsSixPlus2021,
            ...japLegends,
            ...japLegendsSixPLus,
          ].includes(c)
        );
        break;

      default:
        break;
    }
  }

  return filteredCharacters;
}
