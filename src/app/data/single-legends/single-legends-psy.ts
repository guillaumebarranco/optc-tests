import { Legend } from '../../models/legend.interface';
import { CharacterClass } from '../../models/character-class.interface';
import { PotentialAbility } from '../../models/potential-ability';

export const singleLegendsPsy: Legend[] = [
  // Sengoku
  {
    id: '0459',
    title: null,
    name: 'Sengoku le Bouddha',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/E18Tace.png',
      sixStars: 'https://i.imgur.com/qBjMWrh.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Amiral de la Marine. Il a mangé le Fruit de l'Humain, version Bouddha. Il est capable de se transformer en un Bouddha géant et d'envoyer des ondes de chocs depuis la paume de ses mains. Il croit en la justice moral. Il est "Sengoku le Bouddha".`,
      type: 'PSY',
      classes: [CharacterClass.Cogneur, CharacterClass.Intellectuel],
      combo: 4,
      hp: {
        initial: 3429,
        afterLimitBreak: 3779,
        afterLimitBreakPlus: 4279,
      },
      atk: {
        initial: 1338,
        afterLimitBreak: 1588,
        afterLimitBreakPlus: 1788,
      },
      rcv: {
        initial: 389,
        afterLimitBreak: 489,
        afterLimitBreakPlus: 539,
      },
      captainAbility: `Réduit le temps de chargement des coups spéciaux de tous les personnages de 2 tours au début de la quête et multiplie l'ATK des personnages ayant un coût inférieur ou égal à 20 ou égal à 54 par 3.`,
      captainAbilityAfterLimitBreakPlus: 'Inconnue.',
      captainAbilityAdditionnalInformation: null,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Inflige de lourds dégâts de type PSY sur tous les ennemis et multiplie l'ATK de tous les personnages par 1,5 pendant un tour.`,
      specialTurns: {
        initial: 28,
        max: 19,
        gainWithLimitBreak: 2,
        gainWithLimitBreakPlus: 6,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 100 en HP et ATK pour les personnages ayant un coût inférieur à 29.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [INT] avantageux pour tous les personnages.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0458.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0459.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 54,
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
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0094.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0098.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Personnages ayant un coût inférieur ou égal à 29'],
      levels: [
        `Multiplie l'ATK du personnage soutenu par 1,25 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK du personnage soutenu par 1,5 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK du personnage soutenu par 1,75 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK du personnage soutenu par 2 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
        `Multiplie l'ATK du personnage soutenu par 2,5 pendant un tour si le personnage soutenu utilise son coup spécial (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Shanks V1
  {
    id: '0530',
    title: 'Empereur vêtu de noir',
    name: 'Shanks',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/iYHclpb.png',
      sixStars: 'https://i.imgur.com/NTkNwoA.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Capitaine de l'équipage du Roux. Membre des Quatre Empereurs et parmi les trois plus grandes puissances au monde. Il évite les conflits inutiles et jouit de l'estime de la Marine. Il est "Shanks le Roux".`,
      type: 'PSY',
      classes: [CharacterClass.Sabreur, CharacterClass.Intellectuel],
      combo: 5,
      hp: {
        initial: 3140,
        afterLimitBreak: 3620,
        afterLimitBreakPlus: 3970,
      },
      atk: {
        initial: 1400,
        afterLimitBreak: 1685,
        afterLimitBreakPlus: 1885,
      },
      rcv: {
        initial: 418,
        afterLimitBreak: 508,
        afterLimitBreakPlus: 583,
      },
      captainAbility: `Multiplie l'ATK des personnages de type PSY selon les HP de l'équipe au début du tour et augmente les chances d'apparition des cercles [PSY].`,
      captainAbilityAfterLimitBreakPlus: 'Inconnue.',
      captainAbilityAdditionnalInformation: `Par 2,75 si les HP de l'équipe sont au maximum et par 2 s'il ne reste qu'un HP à l'équipe.`,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Inflige 35 fois son ATK en dégâts de type PSY sur tous les ennemis et réduit à 0 la défense de tous les ennemis pendant 2 tours.`,
      specialTurns: {
        initial: 25,
        max: 20,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 6,
      },
      crewmateAbilities: [
        {
          ability: `Rend les cercles [INT] avantageux pour les personnages de type PSY.`,
          needLimitBreak: true,
        },
        {
          ability: `Ajoute 3 fois son ATK en dégâts additionnels non élémentaires.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: 'https://i.imgur.com/c4NrTpZ.png',
        sixStarsPicture: 'https://i.imgur.com/gLJmOj7.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
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
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 4% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire ?% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 70% de chances de faire ?% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 80% de chances de faire ?% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 90% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0087.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0098.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Personnages de type PSY'],
      levels: [
        `Change les cercles [STR] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles [STR] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles [STR] et [DEX] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles [STR], [DEX] et [QCK] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles de type des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Shanks V1 6+
  {
    id: '1707',
    title: 'Empereur',
    name: 'Shanks le Roux',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/fcvk2oY.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Chef de l'équipage de Shanks le Roux. Après son intervention visant à mettre fin à la guerre au sommet, il récupère le chapeau de Luffy et le lance à Baggy, mais préfère ne pas se rendre au chevet de son ami afin de respecter la promesse qu'ils se sont faite, même si cela fait 10 ans qu'il ne l'a pas vu.`,
      type: 'PSY',
      classes: [CharacterClass.Sabreur, CharacterClass.Intellectuel],
      combo: 5,
      hp: {
        initial: 3204,
        afterLimitBreak: 3684,
        afterLimitBreakPlus: 4034,
      },
      atk: {
        initial: 1510,
        afterLimitBreak: 1795,
        afterLimitBreakPlus: 1995,
      },
      rcv: {
        initial: 464,
        afterLimitBreak: 554,
        afterLimitBreakPlus: 629,
      },
      captainAbility: `Multiplie l'ATK des personnages de type PSY par 2,75 et les HP par 1,3. Augmente les chances d'apparition des cercles [PSY] selon les HP de l'équipe au début du tour.`,
      captainAbilityAfterLimitBreakPlus: `Multiplie les HP des personnages de type PSY par 1,3 et multiplie l'ATK des personnages de type PSY par 4,25 s'ils ont un cercle correspondant, sinon par 3,5. Augmente les chances d'apparition des cercles [PSY] selon les HP de l'équipe au début du tour.`,
      captainAbilityAdditionnalInformation: null,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Inflige 75 fois son ATK en dégâts non élémentaires sur un ennemi, réduit à 0 la défense de tous les ennemis pendant un tour et change les cercles de tous les personnages en cercles [PSY].`,
      specialTurns: {
        initial: 19,
        max: 14,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 6,
      },
      crewmateAbilities: [
        {
          ability: `Rend les cercles [INT] avantageux pour les personnages de type PSY.`,
          needLimitBreak: true,
        },
        {
          ability: `Ajoute 3 fois son ATK en dégâts additionnels non élémentaires.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1707.png',
      },
    },
    sockets: 5,
    cost: 65,
    hasLimitBreak: true,
    hasLimitBreakPlus: true,
    potentialAbilities: [
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
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 4% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire ?% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 70% de chances de faire ?% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 80% de chances de faire ?% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 90% de chances de faire 10% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/wp-content/uploads/yellow_skull2_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0098.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0303.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Personnages de type PSY'],
      levels: [
        `Change les cercles [STR] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles [STR] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles [STR] et [DEX] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles [STR], [DEX] et [QCK] des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
        `Change les cercles de type des personnages de type PSY en cercles [PSY] si le personnage soutenu utilise un coup spécial qui enlève un pourcentage d'HP ou qui inflige des dégâts aux ennemis (une fois par quête).`,
      ],
    },
    batch: `First Legend`,
  },
  // Sabo V1
  {
    id: '0669',
    title: 'Armée révolutionnaire',
    name: 'Sabo',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/itUHno9.png',
      sixStars: 'https://i.imgur.com/Pajsbdg.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Commandant de l'Armée révolutionnaire. Fils noble du royaume de Goa, il prit la mer loin des tracas et autres soucis du royaume, mais un dragon céleste a rapidement détruit son navire. Dragon le révolutionnaire lui a sauvé la vie, et il a fini par rejoindre ses rangs.`,
      type: 'PSY',
      classes: [CharacterClass.Libre, CharacterClass.Ravageur],
      combo: 4,
      hp: {
        initial: 2985,
        afterLimitBreak: 3480,
        afterLimitBreakPlus: 0,
      },
      atk: {
        initial: 1422,
        afterLimitBreak: 1642,
        afterLimitBreakPlus: 0,
      },
      rcv: {
        initial: 451,
        afterLimitBreak: 536,
        afterLimitBreakPlus: 0,
      },
      captainAbility: `Multiplie les HP et la RCV de tous les personnages par 1,2 et multiplie l'ATK des personnages de classe Libre selon les HP de l'équipe au début du tour.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: `Par 2,75 si les HP de l'équipe sont au maximum et par 2 s'il ne reste qu'un HP à l'équipe.`,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Multiplie l'ATK des personnages de classe Libre par 1,5 pendant un tour et si tous les personnages font un coup "PARFAIT", multiplie l'ATK des personnages de classe Libre par 2 au tour suivant`,
      specialTurns: {
        initial: 20,
        max: 14,
        gainWithLimitBreak: 1,
        gainWithLimitBreakPlus: 0,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour les personnages de classe Libre.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [INT] avantageux pour les personnages de classe Libre.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0668.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0669.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: false,
    potentialAbilities: [
      {
        type: PotentialAbility.LIEN_CERCLES,
        icon: '',
        effects: [
          `Réduit la durée de “Lien des cercles” du personnage de 1 tour.`,
          `Réduit la durée de “Lien des cercles” du personnage de 2 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 3 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 4 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 5 tours.`,
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
        type: PotentialAbility.SOIN_URGENCE,
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 0,75 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 40%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 40%.`,
          `Restaure les HP à hauteur de 1,25 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 40%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
          `Restaure les HP à hauteur de 2 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0087.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0098.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Monkey D. Luffy', 'Koala'],
      levels: [
        `Ajoute 5% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 6% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 8% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 10% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 14% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
      ],
    },
    batch: `First Legend`,
  },
  // Sabo V1 6+
  {
    id: '1492',
    title: 'Détenteur des pouvoirs du pyro-fruit',
    name: 'Sabo',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/dquhKdv.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Chef d'état-major de l'Armée révolutionnaire. Grâce aux pouvoirs du pyro-fruit, réapparu suite au décès de son grand frère Ace, il carbonise tous ceux qui se mettent en travers de sa route. Son objectif : venger Ace, protéger Luffy et devenir un véritable homme libre.`,
      type: 'PSY',
      classes: [CharacterClass.Libre, CharacterClass.Ravageur],
      combo: 4,
      hp: {
        initial: 3234,
        afterLimitBreak: 3729,
        afterLimitBreakPlus: 0,
      },
      atk: {
        initial: 1534,
        afterLimitBreak: 1754,
        afterLimitBreakPlus: 0,
      },
      rcv: {
        initial: 452,
        afterLimitBreak: 537,
        afterLimitBreakPlus: 0,
      },
      captainAbility: `Multiplie les HP et la RCV de tous les personnages par 1,2 et multiplie l'ATK des personnages de classe Libre par 2,75.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAbilityAfterLimitBreakPlusAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: [
        {
          specialTurns: {
            initial: 18,
            max: 12,
            gainWithLimitBreak: 1,
            gainWithLimitBreakPlus: 0,
          },
          special: `Multiplie l'ATK des personnages de classe Libre par 1,5 pendant un tour et si au moins 5 personnages font un coup "PARFAIT", multiplie l'ATK des personnages de classe Libre par 2 au tour suivant.`,
        },
        {
          specialTurns: {
            initial: 23,
            max: 17,
            gainWithLimitBreak: 1,
            gainWithLimitBreakPlus: 0,
          },
          special: `Multiplie l'ATK des personnages de classe Libre par 1,75 pendant un tour et si au moins 4 personnages font un coup "PARFAIT", multiplie l'ATK des personnages de classe Libre par 2 au tour suivant.`,
        },
      ],
      special: null,
      specialTurns: null,
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour les personnages de classe Libre.`,
          needLimitBreak: true,
        },
        {
          ability: `Rend les cercles [INT] avantageux pour les personnages de classe Libre.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1492.png',
      },
    },
    sockets: 5,
    cost: 55,
    hasLimitBreak: true,
    hasLimitBreakPlus: false,
    potentialAbilities: [
      {
        type: PotentialAbility.LIEN_CERCLES,
        icon: '',
        effects: [
          `Réduit la durée de “Lien des cercles” du personnage de 1 tour.`,
          `Réduit la durée de “Lien des cercles” du personnage de 2 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 3 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 4 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 5 tours.`,
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
        type: PotentialAbility.SOIN_URGENCE,
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 0,75 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 40%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 40%.`,
          `Restaure les HP à hauteur de 1,25 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 40%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
          `Restaure les HP à hauteur de 2 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/wp-content/uploads/yellow_skull2_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0087.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0098.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Monkey D. Luffy', 'Koala'],
      levels: [
        `Ajoute 5% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 6% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 8% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 10% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
        `Ajoute 14% des HP, de l'ATK et de la RCV du personnage en HP, ATK et RCV pour les personnages soutenus.`,
      ],
    },
    batch: `First Legend`,
  },
];
