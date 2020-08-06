import { Legend } from './legend.interface';

export const jsonLegends: Legend[] = [
  {
    title: 'Pirates solidaires',
    name: 'Équipage de Shanks le Roux',
    isDual: true,
    artwork: {
      fiveStars: 'https://i.imgur.com/HxLigTR.png',
      sixStars: 'https://i.imgur.com/94L21Il.png',
      sixPlusStars: null,
    },
    dualCharacterData: {
      hasOnlyOneSpecial: true,
      special: `Enlève 20% des HP de tous les ennemis en ignorant les effets défensifs, bloque le multiplicateur de combos à 3,5 pendant 3 tours et devient "Équipage de Shanks le Roux" pendant 3 tours.`,
      specialTurns: {
        initial: 18,
        max: 13,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 0,
      },
      specialWithStages: [],
      switchEffect: `Change les cercles adjacents en cercles correspondants et multiplie l'ATK de tous les personnages par 1,5 pendant un tour.`,
      firstForm: {
        name: 'Shanks le Roux',
        story: `Capitaine de l'équipage de Shanks le Roux. Le dernier jour de son long séjour au village de Fuchsia, il confie à Luffy son précieux chapeau de paille et lui demande de le lui rendre lorsqu'il sera devenu un vrai pirate.`,
        type: 'PSY',
        classes: ['Sabreur', 'Intellectuel'],
        combo: 5,
        hp: {
          initial: 3756,
          afterLimitBreak: 4236,
          afterLimitBreakPlus: 4736,
        },
        atk: {
          initial: 1512,
          afterLimitBreak: 1732,
          afterLimitBreakPlus: 1932,
        },
        rcv: {
          initial: 295,
          afterLimitBreak: 395,
          afterLimitBreakPlus: 445,
        },
        captainAbility: `Multiplie l'ATK de tous les personnages par 3,5, les HP par 1,2, rend les cercles [QCK] avantageux pour tous les personnages et réduit la durée de "Lien des coups spéciaux" de 10 tours.`,
        captainAbilityAfterLimitBreakPlus: null,
        captainAbilityAdditionnalInformation: null,
        ownSpecial: null,
        picture: {
          fiveStarsPicture: 'https://i.imgur.com/628lFI3.png',
          sixStarsPicture: 'https://i.imgur.com/zmgMSzO.png',
          sixPlusStarsPicture: '',
        },
      },
      secondForm: {
        name: 'Ben Beckmann, Lucky Roo et Yasopp',
        story: `Lieutenants de l'équipage de Shanks le Roux. Lorsque les brigands les menacent avec leurs sabres et leurs armes à feu, ils n'hésitent pas à employer la force et à faire la démonstration de leur supériorité, quitte à rompre avec l'image joyeuse qu'ils ont l'habitude de donner.`,
        type: 'QCK',
        classes: ['Tireur', 'Intellectuel'],
        combo: 4,
        hp: {
          initial: 3756,
          afterLimitBreak: 4236,
          afterLimitBreakPlus: 4736,
        },
        atk: {
          initial: 1431,
          afterLimitBreak: 1651,
          afterLimitBreakPlus: 1851,
        },
        rcv: {
          initial: 322,
          afterLimitBreak: 422,
          afterLimitBreakPlus: 472,
        },
        captainAbility: `Multiplie l'ATK de tous les personnages par 3,25, les HP par 1,2, rend les cercles [PSY] avantageux pour tous les personnages, réduit les dégâts subis de 10% et réduit la durée de "Lien des coups spéciaux" de 10 tours.`,
        captainAbilityAfterLimitBreakPlus: null,
        captainAbilityAdditionnalInformation: null,
        ownSpecial: null,
        picture: {
          fiveStarsPicture: 'https://i.imgur.com/8xl5NjD.png',
          sixStarsPicture: 'https://i.imgur.com/dwSWhXt.png',
          sixPlusStarsPicture: '',
        },
      },
      finalForm: {
        name: 'Équipage de Shanks le Roux',
        story: `Capitaine et lieutenants de l'équipage de Shanks le Roux. Malgré leur bonté d'âme, ils se montrent sans pitié avec ceux qui s'en prennent à leurs amis, comme lorsqu'ils sortent leurs armes pour sauver Luffy de ses agresseurs.`,
        type: 'PSY/QCK',
        classes: ['Sabreur', 'Intellectuel'],
        combo: 6,
        hp: {
          initial: 4040,
          afterLimitBreak: 4520,
          afterLimitBreakPlus: 5020,
        },
        atk: {
          initial: 1625,
          afterLimitBreak: 1845,
          afterLimitBreakPlus: 2045,
        },
        rcv: {
          initial: 360,
          afterLimitBreak: 460,
          afterLimitBreakPlus: 510,
        },
        captainAbility: `Multiplie l'ATK de tous les personnages par 4,5, les HP par 1,2, rend les cercles [QCK] et [PSY] avantageux pour tous les personnages, réduit les dégâts subis de 20%, réduit la durée de "Lien des coups spéciaux" de 10 tours et inflige des dégâts non élémentaires sur tous les ennemis à la fin de chaque tour selon le nombre de "PARFAIT" effectués.`,
        captainAbilityAdditionnalInformation: `Aucun dégât si aucun "PARFAIT" n'a été effectué au tour précédent, 5 fois son ATK si un "PARFAIT" a été effectué au tour précédent, 13 fois son ATK si 2 "PARFAIT" ont été effectués au tour précédent, 32 fois son ATK si 3 "PARFAIT" ont été effectués au tour précédent, 80 fois son ATK si 4 "PARFAIT" ont été effectués au tour précédent, 350 fois son ATK si 5 "PARFAIT" ont été effectués au tour précédent et 1 000 fois son ATK si 6 "PARFAIT" ont été effectués au tour précédent.
        `,
        captainAbilityAfterLimitBreakPlus: null,
        ownSpecial: null,
        picture: {
          fiveStarsPicture: 'https://i.imgur.com/AwDf52O.png',
          sixStarsPicture: 'https://i.imgur.com/LxKmEaI.png',
          sixPlusStarsPicture: '',
        },
      },
    },
    singleCharacterData: null,
    sockets: 5,
    cost: 55,
    crewmateAbility1: `Immunise le personnage contre “Lien des coups spéciaux”`,
    crewmateAbility2: `Si le personnage est le dernier à attaquer, ajoute 250 en ATK pour le personnage.`,
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
        type: 'Réduction soin impossible',
        icon: '',
        effects: [
          `Réduit la durée de “Soin impossible” de 2 tours.`,
          `Réduit la durée de “Soin impossible” de 3 tours.`,
          `Réduit la durée de “Soin impossible” de 4 tours.`,
          `Réduit la durée de “Soin impossible” de 5 tours.`,
          `Réduit la durée de “Soin impossible” de 7 tours.`,
        ],
      },
      {
        type: 'Ajout ATK si dégâts subis',
        icon: '',
        effects: [
          `Ajoute 75 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 100 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 150 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 200 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 300 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0103.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0101.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: false,
      levels: [],
      supportedCharacters: [],
    },
    batch: `6ème anniversaire de la version japonaise`,
  },
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
      picture: {
        fiveStarsPicture: 'https://i.imgur.com/pZfA2vh.png',
        sixStarsPicture: 'https://i.imgur.com/mdZnRbI.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    crewmateAbility1: `Si un autre personnage utilise son coup spécial, réduit le temps de chargement du coup spécial du personnage de 4 tours.`,
    crewmateAbility2: `Rend les cercles [TND] avantageux pour tous les personnages.`,
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
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2363.png',
      },
    },
    sockets: 5,
    cost: 55,
    crewmateAbility1: `Immunise le personnage contre "Paralysie".`,
    crewmateAbility2: `Ajoute 50 en HP, ATK et RCV pour tous les personnages.`,
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
  {
    title: 'Membres de la génération des "miracles"',
    name: 'Luffy et Law',
    isDual: true,
    artwork: {
      fiveStars: 'https://i.imgur.com/0qeraCX.png',
      sixStars: 'https://i.imgur.com/yulO2bB.png',
      sixPlusStars: null,
    },
    dualCharacterData: {
      hasOnlyOneSpecial: false,
      special: null,
      specialTurns: {
        initial: 17,
        max: 12,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 0,
      },
      specialWithStages: [],
      switchEffect: `Libère le personnage de "Lien des cercles", change son cercle (cercle [BLK] inclus) en cercle correspondant, multiplie l'ATK du personnage par 2 pendant un tour et annule les effets défensifs dont bénéficient les ennemis contre les ATK normales du personnage pendant un tour.`,
      firstForm: {
        name: 'Monkey D. Luffy',
        story: `Capitaine de l'équipage de Chapeau de paille. Membre de la "génération terrible" dont fait aussi partie Law, il provoque Doflamingo en duel pour lui faire payer les larmes et la colère qu'il a suscitées chez ses camarades.`,
        type: 'DEX',
        classes: ['Cogneur', 'Libre'],
        combo: 6,
        hp: {
          initial: 3418,
          afterLimitBreak: 3898,
          afterLimitBreakPlus: 4248,
        },
        atk: {
          initial: 1518,
          afterLimitBreak: 1733,
          afterLimitBreakPlus: 1933,
        },
        rcv: {
          initial: 312,
          afterLimitBreak: 417,
          afterLimitBreakPlus: 492,
        },
        captainAbility: `Multiplie l'ATK de tous les personnages par 3,5 et les HP par 1,25.`,
        captainAbilityAfterLimitBreakPlus: null,
        captainAbilityAdditionnalInformation: null,
        ownSpecial:
          'Inflige 400 fois son ATK en dégâts non élémentaires sur un ennemi, rend les cercles [DEX] et [QCK] avantageux pour tous les personnages pendant un tour, multiplie les effets des cercles de tous les personnages par 2,5 pendant un tour et devient "Luffy et Law" pendant 3 tours.',
        picture: {
          fiveStarsPicture: 'https://i.imgur.com/Q9cXCYu.png',
          sixStarsPicture: 'https://i.imgur.com/UCxboK0.png',
          sixPlusStarsPicture: '',
        },
      },
      secondForm: {
        name: 'Trafalgar Law',
        story: `Capitaine de l'équipage du "Heart". Membre de la "génération terrible" dont fait aussi partie Luffy, il s'allie à ce dernier pour combattre Doflamingo et lui faire payer ce qu'il a commis il y a 13 ans.`,
        type: 'QCK',
        classes: ['Sabreur', 'Intellectuel'],
        combo: 4,
        hp: {
          initial: 3288,
          afterLimitBreak: 3768,
          afterLimitBreakPlus: 4118,
        },
        atk: {
          initial: 1482,
          afterLimitBreak: 1697,
          afterLimitBreakPlus: 1897,
        },
        rcv: {
          initial: 381,
          afterLimitBreak: 486,
          afterLimitBreakPlus: 561,
        },
        captainAbility: `Multiplie l'ATK de tous les personnages par 3, les HP par 1,25 et restaure les HP avec 0,5 fois sa RCV à chaque "PARFAIT" à la fin du tour.`,
        captainAbilityAfterLimitBreakPlus: null,
        captainAbilityAdditionnalInformation: null,
        ownSpecial: `Inflige 75 fois son ATK en dégâts non élémentaires sur tous les ennemis en ignorant les effets défensifs, rend les cercles [DEX] et [QCK] avantageux pour tous les personnages pendant un tour, multiplie les effets des cercles de tous les personnages par 2,5 pendant un tour et devient "Luffy et Law" pendant 3 tours.
        `,
        picture: {
          fiveStarsPicture: 'https://i.imgur.com/O9vYfIg.png',
          sixStarsPicture: 'https://i.imgur.com/gQjtivT.png',
          sixPlusStarsPicture: '',
        },
      },
      finalForm: {
        name: 'Luffy et Law',
        story: `Capitaines de l'équipage de Chapeau de paille et de l'équipage du "Heart". Au terme d'une série de périls auxquels ils ont miraculeusement survécu, ces deux membres de la "génération terrible" engagent le combat contre Doflamingo, lequel est considéré comme un descendant direct des "dieux".`,
        type: 'DEX/QCK',
        classes: ['Cogneur', 'Sabreur'],
        combo: 4,
        hp: {
          initial: 3677,
          afterLimitBreak: 4157,
          afterLimitBreakPlus: 4507,
        },
        atk: {
          initial: 1644,
          afterLimitBreak: 1859,
          afterLimitBreakPlus: 2059,
        },
        rcv: {
          initial: 425,
          afterLimitBreak: 530,
          afterLimitBreakPlus: 605,
        },
        captainAbility: `Multiplie l'ATK de tous les personnages par 4,5, les HP par 1,25 et restaure les HP avec 1 fois sa RCV à chaque "PARFAIT" à la fin du tour.`,
        captainAbilityAdditionnalInformation: null,
        captainAbilityAfterLimitBreakPlus: null,
        ownSpecial: null,
        picture: {
          fiveStarsPicture:
            'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2533.png',
          sixStarsPicture:
            'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2534.png',
          sixPlusStarsPicture: '',
        },
      },
    },
    singleCharacterData: null,
    sockets: 5,
    cost: 55,
    crewmateAbility1: `Ajoute 50 en HP, ATK et RCV pour tous les personnages.`,
    crewmateAbility2: `Immunise le personnage contre "Lien des coups spéciaux" et "Paralysie".`,
    hasLimitBreak: true,
    hasLimitBreakPlus: false,
    potentialAbilities: [
      {
        type: 'Restauration HP',
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 0,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 10%.`,
          `Restaure les HP à hauteur de 0,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 15%.`,
          `Restaure les HP à hauteur de 0,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 20%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 25%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 30%.`,
        ],
      },
      {
        type: 'Réduction soin impossible',
        icon: '',
        effects: [
          `Réduit la durée de “Soin impossible” de 2 tours.`,
          `Réduit la durée de “Soin impossible” de 3 tours.`,
          `Réduit la durée de “Soin impossible” de 4 tours.`,
          `Réduit la durée de “Soin impossible” de 5 tours.`,
          `Réduit la durée de “Soin impossible” de 7 tours.`,
        ],
      },
      {
        type: 'ATK Critique',
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 60% de chances de faire 6% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 70% de chances de faire 7% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 80% de chances de faire 8% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 90% de chances de faire 9% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 100% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0102.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0101.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: false,
      levels: [],
      supportedCharacters: [],
    },
    batch: `5ème anniversaire de la version japonaise`,
  },
];
