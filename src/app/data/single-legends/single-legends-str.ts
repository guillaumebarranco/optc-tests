import { Legend } from '../../models/legend.interface';
import { CharacterClass } from '../../models/character-class.interface';
import { PotentialAbility } from '../../models/potential-ability';

export const singleLegendsStr: Legend[] = [
  // Barbe Blanche V1
  {
    id: '0261',
    title: null,
    name: 'Barbe Blanche',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/VWSTtgM.png',
      sixStars: 'https://i.imgur.com/03SM5d6.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Le capitaine de l'équipage de Barbe Blanche et l'un des Quatre Empereurs. Edward Newgate de son véritable nom. Il a mangé le Fruit du Tremblement qui permet de déclencher des séismes et des tsunamis. Utilise le Haki du Conquérant.`,
      type: 'STR',
      classes: [CharacterClass.Ravageur, CharacterClass.Tenace],
      combo: 4,
      hp: {
        initial: 3900,
        afterLimitBreak: 4395,
        afterLimitBreakPlus: 4895,
      },
      atk: {
        initial: 1360,
        afterLimitBreak: 1575,
        afterLimitBreakPlus: 1775,
      },
      rcv: {
        initial: 235,
        afterLimitBreak: 320,
        afterLimitBreakPlus: 395,
      },
      captainAbility: `Multiplie l'ATK de tous les personnages par 3 si les HP sont en-dessous de 30%.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Enlève 30% des HP de chaque ennemi.`,
      specialTurns: {
        initial: 25,
        max: 17,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 2,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 60 en ATK pour les personnages de classe Ravageur et Tenace.`,
          needLimitBreak: true,
        },
        {
          ability: `Immunise le personnage contre "Paralysie".`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0260.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0261.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.DEX_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type DEX de 2%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 3%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 4%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 5%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 7%.`,
        ],
      },
      {
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 20% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
      {
        type: PotentialAbility.AUGMENTATION_ATK,
        icon: '',
        effects: [
          `Ajoute 25 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 50 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 100 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 150 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 200 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0084.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0100.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Personnages de type STR'],
      levels: [
        `Ajoute 5% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 6% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 8% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 10% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 12% de l'ATK du personnage en ATK pour les personnages soutenus.`,
      ],
    },
    batch: `First Legend`,
  },
  // Barbe Blanche V1 6+
  {
    id: '1413',
    title: 'Quatre Empereurs',
    name: 'Barbe Blanche',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/ymeQY1E.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Capitaine de l'équipage de Barbe Blanche. Bien qu'ayant subi de multiples attaques lors de la guerre au sommet, ce "père" exemplaire est mort sans même poser genou à terre, le dos exempt de toute blessure infamante.`,
      type: 'STR',
      classes: [CharacterClass.Ravageur, CharacterClass.Tenace],
      combo: 4,
      hp: {
        initial: 3806,
        afterLimitBreak: 4301,
        afterLimitBreakPlus: 4801,
      },
      atk: {
        initial: 1558,
        afterLimitBreak: 1773,
        afterLimitBreakPlus: 1973,
      },
      rcv: {
        initial: 347,
        afterLimitBreak: 423,
        afterLimitBreakPlus: 498,
      },
      captainAbility: `Multiplie l'ATK de tous les personnages par 3 si les HP sont en-dessous de 30%, sinon par 1,75, et multiplie les HP de tous les personnages par 1,2.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Enlève 30% des HP de chaque ennemi, réduit le temps de chargement des coups spéciaux des personnages qui ne sont pas capitaines d'un tour et mélange les cercles qui ne sont pas correspondants de tous les personnages (cercles [BLK] inclus) aléatoirement.`,
      specialTurns: {
        initial: 25,
        max: 17,
        gainWithLimitBreak: 0,
        gainWithLimitBreakPlus: 2,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 60 en ATK pour les personnages de classe Ravageur et Tenace.`,
          needLimitBreak: true,
        },
        {
          ability: `Immunise le personnage contre "Paralysie".`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture: 'https://i.imgur.com/z9NGsV3.png',
      },
    },
    sockets: 5,
    cost: 65,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.DEX_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type DEX de 2%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 3%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 4%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 5%.`,
          `Réduit les dégâts subis par les ennemis de type DEX de 7%.`,
        ],
      },
      {
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 20% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
      {
        type: PotentialAbility.AUGMENTATION_ATK,
        icon: '',
        effects: [
          `Ajoute 25 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 50 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 100 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 150 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 200 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/wp-content/uploads/red_skull_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0084.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0300.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Personnages de type STR'],
      levels: [
        `Ajoute 5% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 6% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 8% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 10% de l'ATK du personnage en ATK pour les personnages soutenus.`,
        `Ajoute 12% de l'ATK du personnage en ATK pour les personnages soutenus.`,
      ],
    },
    batch: `First Legend`,
  },
  // Snakeman V1
  {
    id: '2363',
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
      classes: [CharacterClass.Cogneur, CharacterClass.Tenace],
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
        type: PotentialAbility.LIEN_CERCLES,
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
        type: PotentialAbility.SOIN_URGENCE,
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
        type: PotentialAbility.ATTAQUE_CRITIQUE,
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
];
