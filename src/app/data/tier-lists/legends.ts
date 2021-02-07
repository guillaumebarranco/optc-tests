export const legends2015 = ['0261', '0367', '0416', '0459', '0530'];

export const legends2016 = [
  '0562',
  '0649',
  '0669',
  '0718',
  '0720',
  '0748',
  '0870',
  '0935',
  '1001',
  '1035',
  '1045',
  '1085',
  '1121',
  '1123',
  '1240',
];

export const legends2017 = [
  '1192',
  '1268',
  '1314',
  '1362',
  '1391',
  '1404',
  '1434',
  '1473',
  '1532',
  '1571',
  '1588',
  '1610',
  '1652',
  '1698',
  '1747',
  '1751',
  '1763',
];

export const legends2018 = [
  '1794',
  '1832',
  '1869',
  '1883',
  '1910',
  '1935',
  '1951',
  '1985',
  '2007',
  '2023',
  '2025',
  '2074',
  '2076',
  '2099',
  '2113',
  '2148',
  '2251',
  '5014',
];

export const legends2019 = [
  '2181',
  '2201',
  '2234',
  '2236',
  '2265',
  '2302',
  '2330',
  '2338',
  '2365',
  '2418',
  '2433',
  '2441',
  '2446',
  '2465',
  '2475',
  '2477',
  '2534',
  '2536',
  '2561',
  '2577',
  '2601',
  '2603',
];

export const legends2020 = [
  '2651',
  '2672',
  '2686',
  '2700',
  '2741',
  '2774',
  '2776',
  '2797',
  '2802',
  '2804',
  '2835',
  '2837',
  '2860',
  '2862',
  '2895',
  '2897',
  '2930',
  '2958',
  '2960',
  '2962',
  '2964',
  '2980',
  '2982',
  '3027',
  '3385',
  '3007',
  '3009',
  '3038',
  '3175',
  '3177',
];

export const legends2021 = ['3100', '3102', '3118'];

export const japLegends = [
  '3065',
  '3071',
  '3073',
  '3135_1',
  '3135_2',
  '3164',
  '3166',
  '3203',
  '3225',
  '3227',
];

export const legends = [
  ...legends2015,
  ...legends2016,
  ...legends2017,
  ...legends2018,
  ...legends2019,
  ...legends2020,
  ...legends2021,
];

export const sixStarsLegendsWithSixPlusVersion = [
  ...legends2015,
  ...legends2016.filter(l => l !== '1121'), // Log Luffy doesn't have 6+ yet
  ...legends2017,
  '1794',
  '1832',
  '1869',
  '1935',
  '1951',
  '2074',
  '2076',
  '2113',
  '2251',
  '2234',
  '2651',
];
