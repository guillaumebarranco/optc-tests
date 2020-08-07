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
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
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
      'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f0095.png',
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
];
