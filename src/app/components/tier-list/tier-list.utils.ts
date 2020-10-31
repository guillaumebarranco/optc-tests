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

export function getDefaultFilters(): TierListFilters {
  return {
    showSixStarsLegends: true,
    showSixPlusLegends: true,
    selectedYearLegend: 'none',
    showRemovedCharacters: false,
    characterTypesDisplay: {
      [TierListCharacterType.LEGEND]: true,
      [TierListCharacterType.SIX_PLUS_LEGEND]: true,
      [TierListCharacterType.JAP_LEGEND]: true,
      [TierListCharacterType.JAP_SIX_PLUS_LEGEND]: true,
      [TierListCharacterType.RR]: true,
      [TierListCharacterType.LRR]: true,
      [TierListCharacterType.COLOSSEUM]: true,
      [TierListCharacterType.RAID]: true,
      [TierListCharacterType.TM]: true,
      [TierListCharacterType.PVP]: true,
      [TierListCharacterType.SUPPORT]: true,
      [TierListCharacterType.KIZUNA]: true,
      [TierListCharacterType.AMBUSH]: true,
      [TierListCharacterType.KIZUNA_LRR]: true,
      [TierListCharacterType.PERIOD_LRR]: true,
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

export function getFrenchLegendUrl(characterId: string) {
  switch (characterId) {
    case '0261':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html';
    case '0367':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html';
    case '0416':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%201.html';
    case '0459':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html';
    case '0530':
      return 'https://onepiecetreasurecruise.fr/Shanks%201.html';

    case '0562':
      return 'https://onepiecetreasurecruise.fr/Portgas%20D.%20Ace%201.html';
    case '0649':
      return 'https://onepiecetreasurecruise.fr/Marco.html';
    case '0669':
      return 'https://onepiecetreasurecruise.fr/Sabo%201.html';
    case '0718':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%201.html';
    case '0720':
      return 'https://onepiecetreasurecruise.fr/Crocodile.html';
    case '0748':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html';
    case '0870':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201.html';
    case '0935':
      return 'https://onepiecetreasurecruise.fr/Jinbe%201.html';
    case '1001':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html';
    case '1035':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html';
    case '1045':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%201.html';
    case '1085':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html';
    case '1121':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%201.html';
    case '1123':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html';
    case '1240':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html';

    case '1192':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html';
    case '1268':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html';
    case '1314':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html';
    case '1362':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%201.html';
    case '1391':
      return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2035.png';
    case '1404':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202.html';
    case '1434':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html';
    case '1473':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html';
    case '1532':
      return 'https://onepiecetreasurecruise.fr/Usopp.html';
    case '1571':
      return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2372.png';
    case '1588':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%201.html';
    case '1610':
      return 'https://onepiecetreasurecruise.fr/Ener.html';
    case '1652':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html';
    case '1698':
      return 'https://onepiecetreasurecruise.fr/Magellan.html';
    case '1747':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%202.html';
    case '1751':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%202.html';
    case '1763':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%202.html';

    case '1794':
      return 'https://onepiecetreasurecruise.fr/Lucy.html';
    case '1832':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html';
    case '1869':
      return 'https://onepiecetreasurecruise.fr/Issho%202.html';
    case '1883':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%202.html';
    case '1910':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%202.html';
    case '1935':
      return 'https://onepiecetreasurecruise.fr/Franky.html';
    case '1951':
      return 'https://onepiecetreasurecruise.fr/Nico%20Robin.html';
    case '1985':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Ace.html';
    case '2007':
      return 'https://onepiecetreasurecruise.fr/Shanks%202.html';
    case '2023':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%202.html';
    case '2025':
      return 'https://onepiecetreasurecruise.fr/Kuzan%202.html';
    case '2074':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%203.html';
    case '2076':
      return 'https://onepiecetreasurecruise.fr/Nami.html';
    case '2099':
      return 'https://onepiecetreasurecruise.fr/Gild%20Tesoro.html';
    case '2113':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%201.html';
    case '2148':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%202.html';
    case '2251':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Garp.html';
    case '5014':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%204.html';

    case '2181':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%20et%20Marco.html';
    case '2201':
      return 'https://onepiecetreasurecruise.fr/Shiki.html';
    case '2234':
      return 'https://onepiecetreasurecruise.fr/Big%20Mom.html';
    case '2236':
      return 'https://onepiecetreasurecruise.fr/Brook.html';
    case '2265':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html';
    case '2302':
      return 'https://onepiecetreasurecruise.fr/Capone%20Bege.html';
    case '2330':
      return 'https://onepiecetreasurecruise.fr/Zephyr.html';
    case '2338':
      return 'https://onepiecetreasurecruise.fr/Carrot.html';
    case '2365':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%202.html';
    case '2418':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo%20et%20Cavendish.html';
    case '2433':
      return 'https://onepiecetreasurecruise.fr/Jack.html';
    case '2441':
      return 'https://onepiecetreasurecruise.fr/Sabo%202.html';
    case '2446':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html';
    case '2465':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Cracker.html';
    case '2475':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%202.html';
    case '2477':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%202.html';
    case '2534':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Law.html';
    case '2536':
      return 'https://onepiecetreasurecruise.fr/Zeus%20et%20Promethee%20et%20Big%20Mom.html';
    case '2561':
      return 'https://onepiecetreasurecruise.fr/Sabo%20et%20Koala.html';
    case '2577':
      return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2577.png';
    case '2601':
      return 'https://onepiecetreasurecruise.fr/Vivi%20et%20Rebecca.html';
    case '2603':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi%20et%20Manshelly.html';

    case '2651':
      return 'https://onepiecetreasurecruise.fr/Douglas%20Bullet.html';
    case '2672':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%205.html';
    case '2686':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%202.html';
    case '2700':
      return 'https://onepiecetreasurecruise.fr/Kaido.html';
    case '2741':
      return 'https://i.imgur.com/JWmPGj2.png';
    case '2774':
      return 'https://onepiecetreasurecruise.fr/O-Nami.html';
    case '2776':
      return 'https://onepiecetreasurecruise.fr/Komurasaki.html';
    case '2797':
      return 'https://onepiecetreasurecruise.fr/Tony-Tony%20Chopper.html';
    case '2802':
      return 'https://onepiecetreasurecruise.fr/Luffytaro%20et%20Zorojuro.html';
    case '2804':
      return 'https://onepiecetreasurecruise.fr/O-Soba%20Mask.html';
    case '2835':
      return 'https://onepiecetreasurecruise.fr/Nami%20et%20Robin.html';
    case '2837':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Pudding.html';
    case '2860':
      return 'https://onepiecetreasurecruise.fr/Equipage%20Arlong.html';
    case '2862':
      return 'https://onepiecetreasurecruise.fr/Equipage%20de%20Shanks%20le%20Roux.html';
    case '2895':
      return 'https://onepiecetreasurecruise.fr/Mihawk%20et%20Perona.html';
    case '2897':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%203.html';
    case '2930':
      return 'https://onepiecetreasurecruise.fr/Kuzan%203.html';
    case '2958':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%206.html';
    case '2960':
      return 'https://onepiecetreasurecruise.fr/Sabo%203.html';
    case '2962':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%203.html';
    case '2964':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%202.html';
    case '2980':
      return 'https://onepiecetreasurecruise.fr/Eustass%20Kidd.html';
    case '2982':
      return 'https://onepiecetreasurecruise.fr/Basil%20Hawkins.html';
    case '3027':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%203.html';
    case '3385':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%203.html';

    case '3007':
      return 'https://onepiecetreasurecruise.fr/Smoker.html';
    case '3009':
      return 'https://onepiecetreasurecruise.fr/Sugar.html';
    case '3038':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%203.html';
    case '3065':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Sanji.html';
    case '3071':
      return 'https://onepiecetreasurecruise.fr/Germa%2066.html';
    case '3073':
      return 'https://onepiecetreasurecruise.fr/Generaux%20sucres.html';
    case '3100':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%203.html';
    case '3102':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%204.html';
    case '3118':
      return 'https://onepiecetreasurecruise.fr/Shanks%203.html';
    case '3135_1':
      return 'https://onepiecetreasurecruise.fr/Kaido%20VS%20Big%20Mom.html';
    case '3135_2':
      return 'https://onepiecetreasurecruise.fr/Kaido%20VS%20Big%20Mom.html';

    // SIX PLUS LEGENDS

    case '1413':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html';
    case '1445':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%201.html';
    case '1492':
      return 'https://onepiecetreasurecruise.fr/Sabo%201.html';
    case '1543':
      return 'https://onepiecetreasurecruise.fr/Usopp.html';
    case '1593':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202+.html';
    case '1619':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html';
    case '1663':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html';
    case '1707':
      return 'https://onepiecetreasurecruise.fr/Shanks%201.html';
    case '1764':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html';
    case '1816':
      return 'https://onepiecetreasurecruise.fr/Portgas%20D.%20Ace%201.html';
    case '1847':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html';
    case '1880':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html';
    case '1881':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%201.html';
    case '1921':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%201.html';

    case '1922':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%202+.html';
    case '1927':
      return 'https://onepiecetreasurecruise.fr/Crocodile.html';
    case '1928':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html';
    case '2001':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%201.html';
    case '2034':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html';
    case '2035':
      return 'https://onepiecetreasurecruise.fr/Baggy.html';
    case '2066':
      return 'https://onepiecetreasurecruise.fr/Jinbe%201.html';
    case '2138':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke%20+.html';
    case '2159':
      return 'https://onepiecetreasurecruise.fr/Magellan.html';
    case '2195':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html';
    case '2232':
      return 'https://onepiecetreasurecruise.fr/Ener.html';
    case '2245':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%201.html';
    case '2300':
      return 'https://onepiecetreasurecruise.fr/Franky.html';
    case '2357':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html';
    case '2372':
      return 'https://onepiecetreasurecruise.fr/Caborage.html';
    case '2373':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html';
    case '2784':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%202+.html';

    case '2363':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%203+.html';
    case '2434':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%202+.html';
    case '2444':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201+.html';
    case '2500':
      return 'https://onepiecetreasurecruise.fr/Big%20Mom.html';
    case '2505':
      return 'https://onepiecetreasurecruise.fr/Issho%202.html';
    case '2578':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html';
    case '2588':
      return 'https://onepiecetreasurecruise.fr/Nami.html';
    case '2631':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html';

    case '2681':
      return 'https://onepiecetreasurecruise.fr/Douglas%20Bullet.html';
    case '2739':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%201+.html';
    case '2814':
      return 'https://onepiecetreasurecruise.fr/Lucy.html';
    case '2830':
      return 'https://onepiecetreasurecruise.fr/Nico%20Robin.html';
    case '2868':
      return 'https://onepiecetreasurecruise.fr/Marco.html';
    case '2909':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%202.html';
    case '2954':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html';
    case '2991':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Garp.html';

    case '3018':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%202.html';
    case '3048':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html';
    case '3079':
      return 'https://onepiecetreasurecruise.fr/Capone%20Bege.html';

    default:
      return '#';
  }
}
