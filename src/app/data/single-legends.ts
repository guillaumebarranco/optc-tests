import { Legend } from '../models/legend.interface';
import { singleLegendsStr } from './single-legends/single-legends-str';
import { singleLegendsQck } from './single-legends/single-legends-qck';
import { singleLegendsDex } from './single-legends/single-legends-dex';
import { singleLegendsPsy } from './single-legends/single-legends-psy';
import { singleLegendsInt } from './single-legends/single-legends-int';

export const singleLegends: Legend[] = [
  ...singleLegendsStr,
  ...singleLegendsQck,
  ...singleLegendsDex,
  ...singleLegendsPsy,
  ...singleLegendsInt,
];
