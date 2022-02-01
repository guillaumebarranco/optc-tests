import { allLegends } from '../components/tier-list/tier-lists';
import { ambushs } from '../data/tier-lists/ambush';
import { arenas } from '../data/tier-lists/arenes';
import { colisees } from '../data/tier-lists/colisees';
import { kizunas } from '../data/tier-lists/kizuna';
import { kizunaLrrs } from '../data/tier-lists/kizuna_lrrs';
import { lrrs } from '../data/tier-lists/lrr';
import { periodsLrrs } from '../data/tier-lists/periods_lrrs';
import { pvps } from '../data/tier-lists/pvp';
import { pvpLrrs } from '../data/tier-lists/pvp_lrrs';
import { raids } from '../data/tier-lists/raids';
import { rrs } from '../data/tier-lists/rr';
import { soutiens } from '../data/tier-lists/soutiens';
import { specials } from '../data/tier-lists/special';
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
  } else if (ambushs.map(l => l).includes(characterId)) {
    return getFrenchAmbushUrl(characterId);
  } else if (arenas.map(l => l).includes(characterId)) {
    return getFrenchArenaUrl(characterId);
  } else if (tms.map(l => l).includes(characterId)) {
    return getFrenchTreasureMapUrl(characterId);
  } else if (kizunas.map(l => l).includes(characterId)) {
    return getFrenchKizunaUrl(characterId);
  } else if (kizunaLrrs.map(l => l).includes(characterId)) {
    return getFrenchKizunaLimitedRareRecruitUrl(characterId);
  } else if (pvps.map(l => l).includes(characterId)) {
    return getFrenchPvpUrl(characterId);
  } else if (pvpLrrs.map(l => l).includes(characterId)) {
    return getFrenchPvpRareRecruitUrl(characterId);
  } else if (specials.map(l => l).includes(characterId)) {
    return getFrenchSpecialCharactersUrl(characterId);
  } else if (soutiens.map(l => l).includes(characterId)) {
    return getFrenchSupportsSpecialCharactersUrl(characterId);
  } else if (periodsLrrs.map(l => l).includes(characterId)) {
    return getFrenchPeriodsLrrCharactersUrl(characterId);
  }

  return getOptcDbDefaultUrl(characterId);
}

function getFrenchLegendUrl(characterId: string): string {
  switch (characterId) {
    case '0261':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html#0';
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
      return 'https://onepiecetreasurecruise.fr/Baggy.html';
    case '1404':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202.html';
    case '1434':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html';
    case '1473':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html';
    case '1532':
      return 'https://onepiecetreasurecruise.fr/Usopp.html';
    case '1571':
      return 'https://onepiecetreasurecruise.fr/Caborage.html';
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
      return 'https://onepiecetreasurecruise.fr/Caborage%20et%20Chavipere.html';
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
      return 'https://onepiecetreasurecruise.fr/Portgas%20D.%20Ace%202.html';
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
    case '3175':
      return 'https://onepiecetreasurecruise.fr/Oden%20Kozuki.html';
    case '3177':
      return 'https://onepiecetreasurecruise.fr/Gol%20D.%20Roger.html';
    case '3203':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Pudding.html';
    case '3225':
      return 'https://onepiecetreasurecruise.fr/Zorojuro.html';
    case '3227':
      return 'https://onepiecetreasurecruise.fr/Kaido%202.html';
    case '3245':
      return 'https://onepiecetreasurecruise.fr/Ener%202.html';
    case '3253_1':
      return 'https://onepiecetreasurecruise.fr/Ace%20VS%20Akainu.html';
    case '3253_2':
      return 'https://onepiecetreasurecruise.fr/Ace%20VS%20Akainu.html';

    case '3278':
      return 'https://onepiecetreasurecruise.fr/Magellan%202.html';
    case '3280':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%203.html';
    case '3282':
      return 'https://onepiecetreasurecruise.fr/Gecko%20Moria.html';
    case '3300':
      return 'https://onepiecetreasurecruise.fr/Equipage%20de%20Capone%20Bege.html';
    case '3307':
      return 'https://onepiecetreasurecruise.fr/Jewelry%20Bonney.html';
    case '3334':
      return 'https://onepiecetreasurecruise.fr/Luffy%207th%20anni.html';
    case '3336':
      return 'https://onepiecetreasurecruise.fr/Law%207th%20anni.html';
    case '3338':
      return 'https://onepiecetreasurecruise.fr/Kidd%207th%20anni.html';

    case '3349':
      return 'https://onepiecetreasurecruise.fr/Sabo%20Et%20Ace.html';
    case '3355':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%20VS%20Shanks.html';
    case '3357':
      return 'https://onepiecetreasurecruise.fr/Marco%202.html';
    case '3364':
      return 'https://onepiecetreasurecruise.fr/Legende/Sanji_Germa.html';

    case '3376':
      return 'https://onepiecetreasurecruise.fr/Legende/King.html';
    case '3378':
      return 'https://onepiecetreasurecruise.fr/Legende/Queen.html';
    case '3391':
      return 'https://onepiecetreasurecruise.fr/Legende/Toki.html';
    case '3398':
      return 'https://onepiecetreasurecruise.fr/Legende/Mugiwaras.html';
    case '3403':
      return 'https://onepiecetreasurecruise.fr/Legende/Reiju.html';
    case '3405':
      return 'https://onepiecetreasurecruise.fr/Legende/Vivi.html';
    case '3411':
      return 'https://onepiecetreasurecruise.fr/Legende/Kizaru_V2.html';
    case '3422':
      return 'https://onepiecetreasurecruise.fr/Legende/Lucci_V3.html';
    case '3427':
      return 'https://onepiecetreasurecruise.fr/Legende/Kuma.html';
    case '3429':
      return 'https://onepiecetreasurecruise.fr/Legende/Yamato.html';
    case '3433':
      return 'https://onepiecetreasurecruise.fr/Legende/Ulti_Page_One.html';

    case '3452':
      return 'https://onepiecetreasurecruise.fr/Legende/Hancock_Halloween.html';
    case '3454':
      return 'https://onepiecetreasurecruise.fr/Legende/Perona_Halloween.html';

    case '3462':
      return 'https://onepiecetreasurecruise.fr/Legende/Koala_Halloween.html';
    case '3472':
      return 'https://onepiecetreasurecruise.fr/Legende/Doflamingo_V3.html';
    case '3473':
      return 'https://onepiecetreasurecruise.fr/Legende/Katakuri_V4.html';
    case '3483':
      return 'https://onepiecetreasurecruise.fr/Legende/Crocodile_V2.html';
    case '3493':
      return 'https://onepiecetreasurecruise.fr/Legende/Nami_Usopp.html';
    case '3495':
      return 'https://onepiecetreasurecruise.fr/Legende/Robin_Jinbe.html';
    case '3508':
      return 'https://onepiecetreasurecruise.fr/Legende/Kaido_Crew.html';
    case '3513':
      return 'https://onepiecetreasurecruise.fr/Legende/Roger_Newgate.html';
    case '3515':
      return 'https://onepiecetreasurecruise.fr/Legende/Luffy_Crew.html';
    case '3523':
      return 'https://onepiecetreasurecruise.fr/Legende/Bon_Clay.html';
    case '3534':
      return 'https://onepiecetreasurecruise.fr/Legende/Inuarashi_V2.html';
    case '3536':
      return 'https://onepiecetreasurecruise.fr/Legende/Nekomamushi_V2.html';

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
    case '3211':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%202.html';
    case '3240':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%202.html';
    case '3275':
      return 'https://onepiecetreasurecruise.fr/O-Nami.html';
    case '3298':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Cracker.html#sixplus';

    case '3350':
      return 'https://onepiecetreasurecruise.fr/Komurasaki.html#sixplus';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchRareRecruitUrl(characterId: string): string {
  switch (characterId) {
    // case '0075':
    //   return 'aaaaaaaaaaaa';
    // case '0077':
    //   return 'aaaaaaaaaaaa';
    // case '0210':
    //   return 'aaaaaaaaaaaa';
    // case '0217':
    //   return 'aaaaaaaaaaaa';
    // case '0219':
    //   return 'aaaaaaaaaaaa';
    // case '0221':
    //   return 'aaaaaaaaaaaa';
    // case '0223':
    //   return 'aaaaaaaaaaaa';
    // case '0225':
    //   return 'aaaaaaaaaaaa';
    case '0251':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html#1';
    case '0253':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html#2';
    case '0255':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html#3';
    case '0257':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html#4';
    case '0259':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%201.html#5';
    // case '0308':
    //   return 'aaaaaaaaaaaa';
    // case '0310':
    //   return 'aaaaaaaaaaaa';
    // case '0312':
    //   return 'aaaaaaaaaaaa';
    // case '0314':
    //   return 'aaaaaaaaaaaa';
    // case '0316':
    //   return 'aaaaaaaaaaaa';
    case '0357':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html#1';
    case '0359':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html#2';
    case '0361':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html#3';
    case '0363':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html#4';
    case '0365':
      return 'https://onepiecetreasurecruise.fr/Silvers%20Rayleigh%201.html#5';
    case '0410':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%201.html#1';
    case '0412':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%201.html#2';
    case '0414':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%201.html#3';
    case '0449':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html#1';
    case '0451':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html#2';
    case '0453':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html#3';
    case '0455':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html#4';
    case '0457':
      return 'https://onepiecetreasurecruise.fr/Sengoku.html#5';
    // case '0500':
    //   return 'aaaaaaaaaaaa';
    // case '0502':
    //   return 'aaaaaaaaaaaa';
    // case '0504':
    //   return 'aaaaaaaaaaaa';
    // case '0506':
    //   return 'aaaaaaaaaaaa';
    // case '0508':
    //   return 'aaaaaaaaaaaa';
    // case '0586':
    //   return 'aaaaaaaaaaaa';
    // case '0588':
    //   return 'aaaaaaaaaaaa';
    // case '0590':
    //   return 'aaaaaaaaaaaa';
    case '0639':
      return 'https://onepiecetreasurecruise.fr/Marco.html#1';
    case '0641':
      return 'https://onepiecetreasurecruise.fr/Marco.html#2';
    case '0643':
      return 'https://onepiecetreasurecruise.fr/Marco.html#3';
    case '0645':
      return 'https://onepiecetreasurecruise.fr/Marco.html#4';
    case '0647':
      return 'https://onepiecetreasurecruise.fr/Marco.html#5';
    case '0671':
      return 'https://onepiecetreasurecruise.fr/Sabo%201.html#1';
    case '0673':
      return 'https://onepiecetreasurecruise.fr/Sabo%201.html#2';
    case '0675':
      return 'https://onepiecetreasurecruise.fr/Sabo%201.html#3';
    case '0677':
      return 'https://onepiecetreasurecruise.fr/Sabo%201.html#4';
    case '0750':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html#1';
    case '0752':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html#2';
    case '0754':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html#3';
    case '0756':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html#4';
    case '0758':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html#5';
    case '0760':
      return 'https://onepiecetreasurecruise.fr/Rob%20Lucci%201.html#6';
    // case '0785':
    //   return 'aaaaaaaaaaaa';
    // case '0787':
    //   return 'aaaaaaaaaaaa';
    // case '0789':
    //   return 'aaaaaaaaaaaa';
    // case '0791':
    //   return 'aaaaaaaaaaaa';
    // case '0793':
    //   return 'aaaaaaaaaaaa';
    // case '0838':
    //   return 'aaaaaaaaaaaa';
    // case '0840':
    //   return 'aaaaaaaaaaaa';
    // case '0842':
    //   return 'aaaaaaaaaaaa';
    // case '0844':
    //   return 'aaaaaaaaaaaa';
    // case '0846':
    //   return 'aaaaaaaaaaaa';
    case '0872':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201.html#1';
    case '0874':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201.html#2';
    case '0876':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201.html#3';
    case '0878':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201.html#4';
    case '0880':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%201.html#5';
    // case '0906':
    //   return 'aaaaaaaaaaaa';
    // case '0908':
    //   return 'aaaaaaaaaaaa';
    // case '0910':
    //   return 'aaaaaaaaaaaa';
    // case '0912':
    //   return 'aaaaaaaaaaaa';
    // case '0914':
    //   return 'aaaaaaaaaaaa';
    case '0937':
      return 'https://onepiecetreasurecruise.fr/Jinbe%201.html#1';
    case '0939':
      return 'https://onepiecetreasurecruise.fr/Jinbe%201.html#2';
    case '0941':
      return 'https://onepiecetreasurecruise.fr/Jinbe%201.html#3';
    case '0943':
      return 'https://onepiecetreasurecruise.fr/Jinbe%201.html#4';
    case '0991':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html#1';
    case '0993':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html#2';
    case '0995':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html#3';
    case '0997':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html#4';
    case '0999':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Rosinante.html#5';

    case '1025':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html#1';
    case '1027':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html#2';
    case '1029':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html#3';
    case '1031':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html#4';
    case '1033':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo.html#5';
    case '1075':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html#1';
    case '1077':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html#2';
    case '1079':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html#3';
    case '1081':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html#4';
    case '1083':
      return 'https://onepiecetreasurecruise.fr/Issho%201.html#5';
    // case '1115':
    //   return 'aaaaaaaaa';
    // case '1117':
    //   return 'aaaaaaaaa';
    // case '1119':
    //   return 'aaaaaaaaa';
    case '1125':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html#1';
    case '1127':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html#2';
    case '1129':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html#3';
    case '1131':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html#4';
    case '1133':
      return 'https://onepiecetreasurecruise.fr/Cavendish.html#5';
    // case '1173':
    //   return 'aaaaaaaaa';
    // case '1175':
    //   return 'aaaaaaaaa';
    // case '1177':
    //   return 'aaaaaaaaa';
    case '1182':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html#1';
    case '1184':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html#2';
    case '1186':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html#3';
    case '1188':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html#4';
    case '1190':
      return 'https://onepiecetreasurecruise.fr/Kuzan%201.html#5';
    // case '1208':
    //   return 'aaaaaaaaa';
    // case '1210':
    //   return 'aaaaaaaaa';
    // case '1212':
    //   return 'aaaaaaaaa';
    case '1230':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html#1';
    case '1232':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html#2';
    case '1234':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html#3';
    case '1236':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html#4';
    case '1238':
      return 'https://onepiecetreasurecruise.fr/Borsalino.html#5';
    case '1270':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html#1';
    case '1272':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html#2';
    case '1274':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html#3';
    case '1276':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html#4';
    case '1278':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Noire%201.html#5';
    case '1316':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html#1';
    case '1318':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html#2';
    case '1320':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html#3';
    case '1322':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html#4';
    case '1324':
      return 'https://onepiecetreasurecruise.fr/Sakazuki%201.html#5';
    case '1364':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%201.html#1';
    case '1366':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%201.html#2';
    case '1368':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%201.html#3';
    case '1370':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%201.html#4';
    case '1406':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202.html#1';
    case '1408':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202.html#2';
    case '1410':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202.html#3';
    case '1412':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%202.html#4';
    case '1436':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html#1';
    case '1438':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html#2';
    case '1440':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html#3';
    case '1442':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html#4';
    case '1444':
      return 'https://onepiecetreasurecruise.fr/Hody%20Jones.html#5';
    case '1475':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html#1';
    case '1477':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html#2';
    case '1479':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html#3';
    case '1481':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html#4';
    case '1483':
      return 'https://onepiecetreasurecruise.fr/Shirahoshi.html#5';

    case '1534':
      return 'https://onepiecetreasurecruise.fr/Usopp.html#1';
    case '1536':
      return 'https://onepiecetreasurecruise.fr/Usopp.html#2';
    case '1538':
      return 'https://onepiecetreasurecruise.fr/Usopp.html#3';
    case '1540':
      return 'https://onepiecetreasurecruise.fr/Usopp.html#4';
    case '1542':
      return 'https://onepiecetreasurecruise.fr/Usopp.html#5';
    case '1573':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#1';
    case '1575':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#2';
    case '1577':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#3';
    case '1579':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#4';
    case '1612':
      return 'https://onepiecetreasurecruise.fr/Ener.html#1';
    case '1614':
      return 'https://onepiecetreasurecruise.fr/Ener.html#2';
    case '1616':
      return 'https://onepiecetreasurecruise.fr/Ener.html#3';
    case '1618':
      return 'https://onepiecetreasurecruise.fr/Ener.html#4';
    case '1654':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#1';
    case '1656':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#2';
    case '1658':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#3';
    case '1660':
      return 'https://onepiecetreasurecruise.fr/Chavipere.html#4';
    // case '1682':
    //   return 'aaaaaaaa';
    // case '1684':
    //   return 'aaaaaaaa';
    // case '1686':
    //   return 'aaaaaaaa';
    // case '1688':
    //   return 'aaaaaaaa';
    case '1700':
      return 'https://onepiecetreasurecruise.fr/Magellan.html#1';
    case '1702':
      return 'https://onepiecetreasurecruise.fr/Magellan.html#2';
    case '1704':
      return 'https://onepiecetreasurecruise.fr/Magellan.html#3';
    case '1706':
      return 'https://onepiecetreasurecruise.fr/Magellan.html#4';
    case '1741':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%202.html#1';
    case '1743':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%202.html#2';
    case '1745':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%202.html#3';
    case '1749':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%202.html#4';
    // case '1753':
    //   return 'aaaaaaaa';
    // case '1755':
    //   return 'aaaaaaaa';
    // case '1757':
    //   return 'aaaaaaaa';
    // case '1759':
    //   return 'aaaaaaaa';
    // case '1761':
    //   return 'aaaaaaaa';
    case '1796':
      return 'https://onepiecetreasurecruise.fr/Lucy.html#1';
    case '1798':
      return 'https://onepiecetreasurecruise.fr/Lucy.html#2';
    case '1800':
      return 'https://onepiecetreasurecruise.fr/Lucy.html#3';
    case '1802':
      return 'https://onepiecetreasurecruise.fr/Lucy.html#4';
    case '1834':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#1';
    case '1836':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#2';
    case '1838':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#3';
    case '1840':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#4';
    case '1871':
      return 'https://onepiecetreasurecruise.fr/Issho%202.html#1';
    case '1873':
      return 'https://onepiecetreasurecruise.fr/Issho%202.html#2';
    case '1875':
      return 'https://onepiecetreasurecruise.fr/Issho%202.html#3';
    case '1877':
      return 'https://onepiecetreasurecruise.fr/Issho%202.html#4';
    case '1902':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%202.html#1';
    case '1904':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%202.html#2';
    case '1906':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%202.html#3';
    case '1908':
      return 'https://onepiecetreasurecruise.fr/Don%20Quijote%20Doflamingo%202.html#4';
    case '1953':
      return 'https://onepiecetreasurecruise.fr/Nico%20Robin.html#1';
    case '1955':
      return 'https://onepiecetreasurecruise.fr/Nico%20Robin.html#2';
    case '1957':
      return 'https://onepiecetreasurecruise.fr/Nico%20Robin.html#3';
    case '1959':
      return 'https://onepiecetreasurecruise.fr/Nico%20Robin.html#4';
    case '1987':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Ace.html#1';
    case '1989':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Ace.html#2';
    case '1991':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Ace.html#3';
    case '1993':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Ace.html#4';

    case '2027':
      return 'https://onepiecetreasurecruise.fr/Kuzan%202.html#1';
    case '2029':
      return 'https://onepiecetreasurecruise.fr/Kuzan%202.html#2';
    case '2031':
      return 'https://onepiecetreasurecruise.fr/Kuzan%202.html#3';
    case '2072':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%203.html#1';
    case '2078':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%203.html#2';
    case '2080':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%203.html#3';
    case '2082':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%203.html#4';
    case '2101':
      return 'https://onepiecetreasurecruise.fr/Gild%20Tesoro.html#1';
    case '2103':
      return 'https://onepiecetreasurecruise.fr/Gild%20Tesoro.html#2';
    case '2105':
      return 'https://onepiecetreasurecruise.fr/Gild%20Tesoro.html#3';
    case '2107':
      return 'https://onepiecetreasurecruise.fr/Gild%20Tesoro.html#4';
    case '2115':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%201.html#1';
    case '2117':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%201.html#2';
    case '2119':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%201.html#3';
    case '2121':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%201.html#4';
    case '2139':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#1';
    case '2140':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#2';
    case '2141':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#3';
    case '2142':
      return 'https://onepiecetreasurecruise.fr/Judge%20Vinsmoke.html#4';
    case '2150':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%202.html#1';
    case '2152':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%202.html#2';
    case '2154':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%202.html#3';
    case '2156':
      return 'https://onepiecetreasurecruise.fr/Sanji%20Vinsmoke%202.html#4';
    case '2183':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%20et%20Marco.html#1';
    case '2185':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%20et%20Marco.html#2';
    case '2187':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%20et%20Marco.html#3';
    case '2189':
      return 'https://onepiecetreasurecruise.fr/Barbe%20Blanche%20et%20Marco.html#4';
    case '2203':
      return 'https://onepiecetreasurecruise.fr/Shiki.html#1';
    case '2205':
      return 'https://onepiecetreasurecruise.fr/Shiki.html#2';
    case '2238':
      return 'https://onepiecetreasurecruise.fr/Big%20Mom.html#1';
    case '2240':
      return 'https://onepiecetreasurecruise.fr/Big%20Mom.html#2';
    case '2242':
      return 'https://onepiecetreasurecruise.fr/Big%20Mom.html#3';
    case '2244':
      return 'https://onepiecetreasurecruise.fr/Big%20Mom.html#4';
    case '2267':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html#1';
    case '2269':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html#2';
    case '2271':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html#3';
    case '2273':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html#4';
    case '2275':
      return 'https://onepiecetreasurecruise.fr/Jinbe%202.html#5';
    case '2304':
      return 'https://onepiecetreasurecruise.fr/Capone%20Bege.html#1';
    case '2306':
      return 'https://onepiecetreasurecruise.fr/Capone%20Bege.html#2';
    case '2308':
      return 'https://onepiecetreasurecruise.fr/Capone%20Bege.html#3';
    case '2310':
      return 'https://onepiecetreasurecruise.fr/Capone%20Bege.html#4';
    case '2332':
      return 'https://onepiecetreasurecruise.fr/Zephyr.html#1';
    case '2334':
      return 'https://onepiecetreasurecruise.fr/Zephyr.html#2';
    case '2340':
      return 'https://onepiecetreasurecruise.fr/Carrot.html#1';
    case '2342':
      return 'https://onepiecetreasurecruise.fr/Carrot.html#2';
    case '2344':
      return 'https://onepiecetreasurecruise.fr/Carrot.html#3';
    case '2346':
      return 'https://onepiecetreasurecruise.fr/Carrot.html#4';
    case '2367':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%202.html#1';
    case '2369':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%202.html#2';
    case '2371':
      return 'https://onepiecetreasurecruise.fr/Charlotte%20Dent-de-chien%202.html#3';
    case '2420':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo%20et%20Cavendish.html#1';
    case '2422':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo%20et%20Cavendish.html#2';
    case '2424':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo%20et%20Cavendish.html#3';
    case '2426':
      return 'https://onepiecetreasurecruise.fr/Bartolomeo%20et%20Cavendish.html#4';
    case '2447':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#1';
    case '2448':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#2';
    case '2449':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#3';
    case '2450':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#4';
    case '2451':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#5';
    case '2452':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#6';
    case '2453':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#7';
    case '2454':
      return 'https://onepiecetreasurecruise.fr/Sanji%20et%20Judge.html#8';
    case '2479':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%202.html#9';
    case '2481':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%202.html#10';
    case '2483':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%202.html#11';
    case '2485':
      return 'https://onepiecetreasurecruise.fr/Roronoa%20Zoro%202.html#12';

    case '2538':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Law.html#1';
    case '2540':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Law.html#2';
    case '2542':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Law.html#3';
    case '2544':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Law.html#4';
    case '2563':
      return 'https://onepiecetreasurecruise.fr/Sabo%20et%20Koala.html#1';
    case '2565':
      return 'https://onepiecetreasurecruise.fr/Sabo%20et%20Koala.html#2';
    case '2567':
      return 'https://onepiecetreasurecruise.fr/Sabo%20et%20Koala.html#3';
    case '2605':
      return 'https://onepiecetreasurecruise.fr/Vivi%20et%20Rebecca%201.html#1';
    case '2607':
      return 'https://onepiecetreasurecruise.fr/Vivi%20et%20Rebecca%201.html#2';
    case '2609':
      return 'https://onepiecetreasurecruise.fr/Vivi%20et%20Rebecca%201.html#3';
    case '2653':
      return 'https://onepiecetreasurecruise.fr/Douglas%20Bullet.html#1';
    case '2655':
      return 'https://onepiecetreasurecruise.fr/Douglas%20Bullet.html#2';
    case '2657':
      return 'https://onepiecetreasurecruise.fr/Douglas%20Bullet.html#3';
    case '2674':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%205.html#1';
    case '2676':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%205.html#2';
    case '2678':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%205.html#3';
    case '2702':
      return 'https://onepiecetreasurecruise.fr/Kaido.html#1';
    case '2704':
      return 'https://onepiecetreasurecruise.fr/Kaido.html#2';
    case '2706':
      return 'https://onepiecetreasurecruise.fr/Kaido.html#3';
    case '2743':
      return 'https://onepiecetreasurecruise.fr/Portgas%20D.%20Ace%202.html#1';
    case '2745':
      return 'https://onepiecetreasurecruise.fr/Portgas%20D.%20Ace%202.html#2';
    case '2747':
      return 'https://onepiecetreasurecruise.fr/Portgas%20D.%20Ace%202.html#3';
    case '2778':
      return 'https://onepiecetreasurecruise.fr/O-Nami.html#1';
    case '2780':
      return 'https://onepiecetreasurecruise.fr/O-Nami.html#2';
    // case '2787':
    //   return 'aaaaaaaaa';
    // case '2789':
    //   return 'aaaaaaaaa';
    case '2806':
      return 'https://onepiecetreasurecruise.fr/Luffytaro%20et%20Zorojuro.html#1';
    case '2808':
      return 'https://onepiecetreasurecruise.fr/Luffytaro%20et%20Zorojuro.html#2';
    case '2810':
      return 'https://onepiecetreasurecruise.fr/Luffytaro%20et%20Zorojuro.html#3';
    case '2839':
      return 'https://onepiecetreasurecruise.fr/Nami%20et%20Robin.html#1';
    case '2841':
      return 'https://onepiecetreasurecruise.fr/Nami%20et%20Robin.html#2';
    case '2864':
      return 'https://onepiecetreasurecruise.fr/Equipage%20Arlong.html#3';
    case '2866':
      return 'https://onepiecetreasurecruise.fr/Equipage%20Arlong.html#4';
    // case '2881':
    //   return 'aaaaaaaaa';
    // case '2882':
    //   return 'aaaaaaaaa';
    case '2899':
      return 'https://onepiecetreasurecruise.fr/Mihawk%20et%20Perona.html#1';
    case '2901':
      return 'https://onepiecetreasurecruise.fr/Mihawk%20et%20Perona.html#2';
    case '2903':
      return 'https://onepiecetreasurecruise.fr/Mihawk%20et%20Perona.html#3';
    case '2966':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%206.html#1';
    case '2968':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%206.html#2';
    case '2970':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%206.html#3';
    case '2972':
      return 'https://onepiecetreasurecruise.fr/Monkey%20D.%20Luffy%206.html#4';
    case '2984':
      return 'https://onepiecetreasurecruise.fr/Eustass%20Kidd.html#1';
    case '2986':
      return 'https://onepiecetreasurecruise.fr/Eustass%20Kidd.html#2';
    case '3029':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%203.html#1';
    case '3031':
      return 'https://onepiecetreasurecruise.fr/Trafalgar%20Law%203.html#2';
    case '3011':
      return 'https://onepiecetreasurecruise.fr/Smoker.html#1';
    case '3013':
      return 'https://onepiecetreasurecruise.fr/Smoker.html#2';
    case '3015':
      return 'https://onepiecetreasurecruise.fr/Smoker.html#3';
    case '3040':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%203.html#1';
    case '3042':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%203.html#2';
    case '3044':
      return 'https://onepiecetreasurecruise.fr/Boa%20Hancock%203.html#3';

    case '3067':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Sanji.html#1';
    case '3069':
      return 'https://onepiecetreasurecruise.fr/Luffy%20et%20Sanji.html#2';
    case '3104':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%203.html#3';
    case '3106':
      return 'https://onepiecetreasurecruise.fr/Dracule%20Mihawk%203.html#4';
    case '3137':
      return 'https://onepiecetreasurecruise.fr/Page_RR/King_1.html';
    case '3139':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Queen_1.html';
    case '3141':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Jack_2.html';
    case '3168':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Neptune_2.html';
    case '3170':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Leo_2.html';
    case '3179':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Inuarashi_1.html';
    case '3181':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Nekomamushi_1.html';
    case '3183':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Crocus_2.html';
    case '3185':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Rayleigh_2.html';

    case '3229':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Kamazo_1.html';
    case '3231':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Gyukimaru_1.html';

    case '3255':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Joz_2.html';
    case '3257':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Luffy_6.html';
    case '3259':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Kuzan_1.html';
    case '3261':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Sengoku_2.html';

    case '3283':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Pizarro_1.html';
    case '3284':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Devon_1.html';

    case '3308':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Apoo_2.html';
    case '3309':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Hawkins_2.html';
    case '3310':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Drake_3.html';

    case '3343':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Killer_2.html';
    case '3344':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Zoro_5.html';
    case '3345':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Jinbe_3.html';

    case '3358':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Beckmann_1.html';
    case '3359':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Vista_2.html';
    case '3360':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Rockstar_1.html';

    case '3365':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Luffy_7.html';
    case '3366':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Chopper_9.html';
    case '3367':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Nami_9.html';

    case '3380':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Kanjuro_2.html';
    case '3381':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Orochi_1.html';

    case '3406':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Belo_Betty_2.html';
    case '3407':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Koala_4.html';

    case '3423':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Kaku_3.html';
    case '3424':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Stussy_2.html';

    case '3431':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Sasaki_1.html';
    case '3434':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Black_Maria_1.html';
    case '3435':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Whos_Who_1.html';

    case '3455':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Shirahoshi_2.html';
    case '3456':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Bonney_4.html';
    case '3463':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Karasu_2.html';
    case '3464':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Morley_1.html';
    case '3475':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Cesar_4.html';
    case '3476':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Hody_1.html';
    case '3484':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Lucci_2.html';
    case '3485':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Ener_2.html';
    case '3496':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Shinobu_1.html';
    case '3497':
      return 'https://onepiecetreasurecruise.fr/Page_RR/O_Soba_Mask_1.html';
    case '3516':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Shanks_Baggy.html';
    case '3517':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Rayleigh_Gaban.html';
    case '3524':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Cesar_5.html';
    case '3525':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Ivankov_6.html';
    case '3537':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Roddy_Blackback.html';
    case '3538':
      return 'https://onepiecetreasurecruise.fr/Page_RR/Mousquetaires.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchLimitedRareRecruitUrl(characterId: string): string {
  switch (characterId) {
    case '1621':
      return 'https://onepiecetreasurecruise.fr/LRR/Eustass%20Kidd.html';
    case '1632':
      return 'https://onepiecetreasurecruise.fr/LRR/Fisher%20Tiger.html';
    case '1665':
      return 'https://onepiecetreasurecruise.fr/LRR/Aokiji.html';
    case '1678':
      return 'https://onepiecetreasurecruise.fr/LRR/Trafalgar%20Law.html';
    case '1713':
      return 'https://onepiecetreasurecruise.fr/LRR/Akainu.html';
    case '1721':
      return 'https://onepiecetreasurecruise.fr/LRR/Jinbe.html';
    case '1770':
      return 'https://onepiecetreasurecruise.fr/LRR/Ben%20Beckmann.html';
    case '1778':
      return 'https://onepiecetreasurecruise.fr/LRR/Kizaru.html';
    case '1824':
      return 'https://onepiecetreasurecruise.fr/LRR/Byrnndi%20World.html';
    case '1859':
      return 'https://onepiecetreasurecruise.fr/LRR/Leo.html';
    case '1895':
      return 'https://onepiecetreasurecruise.fr/LRR/Urouge%201.html';
    case '1926':
      return 'https://onepiecetreasurecruise.fr/LRR/Kobby.html';
    case '1974':
      return 'https://onepiecetreasurecruise.fr/LRR/Basil%20Hawkins.html';
    case '2013':
      return 'https://onepiecetreasurecruise.fr/LRR/Jewelry%20Bonney.html';
    case '2048':
      return 'https://onepiecetreasurecruise.fr/LRR/Koala.html';
    case '2050':
      return 'https://onepiecetreasurecruise.fr/LRR/Gecko%20Moria.html';
    case '2068':
      return 'https://onepiecetreasurecruise.fr/LRR/Tashigi.html';
    case '2161':
      return 'https://onepiecetreasurecruise.fr/LRR/Don%20Quijote%20Doflamingo.html';
    case '2199':
      return 'https://onepiecetreasurecruise.fr/LRR/Killer.html';
    case '2247':
      return 'https://onepiecetreasurecruise.fr/LRR/Nefertari%20Vivi.html';
    case '2285':
      return 'https://onepiecetreasurecruise.fr/LRR/Hody%20Jones.html';
    case '2325':
      return 'https://onepiecetreasurecruise.fr/LRR/Usoland.html';
    case '2349':
      return 'https://onepiecetreasurecruise.fr/LRR/Pedro.html';
    case '2431':
      return 'https://onepiecetreasurecruise.fr/LRR/Charlotte%20Pudding.html';
    case '2463':
      return 'https://onepiecetreasurecruise.fr/LRR/Franky.html';
    case '2487':
      return 'https://onepiecetreasurecruise.fr/LRR/Kinemon.html';
    case '2515':
      return 'https://onepiecetreasurecruise.fr/LRR/Urouge%202.html';
    case '2575':
      return 'https://onepiecetreasurecruise.fr/LRR/Carrot.html';
    case '2696':
      return 'https://onepiecetreasurecruise.fr/LRR/Marco.html';
    case '2731':
      return 'https://onepiecetreasurecruise.fr/LRR/Cesar%20Clown.html';
    case '2892':
      return 'https://onepiecetreasurecruise.fr/LRR/Sniperking.html';
    case '2914':
      return 'https://onepiecetreasurecruise.fr/LRR/Lucy.html';
    case '2919':
      return 'https://onepiecetreasurecruise.fr/LRR/Sanji%20et%20Pudding.html';
    case '3051':
      return 'https://onepiecetreasurecruise.fr/LRR/Alvida.html';
    case '3097':
      return 'https://onepiecetreasurecruise.fr/LRR/Sengoku.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchRaidUrl(characterId: string): string {
  switch (characterId) {
    case '0227':
      return 'https://onepiecetreasurecruise.fr/Raid/Dracule%20Mihawk.html';
    case '0249':
      return 'https://onepiecetreasurecruise.fr/Raid/Chopper%20enrage.html';
    case '0306':
      return 'https://onepiecetreasurecruise.fr/Raid/Monkey%20D.%20Garp.html';
    case '0353':
      return 'https://onepiecetreasurecruise.fr/Raid/Zephyr.html';
    case '0390':
      return 'https://onepiecetreasurecruise.fr/Raid/Emporio%20Ivankov.html';
    case '0418':
      return 'https://onepiecetreasurecruise.fr/Raid/Don%20Quijote%20Doflamingo%201.html';
    case '0447':
      return 'https://onepiecetreasurecruise.fr/Raid/Barbe%20Noire%201.html';
    case '0516':
      return 'https://onepiecetreasurecruise.fr/Raid/Heracles.html';
    case '0518':
      return 'https://onepiecetreasurecruise.fr/Raid/Usopp.html';
    case '0575':
      return 'https://onepiecetreasurecruise.fr/Raid/Aokiji.html';
    case '0603':
      return 'https://onepiecetreasurecruise.fr/Raid/Ener.html';
    case '0654':
      return 'https://onepiecetreasurecruise.fr/Raid/Duval.html';
    case '0770':
      return 'https://onepiecetreasurecruise.fr/Raid/Buster%20Call.html';
    case '0771':
      return 'https://onepiecetreasurecruise.fr/Raid/Nightmare%20Luffy.html';
    case '0772':
      return 'https://onepiecetreasurecruise.fr/Raid/Bartholomew%20Kuma.html';
    case '0773':
      return 'https://onepiecetreasurecruise.fr/Raid/Boa%20Hancock.html';
    case '0774':
      return 'https://onepiecetreasurecruise.fr/Raid/Pica.html';
    case '0775':
      return 'https://onepiecetreasurecruise.fr/Raid/Kizaru.html';

    case '0795':
      return 'https://onepiecetreasurecruise.fr/Raid/Nightmare%20Luffy.html';
    case '0836':
      return 'https://onepiecetreasurecruise.fr/Raid/Bartholomew%20Kuma.html';
    case '0865':
      return 'https://onepiecetreasurecruise.fr/Raid/Boa%20Hancock.html';
    case '0933':
      return 'https://onepiecetreasurecruise.fr/Raid/Pica.html';
    case '0978':
      return 'https://onepiecetreasurecruise.fr/Raid/Kizaru.html';
    case '0989':
      return 'https://onepiecetreasurecruise.fr/Raid/Faux%20Equipage%20de%20Chapeau%20de%20paille.html';
    case '1047':
      return 'https://onepiecetreasurecruise.fr/Raid/Sabo%201.html';
    case '1108':
      return 'https://onepiecetreasurecruise.fr/Raid/Shiki.html';
    case '1163':
      return 'https://onepiecetreasurecruise.fr/Raid/Gild%20Tesoro.html';
    case '1298':
      return 'https://onepiecetreasurecruise.fr/Raid/Akainu.html';
    case '1374':
      return 'https://onepiecetreasurecruise.fr/Raid/Magellan.html';
    case '1432':
      return 'https://onepiecetreasurecruise.fr/Raid/Franky.html';
    case '1518':
      return 'https://onepiecetreasurecruise.fr/Raid/Bellamy.html';
    case '1595':
      return 'https://onepiecetreasurecruise.fr/Raid/Fujitora.html';

    case '1623':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Don%20Quijote%20Doflamingo.html';
    case '1647':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Pica.html';
    case '1669':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Aokiji.html';
    case '1680':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Dracule%20Mihawk.html';
    case '1696':
      return 'https://onepiecetreasurecruise.fr/Raid/Vergo.html';
    case '1727':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Sabo.html';
    case '1739':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Bellamy.html';
    case '1772':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Bartholomew%20Kuma.html';
    case '1780':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Kizaru.html';
    case '1815':
      return 'https://onepiecetreasurecruise.fr/Raid/Sanji%20Vinsmoke.html';
    case '1826':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Akainu.html';
    case '1830':
      return 'https://onepiecetreasurecruise.fr/Raid/Cesar%20Clown.html';
    case '1879':
      return 'https://onepiecetreasurecruise.fr/Raid/Bartolomeo.html';
    case '1924':
      return 'https://onepiecetreasurecruise.fr/Raid/Silvers%20Rayleigh.html';
    case '1930':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Ener.html';
    case '1943':
      return 'https://onepiecetreasurecruise.fr/Raid/Senor%20Pink.html';
    case '2015':
      return 'https://onepiecetreasurecruise.fr/Raid/Rob%20Lucci%201.html';
    case '2033':
      return 'https://onepiecetreasurecruise.fr/Raid/Monkey%20D.%20Luffy%201.html';
    case '2070':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Boa%20Hancock.html';

    case '2097':
      return 'https://onepiecetreasurecruise.fr/Raid/Roronoa%20Zoro.html';
    case '2158':
      return 'https://onepiecetreasurecruise.fr/Raid/Charlotte%20Cracker.html';
    case '2197':
      return 'https://onepiecetreasurecruise.fr/Raid/Barbe%20Noire%202.html';
    case '2263':
      return 'https://onepiecetreasurecruise.fr/Raid/Don%20Quijote%20Doflamingo%202.html';
    case '2281':
      return 'https://onepiecetreasurecruise.fr/Raid/Judge%20Vinsmoke.html';
    case '2356':
      return 'https://onepiecetreasurecruise.fr/Raid/Arlong.html';
    case '2394':
      return 'https://onepiecetreasurecruise.fr/Raid/Portgas%20D.%20Ace.html';
    case '2398':
      return 'https://onepiecetreasurecruise.fr/Raid/Big%20Emperor.html';
    case '2473':
      return 'https://onepiecetreasurecruise.fr/Raid/Big%20Mom.html';
    case '2504':
      return 'https://onepiecetreasurecruise.fr/Raid/Capone%20Bege.html';
    case '2517':
      return 'https://onepiecetreasurecruise.fr/Raid/Magellan%20et%20Hannyabal.html';
    case '2552':
      return 'https://onepiecetreasurecruise.fr/Raid/Sengoku%20et%20Garp.html';
    case '2559':
      return 'https://onepiecetreasurecruise.fr/Raid/Leo.html';
    case '2642':
      return 'https://onepiecetreasurecruise.fr/Raid/Stampede.html';
    case '2643':
      return 'https://onepiecetreasurecruise.fr/Raid/Stampede.html';
    case '2644':
      return 'https://onepiecetreasurecruise.fr/Raid/Stampede.html';
    case '2645':
      return 'https://onepiecetreasurecruise.fr/Raid/Stampede.html';
    case '2646':
      return 'https://onepiecetreasurecruise.fr/Raid/Stampede.html';
    case '2647':
      return 'https://onepiecetreasurecruise.fr/Raid/Stampede.html';
    case '2670':
      return 'https://onepiecetreasurecruise.fr/Raid/Rob%20Lucci%202.html';
    case '2684':
      return 'https://onepiecetreasurecruise.fr/Raid/Sabo%202.html';
    case '2698':
      return 'https://onepiecetreasurecruise.fr/Raid/Crocodile%201.html';
    case '2707':
      return 'https://onepiecetreasurecruise.fr/Raid/Zorojuro.html';
    case '2711':
      return 'https://onepiecetreasurecruise.fr/Raid/Preparation%20Bartolomeo.html';
    case '2712':
      return 'https://onepiecetreasurecruise.fr/Raid/Preparation%20Roronoa%20Zoro.html';
    case '2714':
      return 'https://onepiecetreasurecruise.fr/Raid/Preparation%20Rob%20Lucci%201.html';
    case '2781':
      return 'https://onepiecetreasurecruise.fr/Raid/Carrot.html';
    case '2795':
      return 'https://onepiecetreasurecruise.fr/Raid/Kobby%20et%20Hermep.html';
    case '2819':
      return 'https://onepiecetreasurecruise.fr/Raid/Shanks%20et%20Mihawk.html';
    case '2846':
      return 'https://onepiecetreasurecruise.fr/Raid/Jewelry%20Bonney.html';
    case '2885':
      return 'https://onepiecetreasurecruise.fr/Raid/CP9.html';
    case '2893':
      return 'https://onepiecetreasurecruise.fr/Raid/Jinbe.html';
    case '2922':
      return 'https://onepiecetreasurecruise.fr/Raid/Kaido.html';
    case '2956':
      return 'https://onepiecetreasurecruise.fr/Raid/Crocodile%202.html';
    case '2987':
      return 'https://onepiecetreasurecruise.fr/Raid/O-Soba%20Mask.html';
    case '3350':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Monkey%20D.%20Garp.html';
    case '3352':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Emporio%20Ivankov.html';
    case '3357':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Nightmare%20Luffy.html';
    case '3359':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Vergo.html';
    case '3368':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Zoro_Mugiwara_56.html';
    case '3376':
      return 'https://onepiecetreasurecruise.fr/Raid/Neo%20Heracles.html';
    case '5052':
      return 'https://onepiecetreasurecruise.fr/Raid/Usopp%20et%20Chopper.html';

    case '3078':
      return 'https://onepiecetreasurecruise.fr/Raid/Brook.html';
    case '3143':
      return 'https://onepiecetreasurecruise.fr/Raid/O-Nami%20et%20Shinobu.html';
    case '3209':
      return 'https://onepiecetreasurecruise.fr/Raid/Luffytaro.html';
    case '3263':
      return 'https://onepiecetreasurecruise.fr/Raid/Marco.html';
    case '3399':
      return 'https://onepiecetreasurecruise.fr/Raid/Baggys_Delivery.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchAmbushUrl(characterId: string): string {
  switch (characterId) {
    case '1258':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Edward%20Newgate.html';
    case '1530':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Cavendish.html';
    case '1846':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Monkey%20D.%20Garp.html';
    case '2006':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Shanks.html';
    case '2283':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Sengoku.html';
    case '2381':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Charlotte%20Linlin.html';
    case '2886':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Neo%20CP9.html';
    case '2923':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Neo%20Kaido.html';
    case '3354':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Neo%20Edward%20Newgate.html';
    case '3172':
      return 'https://onepiecetreasurecruise.fr/Attaque%20ennemie/Hina.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchColosseumUrl(characterId: string): string {
  switch (characterId) {
    case '0777':
      return 'https://onepiecetreasurecruise.fr/Colisee/Lucky%20Roo.html';
    case '0779':
      return 'https://onepiecetreasurecruise.fr/Colisee/Rebecca.html';
    case '0781':
      return 'https://onepiecetreasurecruise.fr/Colisee/Urouge.html';
    case '0804':
      return 'https://onepiecetreasurecruise.fr/Colisee/Hina.html';
    case '0806':
      return 'https://onepiecetreasurecruise.fr/Colisee/Smoker.html';
    case '0831':
      return 'https://onepiecetreasurecruise.fr/Colisee/Basil%20Hawkins.html';
    case '0833':
      return 'https://onepiecetreasurecruise.fr/Colisee/Wiper.html';
    case '0834':
      return 'https://onepiecetreasurecruise.fr/Colisee/Mr%207%20et%20Miss%20Fathersday.html';
    case '0860':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kobby.html';
    case '0862':
      return 'https://onepiecetreasurecruise.fr/Colisee/Alvida.html';
    case '0882':
      return 'https://onepiecetreasurecruise.fr/Colisee/Scratchmen%20Apoo.html';
    case '0884':
      return 'https://onepiecetreasurecruise.fr/Colisee/Dorry.html';
    case '0901':
      return 'https://onepiecetreasurecruise.fr/Colisee/Franky.html';
    case '0903':
      return 'https://onepiecetreasurecruise.fr/Colisee/Broggy.html';
    case '0904':
      return 'https://onepiecetreasurecruise.fr/Colisee/Yokozuna.html';
    case '0924':
      return 'https://onepiecetreasurecruise.fr/Colisee/Eustass%20Kidd%201.html';
    case '0926':
      return 'https://onepiecetreasurecruise.fr/Colisee/Sadi.html';
    case '0927':
      return 'https://onepiecetreasurecruise.fr/Colisee/Doberman.html';
    case '0951':
      return 'https://onepiecetreasurecruise.fr/Colisee/Portgas%20D.%20Ace.html';
    case '0953':
      return 'https://onepiecetreasurecruise.fr/Colisee/Ben%20Beckmann.html';
    case '0983':
      return 'https://onepiecetreasurecruise.fr/Colisee/Vista.html';
    case '0984':
      return 'https://onepiecetreasurecruise.fr/Colisee/Pauly.html';

    case '1016':
      return 'https://onepiecetreasurecruise.fr/Colisee/Capone%20Bege.html';
    case '1018':
      return 'https://onepiecetreasurecruise.fr/Colisee/Barbe%20Brune.html';
    case '1019':
      return 'https://onepiecetreasurecruise.fr/Colisee/Peeply%20Lulu.html';
    case '1041':
      return 'https://onepiecetreasurecruise.fr/Colisee/Joz.html';
    case '1043':
      return 'https://onepiecetreasurecruise.fr/Colisee/Killer.html';
    case '1087':
      return 'https://onepiecetreasurecruise.fr/Colisee/Musshul.html';
    case '1089':
      return 'https://onepiecetreasurecruise.fr/Colisee/Saga.html';
    case '1091':
      return 'https://onepiecetreasurecruise.fr/Colisee/X-Drake.html';
    case '1102':
      return 'https://onepiecetreasurecruise.fr/Colisee/Zephyr.html';
    case '1104':
      return 'https://onepiecetreasurecruise.fr/Colisee/Ain.html';
    case '1106':
      return 'https://onepiecetreasurecruise.fr/Colisee/Bins.html';
    case '1141':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gecko%20Moria.html';
    case '1143':
      return 'https://onepiecetreasurecruise.fr/Colisee/Foxy.html';
    case '1145':
      return 'https://onepiecetreasurecruise.fr/Colisee/Porche.html';
    case '1196':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gan%20Forr.html';
    case '1197':
      return 'https://onepiecetreasurecruise.fr/Colisee/Om.html';
    case '1220':
      return 'https://onepiecetreasurecruise.fr/Colisee/Byrnndi%20World.html';
    case '1222':
      return 'https://onepiecetreasurecruise.fr/Colisee/Little%20Oz%20Junior.html';
    case '1251':
      return 'https://onepiecetreasurecruise.fr/Colisee/Marco.html';
    case '1252':
      return 'https://onepiecetreasurecruise.fr/Colisee/Doma.html';
    case '1253':
      return 'https://onepiecetreasurecruise.fr/Colisee/Shura.html';
    case '1292':
      return 'https://onepiecetreasurecruise.fr/Colisee/Lao%20G.html';
    case '1294':
      return 'https://onepiecetreasurecruise.fr/Colisee/Boa%20Sandersonia.html';
    case '1310':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kinemon.html';
    case '1312':
      return 'https://onepiecetreasurecruise.fr/Colisee/Boa%20Marigold.html';
    case '1338':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kanjuro.html';
    case '1339':
      return 'https://onepiecetreasurecruise.fr/Colisee/Tony-Tony%20Chopper.html';
    case '1341':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gedatsu.html';
    case '1376':
      return 'https://onepiecetreasurecruise.fr/Colisee/Dellinger.html';
    case '1378':
      return 'https://onepiecetreasurecruise.fr/Colisee/Margaret.html';
    case '1401':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gladius.html';
    case '1402':
      return 'https://onepiecetreasurecruise.fr/Colisee/Dolton.html';
    case '1422':
      return 'https://onepiecetreasurecruise.fr/Colisee/Diamante.html';
    case '1423':
      return 'https://onepiecetreasurecruise.fr/Colisee/T.%20Bone.html';
    case '1424':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gyn.html';
    case '1456':
      return 'https://onepiecetreasurecruise.fr/Colisee/Chinjao.html';
    case '1458':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kuro.html';
    case '1460':
      return 'https://onepiecetreasurecruise.fr/Colisee/Miss%20Valentine.html';
    case '1487':
      return 'https://onepiecetreasurecruise.fr/Colisee/Ideo.html';
    case '1489':
      return 'https://onepiecetreasurecruise.fr/Colisee/Krieg.html';
    case '1491':
      return 'https://onepiecetreasurecruise.fr/Colisee/Mr%205.html';
    case '1525':
      return 'https://onepiecetreasurecruise.fr/Colisee/Suleiman.html';
    case '1527':
      return 'https://onepiecetreasurecruise.fr/Colisee/Arlong.html';
    case '1528':
      return 'https://onepiecetreasurecruise.fr/Colisee/Blenheim.html';
    case '1553':
      return 'https://onepiecetreasurecruise.fr/Colisee/Hajrudin.html';
    case '1555':
      return 'https://onepiecetreasurecruise.fr/Colisee/Ryuma.html';
    case '1584':
      return 'https://onepiecetreasurecruise.fr/Colisee/Orlumbus.html';
    case '1586':
      return 'https://onepiecetreasurecruise.fr/Colisee/Hermep.html';
    case '1602':
      return 'https://onepiecetreasurecruise.fr/Colisee/Shiliew.html';
    case '1603':
      return 'https://onepiecetreasurecruise.fr/Colisee/Mc%20Guy.html';
    case '1628':
      return 'https://onepiecetreasurecruise.fr/Colisee/Machvise.html';
    case '1630':
      return 'https://onepiecetreasurecruise.fr/Colisee/Ikaros%20Much.html';
    case '1667':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kyros.html';
    case '1694':
      return 'https://onepiecetreasurecruise.fr/Colisee/Caborage%201.html';
    case '1733':
      return 'https://onepiecetreasurecruise.fr/Colisee/Chavipere.html';
    case '1792':
      return 'https://onepiecetreasurecruise.fr/Colisee/Lucy.html';
    case '1828':
      return 'https://onepiecetreasurecruise.fr/Colisee/Sicilion.html';
    case '1861':
      return 'https://onepiecetreasurecruise.fr/Colisee/Raizo.html';
    case '1863':
      return 'https://onepiecetreasurecruise.fr/Colisee/Neo%20Kinemon.html';
    case '1897':
      return 'https://onepiecetreasurecruise.fr/Colisee/Ener.html ';
    case '1899':
      return 'https://onepiecetreasurecruise.fr/Colisee/Neo%20Killer.html';
    case '1945':
      return 'https://onepiecetreasurecruise.fr/Colisee/Pedro.html';
    case '1976':
      return 'https://onepiecetreasurecruise.fr/Colisee/Neo%20X-Drake.html';
    case '1978':
      return 'https://onepiecetreasurecruise.fr/Colisee/Silvers%20Rayleigh.html';

    case '2017':
      return 'https://onepiecetreasurecruise.fr/Colisee/Neo%20Diamante.html';
    case '2037':
      return 'https://onepiecetreasurecruise.fr/Colisee/Jesus%20Burgess.html';
    case '2111':
      return 'https://onepiecetreasurecruise.fr/Colisee/Eustass%20Kidd%202.html';
    case '2123':
      return 'https://onepiecetreasurecruise.fr/Colisee/Neptune.html';
    case '2163':
      return 'https://onepiecetreasurecruise.fr/Colisee/Charlotte%20Opera.html';
    case '2193':
      return 'https://onepiecetreasurecruise.fr/Colisee/Bartholomew%20Kuma.html';
    case '2249':
      return 'https://onepiecetreasurecruise.fr/Colisee/Charlotte%20Daifuku.html';
    case '2290':
      return 'https://onepiecetreasurecruise.fr/Colisee/Comte%20Ducoq.html';
    case '2323':
      return 'https://onepiecetreasurecruise.fr/Colisee/Charlotte%20Oven.html';
    case '2354':
      return 'https://onepiecetreasurecruise.fr/Colisee/Magellan.html';
    case '2375':
      return 'https://onepiecetreasurecruise.fr/Colisee/Charlotte%20Smoothie.html';
    case '2416':
      return 'https://onepiecetreasurecruise.fr/Colisee/Pica.html';
    case '2471':
      return 'https://onepiecetreasurecruise.fr/Colisee/Charlotte%20Dent-de-chien.html';
    case '2489':
      return 'https://onepiecetreasurecruise.fr/Colisee/Brook.html';
    case '2512':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gecko%20Moria%20EX.html';
    case '2529':
      return 'https://onepiecetreasurecruise.fr/Colisee/Neptune%20EX.html';
    case '2550':
      return 'https://onepiecetreasurecruise.fr/Colisee/Doflamingo%20et%20Trebol.html';
    case '2569':
      return 'https://onepiecetreasurecruise.fr/Colisee/Morley.html';
    case '2611':
      return 'https://onepiecetreasurecruise.fr/Colisee/Jinbe.html';
    case '2649':
      return 'https://onepiecetreasurecruise.fr/Colisee/Trafalgar%20Law.html';
    case '2721':
      return 'https://onepiecetreasurecruise.fr/Colisee/Hody%20Jones.html';
    case '2755':
      return 'https://onepiecetreasurecruise.fr/Colisee/Oz.html';
    case '2785':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kyoshiro.html';
    case '2813':
      return 'https://onepiecetreasurecruise.fr/Colisee/Shutenmaru.html';
    case '2845':
      return 'https://onepiecetreasurecruise.fr/Colisee/Sangoro.html';
    case '2869':
      return 'https://onepiecetreasurecruise.fr/Colisee/Komurasaki.html';
    case '2908':
      return 'https://onepiecetreasurecruise.fr/Colisee/Caborage%202.html';
    case '2953':
      return 'https://onepiecetreasurecruise.fr/Colisee/Borsalino.html';
    case '2990':
      return 'https://onepiecetreasurecruise.fr/Colisee/King.html';
    case '3372':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kobby%20EX.html';

    case '3017':
      return 'https://onepiecetreasurecruise.fr/Colisee/Gyukimaru.html';
    case '3049':
      return 'https://onepiecetreasurecruise.fr/Colisee/Orochi%20Kurozumi.html';
    case '3083':
      return 'https://onepiecetreasurecruise.fr/Colisee/Kikunojo.html';
    case '3110':
      return 'https://onepiecetreasurecruise.fr/Colisee/Page%20One.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchArenaUrl(characterId: string): string {
  switch (characterId) {
    case '3145':
      return 'https://onepiecetreasurecruise.fr/Arene/Kamazo.html';
    case '3189':
      return 'https://onepiecetreasurecruise.fr/Arene/Fransuke.html';
    case '3210':
      return 'https://onepiecetreasurecruise.fr/Arene/X-Drake.html';
    case '3235':
      return 'https://onepiecetreasurecruise.fr/Arene/Brookichi.html';
    case '3269':
      return 'https://onepiecetreasurecruise.fr/Arene/Kawamatsu.html';
    case '3293':
      return 'https://onepiecetreasurecruise.fr/Arene/Sanjuan%20Wolf.html';
    case '3329':
      return 'https://onepiecetreasurecruise.fr/Arene/Shinobu.html';
    case '3361':
      return 'https://onepiecetreasurecruise.fr/Arene/Mihawk.html';
    case '3385':
      return 'https://onepiecetreasurecruise.fr/Arene/Ashura_Doji.html';
    case '3408':
      return 'https://onepiecetreasurecruise.fr/Arene/Cesar.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchTreasureMapUrl(characterId: string): string {
  switch (characterId) {
    case '1808':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Dracule%20Mihawk.html';
    case '1853':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Barbe%20Blanche.html';
    case '1889':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Cavendish.html';
    case '1916':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Monkey%20D.%20Luffy%201.html';
    case '1941':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Portgas%20D.%20Ace.html';
    case '1972':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Sabo.html';
    case '2000':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Sanji%20et%20Zoro.html';
    case '2064':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Kizaru.html';
    case '2109':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Charlotte%20Linlin.html';
    case '2137':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Crocodile.html';
    case '2175':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Jack.html';
    case '2211':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Ener.html';
    case '2261':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Shanks.html';
    case '2299':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Boa%20Hancock.html';
    case '2336':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Trafalgar%20Law.html';
    case '2362':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Nami%201.html';
    case '2387':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Kaido.html';
    case '2443':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Don%20Quijote%20Doflamingo.html';
    case '2469':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Smoothie%20et%20Oven.html';
    case '2510':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Edward%20Weeble.html';
    case '2557':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Shanks%20et%20Beckmann.html';
    case '2583':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Rob%20Lucci.html';
    case '2618':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Sakazuki%20et%20Issho.html';
    case '2659':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Smoker.html';
    case '2690':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Barbe%20Noire.html';
    case '2729':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Basil%20Hawkins.html';
    case '2763':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Nami%202.html';
    case '2792':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/O-Robi.html';
    case '2823':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/X-Drake.html';
    case '2850':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Rebecca%20et%20Viola.html';
    case '2879':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Nefertari%20Vivi.html';
    case '2913':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Shirahoshi.html';
    case '2977':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Monkey%20D.%20Luffy%202.html';

    case '2995':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Zorojuro.html';
    case '3022':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Reiju%20Vinsmoke.html';
    case '3060':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Nami%20et%20Sanji.html';
    case '3094':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Jinbe.html';
    case '3115':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Charlotte%20Pudding.html';
    case '3150':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Eustass%20Kidd.html';
    case '3197':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Monkey%20D.%20Garp.html';
    case '3239':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Queen.html';
    case '3273':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Luffy%20et%20Ace.html';
    case '3297':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Shiliew.html';
    case '3339':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Koala.html';
    case '3368':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Zoro_Mugiwara_56.html';
    case '3389':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Kaido_2.html';
    case '3416':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Stussy.html';
    case '3443':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Monkey_D._Luffy_3.html';

    case '3467':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Robin_Halloween.html';
    case '3491':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Gecko_Moria.html';
    case '3506':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Hyogoro.html';
    case '3527':
      return 'https://onepiecetreasurecruise.fr/Carte_aux_tresors/Tashigi.html';

    case '3460':
      return 'https://onepiecetreasurecruise.fr/Arene/Crocodile.html';
    case '3499':
      return 'https://onepiecetreasurecruise.fr/Arene/Luffy.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchKizunaUrl(characterId: string): string {
  switch (characterId) {
    case '2531':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Zoro%20et%20Sanji.html';
    case '2682':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Boa%20Hancock.html';
    case '2758':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Sabo.html';
    case '2794':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Shirahoshi.html';
    case '2812':
      return 'https://onepiecetreasurecruise.fr/Kizuna/O-Kiku.html';
    case '2831':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Marco%20et%20Ace.html';
    case '2854':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Koala.html';
    case '2890':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Gecko%20Moria.html';
    case '2920':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Big%20Mom.html';
    case '2955':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Carrot.html';
    case '2999':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Luffy%20et%20Hancock.html';
    case '3036':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Kaido.html';
    case '3052':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Baggy.html';
    case '3098':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Sakazuki%20et%20Borsalino.html';
    case '3124':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Eustass%20Kidd.html';
    case '3154':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Basil%20Hawkins.html';
    case '3207':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Bege%20et%20Pets.html';
    case '3213':
      return 'https://onepiecetreasurecruise.fr/Kizuna/O-Nami%20et%20O-Robi.html';

    case '2518':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Bartolomeo.html';
    case '2615':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Charlotte%20Slurp.html';
    case '2630':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Margaret.html';
    case '2733':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Magellan.html';
    case '2891':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Jigoro%20et%20Chien-manchot.html';
    case '3381':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Law%20et%20Chopper.html';
    case '3241':
      return 'https://onepiecetreasurecruise.fr/Kizuna/King.html';
    case '3276':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Don%20Quijote%20Doflamingo.html';
    case '3303':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Charlotte%20Katakuri.html';
    case '3351':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Pirates%20Kuja.html';

    case '3373':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Brook_Mugiwara_56.html';
    case '3397':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Jack.html';
    case '3419':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Ivankov.html';
    case '3450':
      return 'https://onepiecetreasurecruise.fr/Kizuna/O-Lin.html';

    case '3470':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Rebecca.html';
    case '3490':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Don_Krieg.html';
    case '3511':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Zorojuro_Sangoro.html';
    case '3532':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Barbe_Noire.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchKizunaLimitedRareRecruitUrl(characterId: string): string {
  switch (characterId) {
    case '2756':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Tony-Tony%20Chopper.html';
    case '2793':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Monet.html';
    case '2832':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Akainu.html';
    case '2853':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Belo%20Betty.html';
    case '2887':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Nightmare%20Luffy.html';
    case '2888':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Nami.html';
    case '2889':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Brook.html';
    case '2996':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Sandersonia%20et%20Marigold.html';
    case '2997':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Margaret.html';
    case '2998':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Nyon.html';
    case '3120':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Ben%20Beckmann.html';
    case '3121':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Yasopp.html';
    case '3151':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Heart.html';
    case '3152':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Trafalgar%20Law.html';
    case '3153':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Zorojuro.html';
    case '3205':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Charlotte%20Chiffon.html';
    case '3212':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Carrot.html';
    case '3242':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Charlotte%20Slurp.html';
    case '3274':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Crocodile.html';
    case '3301':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Vinsmoke%20Judge.html';
    case '3302':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Brook%202.html';

    case '3370':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Robin_56.html';
    case '3371':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Usopp_56.html';
    case '3372':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Franky_56.html';
    case '3392':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Kinemon.html';
    case '3418':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Bon_Clay.html';
    case '3445':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Robin_Onigashima.html';
    case '3446':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Usopp_Chopper_Onigashima.html';
    case '3447':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Franky_Onigashima.html';

    case '3468':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Viola.html';
    case '3487':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Baggy.html';
    case '3488':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Kuro.html';
    case '3509':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Orochi.html';
    case '3528':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Ace.html';
    case '3529':
      return 'https://onepiecetreasurecruise.fr/Kizuna/Limites/Marco.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchPvpUrl(characterId: string): string {
  switch (characterId) {
    case '2934':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Portgas%20D.%20Ace.html';
    case '2989':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Rob%20Lucci.html';
    case '3016':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Barbe%20Noire.html';
    case '3047':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Ener.html';
    case '3082':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Usoland.html';
    case '3107':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Moria%20et%20Perona.html';
    case '3142':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/X-Drake.html';
    case '3173':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Bartolomeo.html';
    case '3208':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Basil%20Hawkins.html';
    case '3233':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Lucy.html';
    case '3251':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Hannyabal.html';
    case '3285':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Vergo.html';
    case '3332':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Urouge.html';
    case '3374':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Rayleigh.html';
    case '3396':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Ryuma.html';
    case '3415':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Hody.html';
    case '3436':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Oven.html';

    case '3466':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Hermep.html';
    case '3486':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Wyper.html';
    case '3505':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Foxy_Porche.html';
    case '3526':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Wapol.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchPvpRareRecruitUrl(characterId: string): string {
  switch (characterId) {
    case '2931':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/O-Tama.html';
    case '2932':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Joz.html';
    case '2933':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Chavipere.html';
    case '2978':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Sanji%20Vinsmoke.html';
    case '3000':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Stussy.html';
    case '3025':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Barbe%20Blanche.html';
    case '3061':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Calgara%20et%20Norland.html';
    case '3062':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Conis.html';
    case '3063':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Kaku.html';
    case '3095':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Franky.html';
    case '3096':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Leo.html';
    case '3125':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Oz.html';
    case '3130':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Trafalgar%20Law.html';
    case '3163':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/O-Soba%20Mask.html';
    case '3206':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Cavendish.html';
    case '3243':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Soldat%20et%20Rebecca.html';
    case '3292':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Shiliew.html';
    case '3328':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Smoker.html';
    case '3362':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Cracker.html';
    case '3395':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Scopper_Gaban.html';
    case '3409':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Moria.html';
    case '3428':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Arlong.html';

    case '3458':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Smoothie.html';
    case '3459':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Streusen.html';
    case '3480':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Kobby.html';
    case '3501':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Ohm.html';
    case '3521':
      return 'https://onepiecetreasurecruise.fr/Fete_des_pirates/Limites/Groggy_Monsters.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchSpecialCharactersUrl(characterId: string): string {
  switch (characterId) {
    case '2499':
      return 'https://onepiecetreasurecruise.fr/Special/Lame%20noire.html';
    case '2628':
      return 'https://onepiecetreasurecruise.fr/Special/Summer.html';
    case '2668':
      return 'https://onepiecetreasurecruise.fr/Special/Fujitora.html';
    case '2709':
      return 'https://onepiecetreasurecruise.fr/Special/Trafalgar%20Law.html';
    case '2738':
      return 'https://onepiecetreasurecruise.fr/Special/Yonko.html';
    case '2749':
      return 'https://onepiecetreasurecruise.fr/Special/Monkey%20D.%20Luffy%20Halloween.html';
    case '2767':
      return 'https://onepiecetreasurecruise.fr/Special/Doflamingo.html';
    case '2799':
      return 'https://onepiecetreasurecruise.fr/Special/Wapol.html';
    case '2815':
      return 'https://onepiecetreasurecruise.fr/Special/O-Tama.html';
    case '2843':
      return 'https://onepiecetreasurecruise.fr/Special/Perona.html';
    case '2867':
      return 'https://onepiecetreasurecruise.fr/Special/Equipage%20de%20Baggy.html';
    case '2875':
      return 'https://onepiecetreasurecruise.fr/Special/Logue%20Town.html#Straw';
    case '2883':
      return 'https://onepiecetreasurecruise.fr/Special/Stampede1.html';
    case '2884':
      return 'https://onepiecetreasurecruise.fr/Special/Stampede2.html';
    case '2915':
      return 'https://onepiecetreasurecruise.fr/Special/Pyro-fruit.html';
    case '2916':
      return 'https://onepiecetreasurecruise.fr/Special/Pyro-fruit.html#Bartolomeo';
    case '2918':
      return 'https://onepiecetreasurecruise.fr/Special/Pyro-fruit.html#Diamante';

    case '2975':
      return 'https://onepiecetreasurecruise.fr/Special/Chasse%20au%20tresor.html';
    case '2976':
      return 'https://onepiecetreasurecruise.fr/Special/Chasse%20au%20tresor.html';
    case '2988':
      return 'https://onepiecetreasurecruise.fr/Special/O-Toko.html';
    case '3004':
      return 'https://onepiecetreasurecruise.fr/Special/Kuma%20et%20Moria.html';
    case '3045':
      return 'https://onepiecetreasurecruise.fr/Fortnight/Charlotte%20Linlin%20Estival.html';
    case '3046':
      return 'https://onepiecetreasurecruise.fr/Fortnight/Charlotte%20Pudding%20Estival.html';
    case '3050':
      return 'https://onepiecetreasurecruise.fr/Special/Summer2.html';
    case '3186':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Cruise.html';
    case '3187':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Cruise.html';
    case '3188':
      return 'https://onepiecetreasurecruise.fr/Special/Guerre%20maritime.html';
    case '5065':
      return 'https://onepiecetreasurecruise.fr/Special/Seigneur%20de%20la%20cote.html';

    case '2855':
      return 'https://onepiecetreasurecruise.fr/Special/Sweetie%20Party.html';
    case '3032':
      return 'https://onepiecetreasurecruise.fr/Special/Rassemblement.html';
    case '3033':
      return 'https://onepiecetreasurecruise.fr/Special/Rassemblement.html';
    case '3034':
      return 'https://onepiecetreasurecruise.fr/Special/Rassemblement.html';
    case '3035':
      return 'https://onepiecetreasurecruise.fr/Special/Rassemblement.html';
    case '3086':
      return 'https://onepiecetreasurecruise.fr/Special/Partie%20de%20the.html';
    case '3108':
      return 'https://onepiecetreasurecruise.fr/Special/Crocodile%20et%20Robin.html';
    case '3109':
      return 'https://onepiecetreasurecruise.fr/Special/Crocodile%20et%20Robin.html';
    case '3144':
      return 'https://onepiecetreasurecruise.fr/Special/Big%20Mom%20VS%20Kaido.html';
    case '3171':
      return 'https://onepiecetreasurecruise.fr/Special/Kobby.html';
    case '3222':
      return 'https://onepiecetreasurecruise.fr/Special/Hiyori%20et%20Toko.html';
    case '3223':
      return 'https://onepiecetreasurecruise.fr/Special/Hiyori%20et%20Toko.html';
    case '3247':
      return 'https://onepiecetreasurecruise.fr/Special/Grand%20corsaire.html#Weeble';
    case '3262':
      return 'https://onepiecetreasurecruise.fr/Special/Barbe%20Blanche.html';

    case '3286':
      return 'https://onepiecetreasurecruise.fr/Special/Equipage%20de%20Barbe%20Noire.html#Burgess';
    case '3287':
      return 'https://onepiecetreasurecruise.fr/Special/Equipage%20de%20Barbe%20Noire.html#Shot';
    case '3304':
      return 'https://onepiecetreasurecruise.fr/Special/Chasse%20au%20tresor%202.html';
    case '3305':
      return 'https://onepiecetreasurecruise.fr/Special/Chasse%20au%20tresor%202.html';
    case '3346':
      return 'https://onepiecetreasurecruise.fr/Special/Onigashima.html';
    case '3353':
      return 'https://onepiecetreasurecruise.fr/Special/Teach.html';
    case '3382':
      return 'https://onepiecetreasurecruise.fr/Special/Denjiro.html';
    case '3425':
      return 'https://onepiecetreasurecruise.fr/Special/Morgans_Anlord.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchSupportsSpecialCharactersUrl(characterId: string): string {
  switch (characterId) {
    case '2388':
      return 'https://onepiecetreasurecruise.fr/Soutien/Makino.html';
    case '2389':
      return 'https://onepiecetreasurecruise.fr/Soutien/Tsuru.html';
    case '2390':
      return 'https://onepiecetreasurecruise.fr/Soutien/Conis.html';
    case '2391':
      return 'https://onepiecetreasurecruise.fr/Soutien/Sabo.html';
    case '2392':
      return 'https://onepiecetreasurecruise.fr/Soutien/Icebarg.html';
    case '2435':
      return 'https://onepiecetreasurecruise.fr/Soutien/Dagama.html';
    case '2436':
      return 'https://onepiecetreasurecruise.fr/Soutien/Orlumbus.html';
    case '2460':
      return 'https://onepiecetreasurecruise.fr/Soutien/Charlotte%20Oven.html';
    case '2461':
      return 'https://onepiecetreasurecruise.fr/Soutien/Mysterioms.html';
    case '2501':
      return 'https://onepiecetreasurecruise.fr/Soutien/Koshiro.html';
    case '2502':
      return 'https://onepiecetreasurecruise.fr/Soutien/Streusen.html';
    case '2772':
      return 'https://onepiecetreasurecruise.fr/Special/Classement%20Daifuku.html#Wanda';
    case '2800':
      return 'https://onepiecetreasurecruise.fr/Soutien/Charlotte%20Brulee.html';
    case '2851':
      return 'https://onepiecetreasurecruise.fr/Soutien/Carrot.html';
    case '5053':
      return 'https://onepiecetreasurecruise.fr/Soutien/Sengoku.html';

    case '3159':
      return 'https://onepiecetreasurecruise.fr/Soutien/Charlotte%20Daifuku.html';
    case '3160':
      return 'https://onepiecetreasurecruise.fr/Soutien/Cesar%20Clown.html';
    case '3161':
      return 'https://onepiecetreasurecruise.fr/Soutien/Shutenmaru.html';
    case '3162':
      return 'https://onepiecetreasurecruise.fr/Soutien/Gecko%20Moria.html';
    case '3200':
      return 'https://onepiecetreasurecruise.fr/Soutien/Nico%20Robin.html';
    case '3201':
      return 'https://onepiecetreasurecruise.fr/Soutien/Tony-Tony%20Chopper.html';
    case '3265':
      return 'https://onepiecetreasurecruise.fr/Soutien/Mr%201%20et%20Miss%20Doublefinger.html';
    case '3266':
      return 'https://onepiecetreasurecruise.fr/Soutien/Mr%203%20et%20Miss%20Goldenweek.html';
    case '3267':
      return 'https://onepiecetreasurecruise.fr/Soutien/Mr%204%20et%20Miss%20Merrychristmas.html';
    case '3268':
      return 'https://onepiecetreasurecruise.fr/Soutien/Mr%205%20et%20Miss%20Valentine.html';

    case '3465':
      return 'https://onepiecetreasurecruise.fr/Soutien/Mihawk.html';
    case '3500':
      return 'https://onepiecetreasurecruise.fr/Soutien/Ace.html';
    case '3530':
      return 'https://onepiecetreasurecruise.fr/Soutien/Sabo_jeune.html';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}

function getFrenchPeriodsLrrCharactersUrl(characterId: string): string {
  switch (characterId) {
    // case '0438':
    //   return 'aaaaaaaaaa';
    // case '0440':
    //   return 'aaaaaaaaaa';
    // case '0498':
    //   return 'aaaaaaaaaa';
    // case '0513':
    //   return 'aaaaaaaaaa';
    // case '0532':
    //   return 'aaaaaaaaaa';
    // case '0534':
    //   return 'aaaaaaaaaa';
    // case '0536':
    //   return 'aaaaaaaaaa';
    // case '0548':
    //   return 'aaaaaaaaaa';
    // case '0783':
    //   return 'aaaaaaaaaa';
    // case '0829':
    //   return 'aaaaaaaaaa';
    // case '0856':
    //   return 'aaaaaaaaaa';
    // case '0858':
    //   return 'aaaaaaaaaa';
    // case '0916':
    //   return 'aaaaaaaaaa';
    // case '0922':
    //   return 'aaaaaaaaaa';
    // case '0945':
    //   return 'aaaaaaaaaa';
    // case '0976':
    //   return 'aaaaaaaaaa';
    // case '1008':
    //   return 'aaaaaaaaaa';
    // case '1021':
    //   return 'aaaaaaaaaa';
    // case '1054':
    //   return 'aaaaaaaaaa';
    // case '1093':
    //   return 'aaaaaaaaaa';
    // case '1100':
    //   return 'aaaaaaaaaa';
    // case '1135':
    //   return 'aaaaaaaaaa';
    // case '1161':
    //   return 'aaaaaaaaaa';
    // case '1194':
    //   return 'aaaaaaaaaa';
    // case '1214':
    //   return 'aaaaaaaaaa';
    // case '1249':
    //   return 'aaaaaaaaaa';
    // case '1260':
    //   return 'aaaaaaaaaa';
    // case '1262':
    //   return 'aaaaaaaaaa';
    // case '1264':
    //   return 'aaaaaaaaaa';
    // case '1266':
    //   return 'aaaaaaaaaa';
    // case '1296':
    //   return 'aaaaaaaaaa';
    // case '1308':
    //   return 'aaaaaaaaaa';
    // case '1336':
    //   return 'aaaaaaaaaa';
    // case '1355':
    //   return 'aaaaaaaaaa';
    // case '1382':
    //   return 'aaaaaaaaaa';
    // case '1395':
    //   return 'aaaaaaaaaa';
    // case '1420':
    //   return 'aaaaaaaaaa';
    // case '1430':
    //   return 'aaaaaaaaaa';
    // case '1454':
    //   return 'aaaaaaaaaa';
    // case '1467':
    //   return 'aaaaaaaaaa';
    // case '1514':
    //   return 'aaaaaaaaaa';
    // case '1524':
    //   return 'aaaaaaaaaa';
    // case '1545':
    //   return 'aaaaaaaaaa';
    // case '1568':
    //   return 'aaaaaaaaaa';
    // case '1590':
    //   return 'aaaaaaaaaa';
    // case '1592':
    //   return 'aaaaaaaaaa';
    // case '1674':
    //   return 'aaaaaaaaaa';
    // case '1731':
    //   return 'aaaaaaaaaa';
    // case '1912':
    //   return 'aaaaaaaaaa';
    // case '1914':
    //   return 'aaaaaaaaaa';
    // case '2039':
    //   return 'aaaaaaaaaa';
    // case '2041':
    //   return 'aaaaaaaaaa';
    // case '2084':
    //   return 'aaaaaaaaaa';
    // case '2086':
    //   return 'aaaaaaaaaa';
    // case '2191':
    //   return 'aaaaaaaaaa';
    // case '2213':
    //   return 'aaaaaaaaaa';
    // case '2287':
    //   return 'aaaaaaaaaa';
    // case '2401':
    //   return 'aaaaaaaaaa';
    // case '2403':
    //   return 'aaaaaaaaaa';
    // case '2405':
    //   return 'aaaaaaaaaa';
    // case '2410':
    //   return 'aaaaaaaaaa';
    // case '2412':
    //   return 'aaaaaaaaaa';
    // case '2414':
    //   return 'aaaaaaaaaa';
    // case '2496':
    //   return 'aaaaaaaaaa';
    // case '2498':
    //   return 'aaaaaaaaaa';
    // case '2546':
    //   return 'aaaaaaaaaa';
    // case '2548':
    //   return 'aaaaaaaaaa';
    // case '2585':
    //   return 'aaaaaaaaaa';
    // case '2587':
    //   return 'aaaaaaaaaa';
    // case '2620':
    //   return 'aaaaaaaaaa';
    // case '2622':
    //   return 'aaaaaaaaaa';
    // case '2624':
    //   return 'aaaaaaaaaa';
    // case '2626':
    //   return 'aaaaaaaaaa';
    // case '2663':
    //   return 'aaaaaaaaaa';
    // case '2664':
    //   return 'aaaaaaaaaa';
    case '2734':
      return 'https://onepiecetreasurecruise.fr/Special/Yonko.html#Luffy';
    case '2735':
      return 'https://onepiecetreasurecruise.fr/Special/Yonko.html#Bege';
    case '2736':
      return 'https://onepiecetreasurecruise.fr/Special/Yonko.html#Kidd';
    case '2764':
      return 'https://onepiecetreasurecruise.fr/Special/Doflamingo.html#Corazon';
    case '2765':
      return 'https://onepiecetreasurecruise.fr/Special/Doflamingo.html#Viola';
      // case '2769':
      //   return 'aaaaaaaaaa';
      // case '2771':
      //   return 'aaaaaaaaaa';
      // case '2798':
      return 'https://onepiecetreasurecruise.fr/Special/Wapol.html#Kureluk';
    case '2816':
      return 'https://onepiecetreasurecruise.fr/Special/O-Tama.html#Tsuru';
    case '2817':
      return 'https://onepiecetreasurecruise.fr/Special/O-Tama.html#Hitetsu';
    case '2825':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey.html#Hancock';
    case '2827':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey.html#Mihawk';
    case '2829':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey.html#Crocodile';
    case '2856':
      return 'https://onepiecetreasurecruise.fr/Special/Sweetie%20Party.html#Smoothie';
    case '2857':
      return 'https://onepiecetreasurecruise.fr/Special/Sweetie%20Party.html#Flampee';
    case '2858':
      return 'https://onepiecetreasurecruise.fr/Special/Sweetie%20Party.html#Brulee';
    case '2870':
      return 'https://onepiecetreasurecruise.fr/Special/Logue%20Town.html#Luffy';
    case '2871':
      return 'https://onepiecetreasurecruise.fr/Special/Logue%20Town.html#Zoro';
    case '2872':
      return 'https://onepiecetreasurecruise.fr/Special/Logue%20Town.html#Nami';
    case '2873':
      return 'https://onepiecetreasurecruise.fr/Special/Logue%20Town.html#Usopp';
    case '2874':
      return 'https://onepiecetreasurecruise.fr/Special/Logue%20Town.html#Sanji';
    // case '2973':
    //   return 'aaaaaaaaaa';
    // case '2974':
    //   return 'aaaaaaaaaa';
    // case '3361':
    //   return 'aaaaaaaaaa';

    case '3023':
      return 'https://onepiecetreasurecruise.fr/Special/Enies%20Lobby.html#Chopper';
    case '3024':
      return 'https://onepiecetreasurecruise.fr/Special/Enies%20Lobby.html#Robin';
    case '3075':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey%202.html#Rebecca';
    case '3077':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey%202.html#Vivi';
    case '3085':
      return 'https://onepiecetreasurecruise.fr/Special/Partie%20de%20the.html#Slurp';
    case '3122':
      return 'https://onepiecetreasurecruise.fr/Special/Ichiban%20Kuji.html#Luffy';
    case '3123':
      return 'https://onepiecetreasurecruise.fr/Special/Ichiban%20Kuji.html#Nami';
    case '3127':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey%203.html#Marco';
    case '3129':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey%203.html#Ace';
    case '3198':
      return 'https://onepiecetreasurecruise.fr/Special/Franky%20et%20Brook.html#Franky';
    case '3199':
      return 'https://onepiecetreasurecruise.fr/Special/Franky%20et%20Brook.html#Brook';
    case '3219':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey%204.html#Koala';
    case '3221':
      return 'https://onepiecetreasurecruise.fr/Special/World%20Journey%204.html#Sabo';
    case '3246':
      return 'https://onepiecetreasurecruise.fr/Special/Grand%20corsaire.html#Hancock';
    case '3248':
      return 'https://onepiecetreasurecruise.fr/Special/Grand%20corsaire.html#Baggy';
    case '3249':
      return 'https://onepiecetreasurecruise.fr/Special/Grand%20corsaire.html#Mihawk';

    default:
      return getOptcDbDefaultUrl(characterId);
  }
}
