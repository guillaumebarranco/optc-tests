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
];
