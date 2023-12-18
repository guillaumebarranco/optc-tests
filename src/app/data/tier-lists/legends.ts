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

export const legends2021 = [
  '3100',
  '3102',
  '3118',
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
  '3245',
  '3253_1',
  '3253_2',
  '3278',
  '3280',
  '3282',
  '3300',
  '3307',
  '3334',
  '3336',
  '3338',
  '3349',
  '3355_1',
  '3355_2',
  '3357',
  '3364',
  '3376',
  '3378',
  '3391',
  '3398',
  '3403',
  '3405',
  '3411',
  '3422',
  '3427',
  '3429',
  '3433',
  '3452',
  '3454',
  '3462',
  '3472',
  '3473',
  '3483',
  '3493',
  '3495',
  '3508',
];
export const legends2022 = [
  '3513',
  '3515',
  '3523',
  '3534',
  '3536',
  '3543',
  '3553',
  '3555',
  '3563',
  '3574',
  '3576',
  '3582',
  '3590',
  '3595',
  '3597',
  '3607',
  '3609',
  '3611',
  '3613',
  '3629',
  '3631',
  '3637',
  '3641',
  '3650',
  '3652',
  '3654',
  '3670',
  '3674',
  '3676',
  '3680',
  '3682',
  '3695',
  '3697',
  '3706',
  '3708',
  '3723',
  '3730',
  '3735',
  '3741',
  '3745',
  '3752',
  '3755',
  '3766',
  '3772',
  '3775',
  '3780',
  '3788_1',
  '3788_2',
  '3790',
  '3792',
];

export const legends2023 = [
  '3809',
  '3811',
  '3824',
  '3830',
  '3832',
  '3839',
  '3850',
  '3852',
  '3859',
  '3870',
  '3878',
  '3880',
  '3889',
  '3891',
  '3896',
  '3898',
  '3905',
  '3908',
  '3910',
  '3917',
  '3922',
  '3924',
  '3933',
  '3944',
  '3948',
  '3954',
  '3956',
  '3959',
  '3967',
  '3971',
  '3973',
  '3984',
  '3993',
  '3995',
  '4003',
  '4008',
  '4011',
  '4012',
  '4020',
  '4029',
  '4041',
  '4043',
  '4048',
  '4050',
  '4054',
];

export const japLegends = [];

export const legends = [
  ...legends2015,
  ...legends2016,
  ...legends2017,
  ...legends2018,
  ...legends2019,
  ...legends2020,
  ...legends2021,
  ...legends2022,
  ...legends2023,
];

export const sixStarsLegendsWithSixPlusVersion = [
  ...legends2015,
  ...legends2016.filter(l => l !== '1121'), // Log Luffy doesn't have 6+ yet
  ...legends2017,
  ...legends2018.filter(
    l => l !== '1985' && l !== '2007' && l !== '2099' && l !== '5014'
  ), //Luffy/Ace, Shanks V2, Tesoro and Kung-fu Luffy don't have 6+ yet
  ...legends2019.filter(
    l =>
      l !== '2330' &&
      l !== '2418' &&
      l !== '2446' &&
      l !== '2534' &&
      l !== '2536' &&
      l !== '2561' &&
      l !== '2601' &&
      l !== '2603'
  ),
  ...legends2020.filter(
    l =>
      l !== '2672' &&
      l !== '2700' &&
      l !== '2802' &&
      l !== '2804' &&
      l !== '2835' &&
      l !== '2860' &&
      l !== '2895' &&
      l !== '2897' &&
      l !== '2930' &&
      l !== '2958' &&
      l !== '2962' &&
      l !== '2982' &&
      l !== '3027' &&
      l !== '3385' &&
      l !== '3007' &&
      l !== '3038'
  ),
  ...legends2021.filter(
    l =>
      l !== '3100' &&
      l !== '3102' &&
      l !== '3118' &&
      l !== '3065' &&
      l !== '3073' &&
      l !== '3135_1' &&
      l !== '3135_2' &&
      l !== '3164' &&
      l !== '3166' &&
      l !== '3203' &&
      l !== '3225' &&
      l !== '3227' &&
      l !== '3245' &&
      l !== '3253_1' &&
      l !== '3253_2' &&
      l !== '3278' &&
      l !== '3280' &&
      l !== '3282' &&
      l !== '3300' &&
      l !== '3307' &&
      l !== '3336' &&
      l !== '3338' &&
      l !== '3349' &&
      l !== '3355_1' &&
      l !== '3355_2' &&
      l !== '3357' &&
      l !== '3364' &&
      l !== '3376' &&
      l !== '3378' &&
      l !== '3391' &&
      l !== '3398' &&
      l !== '3403' &&
      l !== '3405' &&
      l !== '3411' &&
      l !== '3422' &&
      l !== '3427' &&
      l !== '3429' &&
      l !== '3433' &&
      l !== '3452' &&
      l !== '3454' &&
      l !== '3462' &&
      l !== '3472' &&
      l !== '3473' &&
      l !== '3483' &&
      l !== '3493' &&
      l !== '3495' &&
      l !== '3508'
  ),
];
