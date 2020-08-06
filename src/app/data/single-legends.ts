import { Legend } from '../models/legend.interface';

export const singleLegends: Legend[] = [
  // Soba Mask
  {
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
      classes: ['Tenace', 'Libre'],
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
        type: 'ATK Critique',
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
        type: 'Restauration HP',
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
        type: 'Réduction soin impossible',
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
  // Snakeman V1
  {
    title: 'Gear Fourth "Snake Man"',
    name: 'Monkey D. Luffy',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/3fFLZvS.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Capitaine de l'équipage de Chapeau de paille. Grâce à cette nouvelle forme du "Gear Fourth", à la fois plus fine et plus rapide que "Tank Man" et "Bound Man", il parvient à faire jeu égal avec Dent-de-chien lors de son duel contre celui-ci.`,
      type: 'STR',
      classes: ['Cogneur', 'Tenace'],
      combo: 4,
      hp: {
        initial: 3820,
        afterLimitBreak: 4330,
        afterLimitBreakPlus: 4680,
      },
      atk: {
        initial: 1645,
        afterLimitBreak: 1845,
        afterLimitBreakPlus: 2045,
      },
      rcv: {
        initial: 282,
        afterLimitBreak: 372,
        afterLimitBreakPlus: 447,
      },
      captainAbility: `Réduit le temps de chargement des coups spéciaux de tous les personnages d'un tour au début de la quête, multiplie l'ATK de tous les personnages par 3,25, les HP par 1,35 et rend les cercles [DEX] et [INT] avantageux pour tous les personnages. Si le coup spécial "Gum Gum King Cobra" est utilisé, pendant 3 tours, multiplie l'ATK de tous les personnages par 4 puis par 4,25 après 3 "PARFAIT" d'affilée.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: [
        {
          specialTurns: {
            initial: 12,
            max: 7,
            gainWithLimitBreak: 1,
            gainWithLimitBreakPlus: 0,
          },
          special: `Inflige 150 fois son ATK en dégâts non élémentaires sur un ennemi, ajoute 0,3 au multiplicateur de combos pendant un tour, multiplie les effets des cercles de tous les personnages par 1,5 pendant un tour et si le personnage est capitaine ou capitaine ami, rend les cercles de type avantageux pour tous les personnages pendant 3 tours.`,
        },
        {
          specialTurns: {
            initial: 19,
            max: 14,
            gainWithLimitBreak: 1,
            gainWithLimitBreakPlus: 0,
          },
          special: `Inflige 150 fois son ATK en dégâts non élémentaires sur un ennemi, ajoute 0,7 au multiplicateur de combos pendant 3 tours, multiplie les effets des cercles de tous les personnages par 1,75 pendant un tour et si au moins 3 personnages font un coup "PARFAIT", multiplie les effets des cercles de tous les personnages par 2 au tour suivant. Si le personnage est capitaine ou capitaine ami, rend les cercles de type avantageux pour tous les personnages pendant 3 tours.`,
        },
      ],
      special: null,
      specialTurns: null,
      crewmateAbilities: [
        {
          ability: `Immunise le personnage contre "Paralysie".`,
          needLimitBreak: true,
        },
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour tous les personnages.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2363.png',
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: 'Lien des cercles',
        icon: '',
        effects: [
          `Réduit la durée de “Lien des cercles” du personnage de 1 tour.`,
          `Réduit la durée de “Lien des cercles” du personnage de 2 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 3 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 5 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 7 tours.`,
        ],
      },
      {
        type: 'Restauration HP',
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 10%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 15%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 20%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 30%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
        ],
      },
      {
        type: 'ATK Critique',
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 4% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 70% de chances de faire 6% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 80% de chances de faire 8% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 90% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/wp-content/uploads/blue_skull_f.png',
      'https://onepiece-treasurecruise.com/wp-content/uploads/red_skull_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0100.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Tous les personnages'],
      levels: [
        `Ajoute 3% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 5% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 7% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 8% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 9% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
      ],
    },
    batch: `??`,
  },
  // Pudding
  {
    title: 'Séparation par amour',
    name: 'Charlotte Pudding',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/1U9H3r6.png',
      sixStars: 'https://i.imgur.com/fGqALyc.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `35e fille de la famille Charlotte. Soucieuse de ne pas porter préjudice à Sanji, elle quitte ce dernier après l'avoir remercié et serré dans ses bras, autant de souvenirs qu'elle lui ôte aussitôt à l'aide de ses pouvoirs.
      `,
      type: 'INT',
      classes: ['Intellectuel', 'Tireur'],
      combo: 5,
      hp: {
        initial: 2932,
        afterLimitBreak: 3202,
        afterLimitBreakPlus: 3502,
      },
      atk: {
        initial: 1465,
        afterLimitBreak: 1665,
        afterLimitBreakPlus: 1915,
      },
      rcv: {
        initial: 423,
        afterLimitBreak: 533,
        afterLimitBreakPlus: 603,
      },
      captainAbility: `Multiplie les HP des personnages de type INT par 1,25, multiplie l'ATK des personnages de type INT par 4,25 s'ils ont un cercle correspondant, sinon par 3,5, rend les cercles [PSY] avantageux pour tous les personnages et augmente les chances d'apparition des cercles [PSY].`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Change les cercles désavantageux, [EMP], [BLK] et son cercle en cercles correspondants et réduit le temps de chargement des coups spéciaux de tous les personnages d'un tour. Enregistre un effet augmentant les dégâts infligés au choix, réduit complètement le temps de chargement du coup spécial du personnage et si le coup spécial est utilisé lorsqu'un effet est enregistré, restaure l'effet enregistré pendant un tour en ignorant les interruptions des coups spéciaux.`,
      specialTurns: {
        initial: 12,
        max: 7,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 0,
      },
      crewmateAbilities: [
        {
          ability: `Réduit la durée de "Lien des coups spéciaux" du personnage de 10 tours.`,
          needLimitBreak: true,
        },
        {
          ability: `Réduit l'inversion de son coup spécial de 10 tours.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: 'https://i.imgur.com/ZwMMVN5.png',
        sixStarsPicture: 'https://i.imgur.com/FJqE403.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: 'Transpercement des barrières',
        icon: '',
        effects: [
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont au maximum.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 90%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 70%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 50%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières.`,
        ],
      },
      {
        type: 'Lien des cercles',
        icon: '',
        effects: [
          `Réduit la durée de “Lien des cercles” du personnage de 1 tour.`,
          `Réduit la durée de “Lien des cercles” du personnage de 3 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 5 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 7 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 10 tours.`,
        ],
      },
      {
        type: 'Réduction soin impossible',
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
      'https://onepiece-treasurecruise.com/wp-content/uploads/blue_skull_f.png',
      'https://onepiece-treasurecruise.com/wp-content/uploads/red_skull_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0100.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Sanji Vinsmoke'],
      levels: [
        `Réduit la durée de "Lien des coups spéciaux" du personnage soutenu de 1 tour si un personnage a été touché par le "Lien des coups spéciaux" (une fois par quête).`,
        `Réduit la durée de "Lien des coups spéciaux" du personnage soutenu de 1 tour si un personnage a été touché par le "Lien des coups spéciaux" (une fois par quête).`,
        `Réduit la durée de "Lien des coups spéciaux" du personnage soutenu de 1 tour et réduit le temps de chargement du coup spécial du personnage soutenu de 1 tour si un personnage a été touché par le "Lien des coups spéciaux" ou l'inversion des coups spéciaux (une fois par quête).`,
        `Réduit la durée de "Lien des coups spéciaux" du personnage soutenu de 1 tour et réduit le temps de chargement du coup spécial du personnage soutenu de 1 tour si un personnage a été touché par le "Lien des coups spéciaux" ou l'inversion des coups spéciaux (une fois par quête).`,
        `Réduit la durée de "Lien des coups spéciaux" du personnage soutenu de 1 tour et réduit le temps de chargement du coup spécial du personnage soutenu de 1 tour si un personnage a été touché par le "Lien des coups spéciaux" ou l'inversion des coups spéciaux (une fois par quête).`,
      ],
    },
    batch: `Waifus`,
  },
];
