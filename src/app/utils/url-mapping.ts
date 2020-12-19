import { allLegends } from '../components/tier-list/tier-lists';
import { colisees } from '../data/tier-lists/colisees';
import { kizunas } from '../data/tier-lists/kizuna';
import { lrrs } from '../data/tier-lists/lrr';
import { raids } from '../data/tier-lists/raids';
import { rrs } from '../data/tier-lists/rr';
import { tms } from '../data/tier-lists/tm';

export function getOptcDbDefaultUrl(characterId: string): string {
  return `https://optc-db.github.io/characters/#/view/${characterId}`;
}

export function getFrenchUrl(characterId: string): string {
  if (allLegends.map(l => l.id).includes(characterId)) {
    return getFrenchLegendUrl(characterId);
  } else if (rrs.map(l => l).includes(characterId)) {
    return getFrenchRareRecruitUrl(characterId);
  } else if (lrrs.map(l => l).includes(characterId)) {
    return getFrenchLimitedRareRecruitUrl(characterId);
  } else if (raids.map(l => l).includes(characterId)) {
    return getFrenchRaidUrl(characterId);
  } else if (colisees.map(l => l).includes(characterId)) {
    return getFrenchColosseumUrl(characterId);
  } else if (tms.map(l => l).includes(characterId)) {
    return getFrenchTreasureMapUrl(characterId);
  } else if (kizunas.map(l => l).includes(characterId)) {
    return getFrenchKizunaUrl(characterId);
  }

  return getOptcDbDefaultUrl(characterId);
}

function getFrenchLegendUrl(characterId: string): string {
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

    case '3164':
      return 'https://onepiecetreasurecruise.fr/Vivi%20et%20Rebecca%202.html';
    case '3166':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi%20et%20Manshelly%202.html';
    case '3203':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Pudding.html';

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

    case '3155':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html';
    case '3202':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%202.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchRareRecruitUrl(characterId: string): string {
  switch (characterId) {
    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchLimitedRareRecruitUrl(characterId: string): string {
  switch (characterId) {
    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchRaidUrl(characterId: string): string {
  switch (characterId) {
    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchColosseumUrl(characterId: string): string {
  switch (characterId) {
    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchTreasureMapUrl(characterId: string): string {
  switch (characterId) {
    case '1808':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Dracule%20Mihawk.html';
    case '1853':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Barbe%20Blanche.html';
    case '1889':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Cavendish.html';
    case '1916':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Monkey%20D.%20Luffy%201.html';
    case '1941':
      return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1941.png';
    case '1972':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Sabo.html';
    case '2000':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Sanji%20et%20Zoro.html';
    case '2064':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Kizaru.html';
    case '2109':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Charlotte%20Linlin.html';
    case '2137':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Crocodile.html';
    case '2175':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Jack.html';
    case '2211':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Ener.html';
    case '2261':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Shanks.html';
    case '2299':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Boa%20Hancock.html';
    case '2336':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Trafalgar%20Law.html';
    case '2362':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Nami%201.html';
    case '2387':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Kaido.html';
    case '2443':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Don%20Quijote%20Doflamingo.html';
    case '2469':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Smoothie%20et%20Oven.html';
    case '2510':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Edward%20Weeble.html';
    case '2557':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Shanks%20et%20Beckmann.html';
    case '2583':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Rob%20Lucci.html';
    case '2618':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Sakazuki%20et%20Issho.html';
    case '2659':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Smoker.html';
    case '2690':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Barbe%20Noire.html';
    case '2729':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Basil%20Hawkins.html';
    case '2763':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Nami%202.html';
    case '2792':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/O-Robi.html';
    case '2823':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/X-Drake.html';
    case '2850':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Rebecca%20et%20Viola.html';
    case '2879':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Nefertari%20Vivi.html';
    case '2913':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Shirahoshi.html';
    case '2977':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Monkey%20D.%20Luffy%202.html';

    case '2995':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Zorojuro.html';
    case '3022':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Reiju%20Vinsmoke.html';
    case '3060':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Nami%20et%20Sanji.html';
    case '3094':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Jinbe.html';
    case '3115':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Charlotte%20Pudding.html';
    case '3150':
      return 'https://onepiecetreasurecruise.fr/Carte%20aux%20tresors/Eustass%20Kidd.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchKizunaUrl(characterId: string): string {
  switch (characterId) {
    case '2531':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Zoro%20et%20Sanji.html';
    case '2682':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Boa%20Hancock.html';
    case '2758':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Sabo.html';
    case '2794':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Shirahoshi.html';
    case '2812':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/O-Kiku.html';
    case '2831':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Marco%20et%20Ace.html';
    case '2854':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Koala.html';
    case '2890':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Gecko%20Moria.html';
    case '2920':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Big%20Mom.html';
    case '2955':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Carrot.html';
    case '2999':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Luffy%20et%20Hancock.html';
    case '3036':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Kaido.html';
    case '3052':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Baggy.html';
    case '3098':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Sakazuki%20et%20Borsalino.html';
    case '3124':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Eustass%20Kidd.html';
    case '3154':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Basil%20Hawkins.html';

    case '2518':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Bartolomeo.html';
    case '2615':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Charlotte%20Slurp.html';
    case '2630':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Margaret.html';
    case '2733':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Magellan.html';
    case '2891':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Jigoro%20et%20Chien-manchot.html';
    case '3381':
      return 'https://onepiecetreasurecruise.fr/Bataille%20cooperative/Law%20et%20Chopper.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}
