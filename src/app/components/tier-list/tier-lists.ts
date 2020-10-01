import { legends } from '../../data/tier-lists/legends';
// import { legendsSixPlus } from '../../data/tier-lists/legends_sixplus';
import { lrrs } from '../../data/tier-lists/lrr';
import { pvps } from '../../data/tier-lists/pvp';
import { soutiens } from '../../data/tier-lists/soutiens';
import { colisees } from '../../data/tier-lists/colisees';
import { raids } from '../../data/tier-lists/raids';
import { tms } from '../../data/tier-lists/tm';
import { kizunas } from '../../data/tier-lists/kizuna';
import { ambushs } from '../../data/tier-lists/ambush';
import { TierList } from '../../models/tier-list';
import { rrs } from '../../data/tier-lists/rr';

const formatedLegends = legends.map((l) => `legend/sixstars/${l}`);
// const formatedSixPlusLegends = legendsSixPlus.map((l) => `legend/sixplus/${l}`);
const allLegends = [...formatedLegends];

const formatedRrs = rrs.map((l) => `rr/${l}`);
const formatedLrrs = lrrs.map((l) => `lrr/${l}`);
const formatedColosseums = colisees.map((l) => `colosseum/${l}`);
const formatedRaids = raids.map((l) => `raid/${l}`);
const formatedTms = tms.map((l) => `tm/${l}`);
const formatedPvps = pvps.map((l) => `pvp/${l}`);
const formatedSupports = soutiens.map((l) => `support/${l}`);
const formatedKizunas = kizunas.map((l) => `kizuna/${l}`);
const formatedAmbushes = ambushs.map((l) => `ambush/${l}`);

export const tierLists: TierList[] = [
  {
    name: 'Légendes',
    characters: allLegends,
  },
  {
    name: 'Personnages RR',
    characters: formatedRrs,
  },
  {
    name: 'Personnages Colisées',
    characters: formatedColosseums,
  },
  {
    name: 'Personnages Raids',
    characters: formatedRaids,
  },
  {
    name: 'Personnages TM',
    characters: formatedTms,
  },
  {
    name: 'Personnages PVP',
    characters: formatedPvps,
  },
  {
    name: 'Personnages LRR',
    characters: formatedLrrs,
  },
  {
    name: 'Personnages Spéciaux (soutiens)',
    characters: formatedSupports,
  },
  {
    name: 'Personnages Kizuna',
    characters: formatedKizunas,
  },
  {
    name: 'Personnages Ambush',
    characters: formatedAmbushes,
  },
  {
    name: 'Personnages F2P',
    characters: [
      ...formatedTms,
      ...formatedColosseums,
      ...formatedRaids,
      ...formatedKizunas,
      ...formatedAmbushes,
    ],
  },
  {
    name: 'Personnages Premium',
    characters: [
      ...formatedRrs,
      ...formatedLrrs,
      ...formatedPvps,
      ...allLegends,
    ],
  },
  {
    name: 'Personnages au complet',
    characters: [
      ...formatedTms,
      ...formatedColosseums,
      ...formatedRaids,
      ...formatedKizunas,
      ...formatedAmbushes,
      ...formatedRrs,
      ...formatedLrrs,
      ...formatedPvps,
      ...allLegends,
    ],
  },
];
