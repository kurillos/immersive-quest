export interface Pack {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceDetail: string;
  format: string;
  includes: string[];
  bestFor: string;
  sigil: 'compass' | 'scroll' | 'seal' | 'shield';
  featured?: boolean;
}

export const packs: Pack[] = [ 
  {
    id: 'decouverte',
    name: 'Initiation & One-Shot',
    tagline: 'One-shot, scénario bouclé en une soirée (Particuliers)',
    price: 'à partir de 40 €',
    priceDetail: 'par joueur',
    format: '3 à 4 heures, présentiel ou en ligne',
    includes: [
      'Entretien préalable de 15 minutes avec l'organisateur (Choix de jeu & Ambiance)'
      'Scénario complet, aucune expérience requise',
      'Outils de Sécurité Emtionnnelle (Carte X - Ligne & voiles)',
      'Personnages prétirés fournis',
      "Univers au choix parmi les 4 proposés",
      'Musiques d'ambiance, cartes / VTT configuré',
      'Collation incluse : Bière (locale/artisanale), saucisson & bonbons',
      '1 bouteille de soft par groupe (Coca, Oasis ou Ice-Tea)',
      'Déplacement inclus dans un rayon de 30 km (Saint-Didier-sous-Riverie, Lyon, Saint-Étienne...)'
    ],
    bestFor: 'Anniversaire, EVG/EVJF, soirée entre amis, premier essai',
    sigil: 'compass',
  },
  {
    id: 'mini-chronique',
    name: 'Série & Chronique (Particuliers)',
    tagline: 'Un arc narratif complet, sans engagement long',
    price: 'à partir de 135 € / Joueur',
    priceDetail: 'pour 3 à 5 sessions',
    format: 'Sessions de 3h, rythme au choix du groupe',
    includes: [
      'Création de personnages accompagnée, lors de la session 0',
      'Arc narratif écrit sur mesure pour le groupe',
      'Suivi de progression entre les sessions',
      'Résumé des épisodes rédigés entre chaque session',
      'Univers au choix parmi les 4 proposés',
      'Collation incluse : Bière (locale/artisanale), saucisson & bonbons',
      '1 bouteille de soft par groupe (Coca, Oasis ou Ice-Tea)',
      'Déplacement inclus dans un rayon de 30 km (Saint-Didier-sous-Riverie, Lyon, Saint-Étienne...)'
    ],
    bestFor: 'Un groupe soudé qui veut voir ses personnages évoluer',
    sigil: 'scroll',
    featured: true,
  },
  {
    id: 'legende',
    name: 'Légende',
    tagline: 'Prestation clé-en-main, présentiel premium',
    price: '88€ / joueurs',
    priceDetail: 'selon mise en scène',
    format: 'Présentiel, matériel complet inclus',
    includes: [
      'Décors, cartes grand format, écran VTT portable',
      'Figurines peintes et bande-son dédiée',
      'Props immersifs (courriers, objets, fioles...)',
      'Scénario entièrement personnalisé',
      'Collation incluse : Bière (locale/artisanale), saucisson & bonbons',
      '1 bouteille de soft par groupe (Coca, Oasis ou Ice-Tea)',
      'Déplacement inclus dans un rayon de 30 km (Saint-Didier-sous-Riverie, Lyon, Saint-Étienne...)'
    ],
    bestFor: 'Un moment marquant, événement privé ou cadeau exceptionnel',
    sigil: 'seal',
  },
  {
    id: 'corporate',
    name: 'Team-Building',
    tagline: 'Atelier narratif pour entreprises',
    price: 'sur devis',
    priceDetail: 'facturé à la demi-journée ou journée',
    format: 'Sur site ou en ligne, groupes de 4 à 12',
    includes: [
      'Scénario orienté communication ou gestion de crise',
      'Animation par un MJ professionnel',
      'Débrief collectif en fin d\u2019atelier',
      'Format adaptable au format entreprise (durée, effectif)',
    ],
    bestFor: 'Cohésion d\u2019équipe, séminaire, formation par le jeu',
    sigil: 'shield',
  },
];
