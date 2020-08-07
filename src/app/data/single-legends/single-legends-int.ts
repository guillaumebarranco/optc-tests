import { Legend } from '../../models/legend.interface';
import { CharacterClass } from '../../models/character-class.interface';
import { PotentialAbility } from '../../models/potential-ability';

export const singleLegendsInt: Legend[] = [
  // Rayleigh V1
  {
    id: '0367',
    title: null,
    name: 'Rayleigh le Seigneur des Ténèbres',
    isDual: false,
    artwork: {
      fiveStars: 'https://i.imgur.com/iMMRzHA.png',
      sixStars: 'https://i.imgur.com/eERtzOs.png',
      sixPlusStars: null,
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Ancien second de l'équipage de Roger. Également connu sous les noms de "Bras Droit du Roi des Pirates" et de "Seigneur des Ténèbres". C'est une légende vivante pour tous, ses exploits sont plus que célèbres. C'est un pirate à la retraite qui utilise le Fluide du Conquérant.`,
      type: 'INT',
      classes: [CharacterClass.Cogneur, CharacterClass.Intellectuel],
      combo: 4,
      hp: {
        initial: 3001,
        afterLimitBreak: 3501,
        afterLimitBreakPlus: 0,
      },
      atk: {
        initial: 1300,
        afterLimitBreak: 1490,
        afterLimitBreakPlus: 0,
      },
      rcv: {
        initial: 500,
        afterLimitBreak: 600,
        afterLimitBreakPlus: 0,
      },
      captainAbility: `Multiplie le multiplicateur de combos par 4.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Inflige 20 fois son ATK en dégâts de type INT sur tous les ennemis et réduit la durée de "Lien" de 5 tours.`,
      specialTurns: {
        initial: 23,
        max: 18,
        gainWithLimitBreak: 2,
        gainWithLimitBreakPlus: 0,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour tous les personnages.`,
          needLimitBreak: true,
        },
        {
          ability: `Si un autre personnage utilise son coup spécial, réduit son coup spécial de 2 tours.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0366.png',
        sixStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0367.png',
        sixPlusStarsPicture: null,
      },
    },
    sockets: 4,
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
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 10% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 20% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 7% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
      {
        type: PotentialAbility.SOIN_URGENCE,
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 10%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 15%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 20%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 30%,`,
          `Restaure les HP à hauteur de 2 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0088.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0099.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Monkey D. Luffy'],
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
  // Rayleigh V1 6+
  {
    id: '1619',
    title: 'Bras droit du roi des pirates',
    name: `Silvers Rayleigh le "seigneur des ténèbres"`,
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/7oBy6xX.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Ancien vice-capitaine de l'équipage de Roger. Bien qu'il ait conquis Grand Line et découvert la véritable Histoire aux côtés de Roger, dont on raconte qu'il pouvait entendre la voix de "toutes les choses", il n'en dit que très peu sur ses différents exploits et préfère encourager les jeunes aventuriers à explorer le monde par eux-mêmes.`,
      type: 'INT',
      classes: [CharacterClass.Cogneur, CharacterClass.Intellectuel],
      combo: 4,
      hp: {
        initial: 3121,
        afterLimitBreak: 3621,
        afterLimitBreakPlus: 0,
      },
      atk: {
        initial: 1472,
        afterLimitBreak: 1662,
        afterLimitBreakPlus: 0,
      },
      rcv: {
        initial: 515,
        afterLimitBreak: 615,
        afterLimitBreakPlus: 0,
      },
      captainAbility: `Multiplie le multiplicateur de combos par 4 et multiplie les HP et la RCV de tous les personnages par 1,2.`,
      captainAbilityAfterLimitBreakPlus: null,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Réduit la durée de "Lien", de "Désespoir du capitaine" et de "Paralysie" de 7 tours, retarde toutes les attaques ennemies d'un tour et rend le timing des coups "PARFAIT" plus facile pendant un tour.`,
      specialTurns: {
        initial: 19,
        max: 14,
        gainWithLimitBreak: 2,
        gainWithLimitBreakPlus: 0,
      },
      crewmateAbilities: [
        {
          ability: `Ajoute 50 en HP, ATK et RCV pour tous les personnages.`,
          needLimitBreak: true,
        },
        {
          ability: `Si un autre personnage utilise son coup spécial, réduit son coup spécial de 2 tours.`,
          needLimitBreak: true,
        },
      ],
      picture: {
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture: 'https://i.imgur.com/KBeErRM.png',
      },
    },
    sockets: 4,
    cost: 65,
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
          `Réduit la durée de “Lien des cercles” du personnage de 5 tours.`,
          `Réduit la durée de “Lien des cercles” du personnage de 7 tours.`,
        ],
      },
      {
        type: PotentialAbility.ATTAQUE_CRITIQUE,
        icon: '',
        effects: [
          `Si un coup "PARFAIT" est effectué avec ce personnage, 10% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 20% de chances de faire 3% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 30% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 40% de chances de faire 5% l'ATK du personnage en dégâts additionnels.`,
          `Si un coup "PARFAIT" est effectué avec ce personnage, 50% de chances de faire 7% l'ATK du personnage en dégâts additionnels.`,
        ],
      },
      {
        type: PotentialAbility.SOIN_URGENCE,
        icon: '',
        effects: [
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 10%.`,
          `Restaure les HP à hauteur de 1 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 15%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 20%.`,
          `Restaure les HP à hauteur de 1,5 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 30%,`,
          `Restaure les HP à hauteur de 2 fois les RCV du personnage si ce dernier réussit un “PARFAIT” lorsque les HP restants sont inférieurs ou égaux à 50%.`,
        ],
      },
    ],
    evolvers: [
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0088.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0266.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0099.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
    ],
    support: {
      hasSupportEffect: true,
      supportedCharacters: ['Monkey D. Luffy'],
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
  // Pudding
  {
    id: '2837',
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
      classes: [CharacterClass.Intellectuel, CharacterClass.Tireur],
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
  // Sengoku6+
  {
    id: '1847',
    title: 'Amiral commandant en chef de la Marine',
    name: 'Sengoku le Bouddha',
    isDual: false,
    artwork: {
      fiveStars: null,
      sixStars: null,
      sixPlusStars: 'https://i.imgur.com/jIF3ugu.png',
    },
    dualCharacterData: null,
    singleCharacterData: {
      story: `Amiral commandant en chef de la Marine. Soucieux d'éradiquer le Mal mais aussi de faire triompher la Justice, il accède à la demande de Shanks de mettre fin à la guerre au sommet, voyant bien que l'objectif de la Marine a déjà été atteint et que ses soldats n'ont plus aucune raison de continuer à se battre.`,
      type: 'INT',
      classes: [CharacterClass.Cogneur, CharacterClass.Intellectuel],
      combo: 4,
      hp: {
        initial: 3696,
        afterLimitBreak: 4046,
        afterLimitBreakPlus: 4546,
      },
      atk: {
        initial: 1458,
        afterLimitBreak: 1708,
        afterLimitBreakPlus: 1908,
      },
      rcv: {
        initial: 398,
        afterLimitBreak: 498,
        afterLimitBreakPlus: 548,
      },
      captainAbility: `Réduit le temps de chargement des coups spéciaux de tous les personnages de 2 tours au début de la quête, multiplie l'ATK des personnages ayant un coût inférieur ou égal à 29 par 3,25, les HP par 1,2 et multiplie l'ATK des personnages ayant un coût égal à 54 par 3.`,
      captainAbilityAfterLimitBreakPlus: `Réduit le temps de chargement des coups spéciaux de tous les personnages de 2 tours au début de la quête, multiplie l'ATK des personnages ayant un coût inférieur ou égal à 29 par 4, les HP et la RCV par 1,5 et multiplie l'ATK des personnages ayant un coût égal à 54 par 4.`,
      captainAbilityAdditionnalInformation: null,
      captainAction: null,
      captainActionTurns: null,
      specialWithStages: null,
      special: `Inflige de lourds dégâts de type INT sur tous les ennemis, multiplie l'ATK de tous les personnages par 1,5 pendant un tour et change les cercles en cercles correspondants pour les personnages ayant un coût inférieur ou égal à 29.`,
      specialTurns: {
        initial: 23,
        max: 14,
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
        fiveStarsPicture: null,
        sixStarsPicture: null,
        sixPlusStarsPicture:
          'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f1847.png',
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
      'https://onepiece-treasurecruise.com/wp-content/uploads/black_skull_f.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0118.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0088.png',
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0304.png',
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
];
