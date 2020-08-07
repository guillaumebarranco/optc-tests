import { Legend } from '../../models/legend.interface';
import { CharacterClass } from '../../models/character-class.interface';
import { PotentialAbility } from '../../models/potential-ability';

export const singleLegendsQck: Legend[] = [
  // Soba Mask
  {
    id: '2804',
    title: null,
    name: 'O-Soba Mask',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/eXxHck5.png',
      sixStars: 'https://i.imgur.com/wyK6tw4.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Cuisinier de l'équipage de Chapeau de paille. Grâce à sa Raid Suit, un bijou de technologie Germa permettant de devenir invisible en projetant sur son corps tout son environnement, il remporte sur Page One une victoire écrasante.`,
      type: 'QCK',
      classes: [CharacterClass.Tenace, CharacterClass.Libre],
      combo: 5,
      hp: {
        initial: 3622,
        afterLimitBreak: 3972,
        afterLimitBreakPlus: 4272,
      },
      atk: {
        initial: 1597,
        afterLimitBreak: 1797,
        afterLimitBreakPlus: 1997,
      },
      rcv: {
        initial: 264,
        afterLimitBreak: 344,
        afterLimitBreakPlus: 384,
      },
      captainAbility: `Réduit le temps de chargement des coups spéciaux de tous les personnages d'un tour au début de la quête, multiplie l'ATK de tous les personnages par 4,25 s'ils ont un cercle [TND], sinon par 3,5, rend les cercles [TND] avantageux pour tous les personnages et augmente les chances d'apparition des cercles [TND].`,
      captainAbilityAfterLimitBreakPlus: `Réduit le temps de chargement des coups spéciaux de tous les personnages d'un tour au début de la quête, multiplie l'ATK de tous les personnages par 4,25 s'ils ont un cercle [TND], sinon par 3,5, rend les cercles [TND] avantageux pour tous les personnages et augmente grandement les chances d'apparition des cercles [TND].
      `,
      captainAbilityAdditionnalInformation: null,
      captainAction: `Le personnage devient transparent pendant 3 tours, l'immunisant contre les effets négatifs. Annule les effets défensifs dont bénéficient les ennemis contre les ATK normales du personnage et ajoute 500 fois son ATK en dégâts additionnels non élémentaires pour le personnage.`,
      captainActionTurns: 6,
      special: `Change les cercles de tous les personnages (cercles [BLK] inclus) en cercles [TND], multiplie l’ATK de tous les personnages par 1,75 pendant un tour et si le coup spécial "Assaut - O-Soba Mask" est utilisé une nouvelle fois lors du même tour, multiplie l’ATK de tous les personnages par 2,5 pendant un tour.`,
      specialTurns: {
        initial: 16,
        max: 11,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 0,
      },
      specialWithStages: null,
      crewmateAbilities: [
        {
          ability: `Si un autre personnage utilise son coup spécial, réduit le temps de chargement du coup spécial du personnage de 4 tours.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [TND] avantageux pour tous les personnages.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: 'https://i.imgur.com/pZfA2vh.png',
        sixStarsPicture: 'https://i.imgur.com/mdZnRbI.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 20% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
      {
        type: PotentialAbility.SOIN_URGENCE,
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 20%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 25%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 30%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 35%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
        ],
      },
      {
        type: PotentialAbility.SOIN_IMPOSSIBLE,
        icon: '',
        effects: [
          `Réduit la durée de “Soin impossible” de 1 tour.`,
          `Réduit la durée de “Soin impossible” de 3 tours.`,
          `Réduit la durée de “Soin impossible” de 5 tours.`,
          `Réduit la durée de “Soin impossible” de 7 tours.`,
          `Réduit la durée de “Soin impossible” de 10 tours.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0101.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0301.png',
      'https://i.imgur.com/83DcaEZ.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Usopp', 'Franky'],
      levels: [
        `Multiplie l'ATK de tous les personnages par 1,1 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK de tous les personnages par 1,1 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK de tous les personnages par 1,2 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK de tous les personnages par 1,2 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK de tous les personnages par 1,3 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
      ],
    },
    batch: `Wano`,
  },
  // Hancock V1
  {
    id: '0416',
    title: 'Sept grands corsaires',
    name: 'Boa Hancock',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/kP7Cbdd.png',
      sixStars: 'https://i.imgur.com/V8HEWr6.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Capitaine de l'équipage des pirates Kuja, elle est l'une des sept grands corsaires. Elle dispose des pouvoirs du Fruit de la Passion et peut transformer celui qui l'admire en pierre. L'aînée des gorgones. Enfant, elle fut l'esclave d'un noble.`,
      type: 'QCK',
      classes: [CharacterClass.Cogneur, CharacterClass.Libre],
      combo: 4,
      hp: {
        initial: 2860,
        afterLimitBreak: 3380,
        afterLimitBreakPlus: 3580,
      },
      atk: {
        initial: 1320,
        afterLimitBreak: 1530,
        afterLimitBreakPlus: 1680,
      },
      rcv: {
        initial: 515,
        afterLimitBreak: 585,
        afterLimitBreakPlus: 705,
      },
      captainAbility: `Multiplie l'ATK des personnages de type QCK et PSY par 2,75 et la RCV par 1,5 si les HP sont au-dessus de 70%.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Restaure les HP avec 15 fois sa RCV et retarde toutes les attaques ennemies d'un tour.`,
      specialTurns: {
        initial: 17,
        max: 13,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 4,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 30 en HP, ATK et RCV pour les personnages de type QCK et PSY.`,
          needLimitBreak: true,
        },
        {
          ability: `Ajoute 75 en ATK pour les personnages de type QCK et PSY.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0415.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0416.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.STR_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type STR de 1%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 2%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 3%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 4%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 5%.`,
        ],
      },
      {
        type: PotentialAbility.INT_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type INT de 1%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 2%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 3%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 5%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 7%.`,
        ],
      },
      {
        type: PotentialAbility.REDUCTION_SPECIAL,
        icon: '',
        effects: [
          `Réduit le temps de chargement de son coup spécial de 1 tour au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 2 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 3 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 4 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 5 tours au début de la quête.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0094.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0096.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: [
        'Monkey D. Luffy',
        'Boa Sandersonia',
        'Boa Marigold',
      ],
      levels: [
        `?`,
        `?`,
        `?`,
        `?`,
        `Restaure 2 500 HP et change les cercles des personnages de la colonne de gauche si le personnage soutenu utilise son coup spécial (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Hancock V1 6+
  {
    id: '1445',
    title: 'Princesse Serpent',
    name: 'Boa Hancock',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/7TiM1tY.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Capitaine de l'équipage des Kuja et membre de l'ordre des sept grands corsaires. Sur la demande de Luffy, qu'elle a rencontré peu après l'incident des dragons célestes et dont elle est tombée amoureuse, elle décide de participer à la guerre au sommet afin de berner le Gouvernement mondial.`,
      type: 'QCK',
      classes: [CharacterClass.Libre, CharacterClass.Tireur],
      combo: 4,
      hp: {
        initial: 3002,
        afterLimitBreak: 3502,
        afterLimitBreakPlus: 3702,
      },
      atk: {
        initial: 1480,
        afterLimitBreak: 1690,
        afterLimitBreakPlus: 1840,
      },
      rcv: {
        initial: 507,
        afterLimitBreak: 577,
        afterLimitBreakPlus: 692,
      },
      captainAbility: `Multiplie l'ATK des personnages de type QCK et PSY selon les HP de l'équipe au début du tour et si les HP sont en-dessous de 50%, multiplie la RCV des personnages de type QCK et PSY par 1,5.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: `Par 2,75 si les HP de l'équipe sont au maximum et par 2,25 s'il ne reste qu'un HP à l'équipe.`,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Multiplie l'ATK et la RCV des personnages de type QCK et PSY par 1,75 pendant un tour, retarde toutes les attaques ennemies d'un tour, change le cercle du capitaine en cercle [RCV] et si les HP sont au-dessus de 50%, change les cercles de la colonne de gauche en cercles correspondants.`,
      specialTurns: {
        initial: 17,
        max: 13,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 4,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 30 en HP, ATK et RCV pour les personnages de type QCK et PSY.`,
          needLimitBreak: true,
        },
        {
          ability: `Ajoute 75 en ATK pour les personnages de type QCK et PSY.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture: 'https://i.imgur.com/NGPiGd5.png',
      },
    },
    sockets: 5,
    cost: 65,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.STR_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type STR de 1%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 2%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 3%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 4%.`,
          `Réduit les dégâts subis par les ennemis de type STR de 5%.`,
        ],
      },
      {
        type: PotentialAbility.INT_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type INT de 1%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 2%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 3%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 5%.`,
          `Réduit les dégâts subis par les ennemis de type INT de 7%.`,
        ],
      },
      {
        type: PotentialAbility.REDUCTION_SPECIAL,
        icon: '',
        effects: [
          `Réduit le temps de chargement de son coup spécial de 1 tour au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 2 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 3 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 4 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 5 tours au début de la quête.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0094.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0096.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: [
        'Monkey D. Luffy',
        'Boa Sandersonia',
        'Boa Marigold',
      ],
      levels: [
        `?`,
        `?`,
        `?`,
        `?`,
        `Restaure 2 500 HP et change les cercles des personnages de la colonne de gauche si le personnage soutenu utilise son coup spécial (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
];
