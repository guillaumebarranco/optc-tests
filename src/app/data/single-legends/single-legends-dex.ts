import { Legend } from '../../models/legend.interface';
import { CharacterClass } from '../../models/character-class.interface';
import { PotentialAbility } from '../../models/potential-ability';

export const singleLegendsDex: Legend[] = [
  // Ace V1
  {
    id: '0562',
    title: 'Commandant de Barbe Blanche en noir',
    name: 'Portgas D. Ace',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/p5WU6dy.png',
      sixStars: 'https://i.imgur.com/1E2sGaH.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Commandant de la 2e flotte de l'équipage de Barbe Blanche. Un esprit libre et tolérant, également capable de courtoisie et de bon sens quand le besoin s'en fait sentir. Rentre dans une colère noire quand on ose insulter le Capitaine Barbe Blanche, son sauveur et bienfaiteur.`,
      type: 'DEX',
      classes: [CharacterClass.Tireur, CharacterClass.Libre],
      combo: 4,
      hp: {
        initial: 3818,
        afterLimitBreak: 4168,
        afterLimitBreakPlus: 4468,
      },
      atk: {
        initial: 1352,
        afterLimitBreak: 1602,
        afterLimitBreakPlus: 1752,
      },
      rcv: {
        initial: 321,
        afterLimitBreak: 421,
        afterLimitBreakPlus: 521,
      },
      captainAbility: `Multiplie les HP des personnages de classe Tireur par 1,5 et multiplie l'ATK des personnages de classe Tireur par 3 s'ils ont un cercle correspondant, sinon par 2.`,
      captainAbilityAfterLimitBreakPlus: `Multiplie les HP des personnages de classe Tireur par 1,5 et multiplie l'ATK des personnages de classe Tireur par 3,5 s'ils ont un cercle correspondant, sinon par 3.`,
      captainAbilityAdditionnalInformation: null,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Réduit les HP de l'équipe de 40%, inflige 15 fois les HP perdus en dégâts non élémentaires sur tous les ennemis et bloque les cercles pendant un tour.`,
      specialTurns: {
        initial: 22,
        max: 17,
        gainWithLimitBreak: 2,
        gainWithLimitBreakPlus: 4,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour les personnages de classe Tireur.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [DEX] avantageux pour les personnages de classe Tireur.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0561.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0562.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.QCK_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type QCK de 1%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 2%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 3%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 5%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 7%.`,
        ],
      },
      {
        type: PotentialAbility.LIEN_CERCLES,
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
        type: PotentialAbility.BARRIERE,
        icon: '',
        effects: [
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont au maximum.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 90%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 70%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 50%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0086.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0302.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Barbe Blanche', 'Marco'],
      levels: [
        `Bloque le cercle du personnage soutenu pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque le cercle du personnage soutenu pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque le cercle du personnage soutenu pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque les cercles pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque les cercles pendant 2 tours si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Ace V1 6+
  {
    id: '1816',
    title: 'Soleil destructeur de ténèbres',
    name: 'Portgas D. Ace',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/5qaO8JU.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Commandant de la 2e flotte de l'équipage de Barbe Blanche. Bien décidé à faire payer Barbe Noire pour avoir enfraint la règle d'or de l'équipage, il retrouve ce dernier sur l'île de Banaro et s'engage avec lui dans un duel qui sera plus tard considéré comme l'évènement déclencheur de la guerre au sommet.`,
      type: 'DEX',
      classes: [CharacterClass.Tireur, CharacterClass.Libre],
      combo: 4,
      hp: {
        initial: 3922,
        afterLimitBreak: 4272,
        afterLimitBreakPlus: 4572,
      },
      atk: {
        initial: 1466,
        afterLimitBreak: 1716,
        afterLimitBreakPlus: 1866,
      },
      rcv: {
        initial: 358,
        afterLimitBreak: 458,
        afterLimitBreakPlus: 558,
      },
      captainAbility: `Multiplie les HP des personnages de classe Tireur par 1,5 et multiplie l'ATK des personnages de classe Tireur par 3,25 s'ils ont un cercle correspondant, sinon par 2,25.`,
      captainAbilityAfterLimitBreakPlus: `Multiplie les HP des personnages de classe Tireur par 1,5 et multiplie l'ATK des personnages de classe Tireur par 3,75 s'ils ont un cercle correspondant, sinon par 3,5.`,
      captainAbilityAdditionnalInformation: null,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Réduit les HP de l'équipe de 40%, inflige 15 fois les HP perdus en dégâts non élémentaires sur tous les ennemis et multiplie l'ATK des personnages de classe Tireur par 2 pendant un tour.`,
      specialTurns: {
        initial: 20,
        max: 15,
        gainWithLimitBreak: 2,
        gainWithLimitBreakPlus: 4,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour les personnages de classe Tireur.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [DEX] avantageux pour les personnages de classe Tireur.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1816.png',
      },
    },
    sockets: 5,
    cost: 65,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.QCK_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type QCK de 1%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 2%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 3%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 5%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 7%.`,
        ],
      },
      {
        type: PotentialAbility.LIEN_CERCLES,
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
        type: PotentialAbility.BARRIERE,
        icon: '',
        effects: [
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont au maximum.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 90%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 70%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières si les HP sont supérieurs ou égaux à 50%.`,
          `Permet aux attaques normales du personnage d'ignorer les barrières.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/wp-content/uploads/green_skull2_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0086.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0302.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Barbe Blanche', 'Marco'],
      levels: [
        `Bloque le cercle du personnage soutenu pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque le cercle du personnage soutenu pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque le cercle du personnage soutenu pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque les cercles pendant un tour si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Bloque les cercles pendant 2 tours si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Crocodile
  {
    id: '0720',
    title: `Ancien membre de l'ordre des sept grands corsaires`,
    name: 'Sir Crocodile Logia',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/hcQhi4J.png',
      sixStars: 'https://i.imgur.com/5N2Dc9R.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Ancien membre de l'ordre des sept grands corsaires et chef de l'organisation criminelle Baroque Works. Le crochet qui lui sert de main gauche est empoisonné et recouvert de venin de scorpion.`,
      type: 'DEX',
      classes: [CharacterClass.Intellectuel, CharacterClass.Ravageur],
      combo: 4,
      hp: {
        initial: 3621,
        afterLimitBreak: 4121,
        afterLimitBreakPlus: 0,
      },
      atk: {
        initial: 1435,
        afterLimitBreak: 1635,
        afterLimitBreakPlus: 0,
      },
      rcv: {
        initial: 310,
        afterLimitBreak: 410,
        afterLimitBreakPlus: 0,
      },
      captainAbility: `Multiplie l'ATK des personnages de classe Intellectuel selon les HP de l'équipe au début du tour.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: `Par 1,5 si les HP de l'équipe sont au maximum et par 3,25 s'il ne reste qu'un HP à l'équipe.`,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Multiplie l'ATK des personnages de classe Intellectuel par 2 pendant un tour si les HP sont en-dessous de 30%, sinon par 1,5 pendant un tour, et inflige 20 fois son ATK en dégâts de type DEX sur tous les ennemis.`,
      specialTurns: {
        initial: 21,
        max: 14,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 0,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en ATK pour les personnages de classe Intellectuel.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [DEX] avantageux pour les personnages de classe Intellectuel.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0719.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0720.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: false,
    potentialAbilities: [
      {
        type: PotentialAbility.QCK_REDUCTION,
        icon: '',
        effects: [
          `Réduit les dégâts subis par les ennemis de type QCK de 1%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 2%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 3%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 5%.`,
          `Réduit les dégâts subis par les ennemis de type QCK de 7%.`,
        ],
      },
      {
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 10% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 20% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 7% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
      {
        type: PotentialAbility.AUGMENTATION_ATK,
        icon: '',
        effects: [
          `Ajoute 75 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 100 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 200 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 250 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 300 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0086.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0102.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Personnages de classe Intellectuel'],
      levels: [
        `Ajoute 5% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 6% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 7% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 8% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 9% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
      ],
    },
    batch: `First Legend`,
  },
  // Corazon
  {
    id: '1001',
    title: null,
    name: 'Don Quijote Rosinante',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/1rrkaoF.png',
      sixStars: 'https://i.imgur.com/22vXULd.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Ancien officier d'élite de l'équipage de Don Quijote. "Corazon" est juste un nom de code. Son véritable nom est Don Quijote Rosinante, et c'est le frère cadet de Doflamingo.`,
      type: 'DEX',
      classes: [CharacterClass.Libre, CharacterClass.Intellectuel],
      combo: 4,
      hp: {
        initial: 2746,
        afterLimitBreak: 3136,
        afterLimitBreakPlus: 3336,
      },
      atk: {
        initial: 1222,
        afterLimitBreak: 1482,
        afterLimitBreakPlus: 1682,
      },
      rcv: {
        initial: 555,
        afterLimitBreak: 605,
        afterLimitBreakPlus: 705,
      },
      captainAbility: `Multiplie l'ATK de tous les personnages selon les HP de l'équipe au début du tour, restaure les HP avec 0,5 fois sa RCV à chaque "SUPER" et 1,5 fois sa RCV à chaque "BIEN" à la fin du tour.`,
      captainAbilityAfterLimitBreakPlus: `Inconnue.`,
      captainAbilityAdditionnalInformation: `Par 2 si les HP de l'équipe sont au maximum et par 1 s'il ne reste qu'un HP à l'équipe.`,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Restaure les HP avec 25 fois sa RCV et réduit la durée de "Lien" et de "Désespoir du capitaine" de 3 tours.`,
      specialTurns: {
        initial: 23,
        max: 17,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 3,
      },
      crewmateAbilities: [
        {
          ability: `Réduit la durée de "Paralysie" de 1 tour.`,
          needLimitBreak: true,
        },
        {
          ability: `Réduit la durée de "Lien des coups spéciaux" de 1 tour.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1000.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1001.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.AUGMENTATION_ATK,
        icon: '',
        effects: [
          `Ajoute 50 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 75 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 100 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 150 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 200 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
        ],
      },
      {
        type: PotentialAbility.SOIN_IMPOSSIBLE,
        icon: '',
        effects: [
          `Réduit la durée de “Soin impossible” de 1 tour.`,
          `Réduit la durée de “Soin impossible” de 2 tours.`,
          `Réduit la durée de “Soin impossible” de 3 tours.`,
          `Réduit la durée de “Soin impossible” de 5 tours.`,
          `Réduit la durée de “Soin impossible” de 7 tours.`,
        ],
      },
      {
        type: PotentialAbility.REDUCTION_SPECIAL,
        icon: '',
        effects: [
          `Réduit le temps de chargement de son coup spécial de 1 tour au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 3 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 5 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 7 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 10 tours au début de la quête.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0086.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0302.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Trafalgar Law'],
      levels: [
        `Réduit la durée de "Lien" et de "Désespoir du capitaine" de 1 tour si un personnage a été touché par le "Lien" ou le "Désespoir du capitaine" (une fois par quête).`,
        `Réduit la durée de "Lien" et de "Désespoir du capitaine" de 1 tour si un personnage a été touché par le "Lien" ou le "Désespoir du capitaine" (une fois par quête).`,
        `Réduit la durée de "Lien" et de "Désespoir du capitaine" de 1 tour si un personnage a été touché par le "Lien" ou le "Désespoir du capitaine" (une fois par quête).`,
        `Réduit la durée de "Lien", de "Désespoir du capitaine" et de "Paralysie" de 1 tour si un personnage a été touché par le "Lien", le "Désespoir du capitaine" ou la "Paralysie" (une fois par quête).`,
        `Réduit la durée de "Lien", de "Désespoir du capitaine" et de "Paralysie" de 2 tours si un personnage a été touché par le "Lien", le "Désespoir du capitaine" ou la "Paralysie" (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Corazon 6+
  {
    id: '2195',
    title: 'Personne empathique envers Law',
    name: 'Cora',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/htOgYK6.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Ancien lieutenant-chef de l'équipage de Don Quijote. Avant de mourir sous les balles de son frère Doflamingo, dont il avait pressenti la vengeance, il parvient à sauver Law en lui faisant manger le fruit du bistouri et en le comblant d'affection.`,
      type: 'DEX',
      classes: [CharacterClass.Libre, CharacterClass.Intellectuel],
      combo: 4,
      hp: {
        initial: 2846,
        afterLimitBreak: 3236,
        afterLimitBreakPlus: 3436,
      },
      atk: {
        initial: 1308,
        afterLimitBreak: 1568,
        afterLimitBreakPlus: 1768,
      },
      rcv: {
        initial: 562,
        afterLimitBreak: 612,
        afterLimitBreakPlus: 712,
      },
      captainAbility: `Multiplie l'ATK de tous les personnages selon les HP de l'équipe au début du tour, restaure les HP avec 0,5 fois sa RCV à chaque "SUPER" et 1,5 fois sa RCV à chaque "BIEN" à la fin du tour.`,
      captainAbilityAfterLimitBreakPlus: `Multiplie l'ATK de tous les personnages selon les HP de l'équipe au début du tour, restaure les HP avec 0,3 fois sa RCV à chaque "PARFAIT", 0,8 fois sa RCV à chaque "SUPER" et 1,5 fois sa RCV à chaque "BIEN" à la fin du tour.`,
      captainAbilityAdditionnalInformation: `Par 3 si les HP de l'équipe sont au maximum et par 2 s'il ne reste qu'un HP à l'équipe.`,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: `Par 3,5 si les HP de l'équipe sont au maximum et par 2 s'il ne reste qu'un HP à l'équipe.`,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Restaure les HP avec 50 fois sa RCV et réduit la durée de "Lien", de "Désespoir du capitaine", de "Paralysie", des réductions d'ATK, des blocages et des diminutions de hausse du multiplicateur de 3 tours. Si le personnage est capitaine ou capitaine ami, réduit la durée de "Désespoir du capitaine" de 20 tours.`,
      specialTurns: {
        initial: 22,
        max: 16,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 3,
      },
      crewmateAbilities: [
        {
          ability: `Réduit la durée de "Paralysie" de 1 tour.`,
          needLimitBreak: true,
        },
        {
          ability: `Réduit la durée de "Lien des coups spéciaux" de 1 tour.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f2195.png',
      },
    },
    sockets: 5,
    cost: 65,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
      {
        type: PotentialAbility.AUGMENTATION_ATK,
        icon: '',
        effects: [
          `Ajoute 50 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 75 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 100 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 150 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
          `Ajoute 200 points d'ATK au tour suivant lorsque des dégâts sont subis.`,
        ],
      },
      {
        type: PotentialAbility.SOIN_IMPOSSIBLE,
        icon: '',
        effects: [
          `Réduit la durée de “Soin impossible” de 1 tour.`,
          `Réduit la durée de “Soin impossible” de 2 tours.`,
          `Réduit la durée de “Soin impossible” de 3 tours.`,
          `Réduit la durée de “Soin impossible” de 5 tours.`,
          `Réduit la durée de “Soin impossible” de 7 tours.`,
        ],
      },
      {
        type: PotentialAbility.REDUCTION_SPECIAL,
        icon: '',
        effects: [
          `Réduit le temps de chargement de son coup spécial de 1 tour au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 3 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 5 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 7 tours au début de la quête.`,
          `Réduit le temps de chargement de son coup spécial de 10 tours au début de la quête.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/wp-content/uploads/green_skull2_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0086.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0302.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0267.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Trafalgar Law'],
      levels: [
        `Réduit la durée de "Lien" et de "Désespoir du capitaine" de 1 tour si un personnage a été touché par le "Lien" ou le "Désespoir du capitaine" (une fois par quête).`,
        `Réduit la durée de "Lien" et de "Désespoir du capitaine" de 1 tour si un personnage a été touché par le "Lien" ou le "Désespoir du capitaine" (une fois par quête).`,
        `Réduit la durée de "Lien" et de "Désespoir du capitaine" de 1 tour si un personnage a été touché par le "Lien" ou le "Désespoir du capitaine" (une fois par quête).`,
        `Réduit la durée de "Lien", de "Désespoir du capitaine" et de "Paralysie" de 1 tour si un personnage a été touché par le "Lien", le "Désespoir du capitaine" ou la "Paralysie" (une fois par quête).`,
        `Réduit la durée de "Lien", de "Désespoir du capitaine" et de "Paralysie" de 2 tours si un personnage a été touché par le "Lien", le "Désespoir du capitaine" ou la "Paralysie" (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
];
