export type GameSlug = 'dnd5' | 'cthulhu' | 'sotdl' | 'vampire';

export interface Game {
  slug: GameSlug;
  name: string;
  subtitle: string;
  accent: string; // CSS var name, e.g. 'var(--dnd)'
  pitch: string;
  description: string;
  atmosphere: string;
  players: string;
  duration: string;
  audience: string;
  sigil: 'crown' | 'eye' | 'skull' | 'rose';
}

export const games: Game[] = [
  {
    slug: 'dnd5',
    name: 'Heroic Fantasy 5e',
    subtitle: 'Fantasy héroïque',
    accent: 'var(--dnd)',
    pitch: "Épée, magie et légendes à écrire à plusieurs.",
    description:
      "L'univers d'entrée en matière par excellence : donjons, quêtes, factions et montée en puissance. Idéal pour un groupe qui veut du spectacle, des choix qui comptent et un personnage qui grandit de session en session.",
    atmosphere: 'Épique, tactique, chaleureux',
    players: '3 à 6 joueurs',
    duration: 'One-shot ou campagne',
    audience: 'Débutants bienvenus',
    sigil: 'crown',
  },
  {
    slug: 'cthulhu',
    name: "Enquête horrifique année 20",
    subtitle: 'Horreur & enquête',
    accent: 'var(--cthulhu)',
    pitch: "Chaque indice a un prix. La raison aussi.",
    description:
      "Une enquête glaçante dans les années 1920, où la curiosité mène plus loin qu'on ne le voudrait. Tension, ambiance sonore travaillée et personnages fragiles : on ne gagne pas toujours, on survit.",
    atmosphere: 'Oppressante, méticuleuse',
    players: '3 à 5 joueurs',
    duration: '1 session ou mini-arc',
    audience: 'Amateurs de tension',
    sigil: 'eye',
  },
  {
    slug: 'sotdl',
    name: "Dark Fantasy - Joueurs adulte uniquement",
    subtitle: 'Dark fantasy',
    accent: 'var(--sotdl)',
    pitch: "Le monde se meurt. Vous choisissez comment y survivre.",
    description:
      "Un monde crépusculaire où la magie corrompt autant qu'elle protège. Règles rapides, ton sombre et ambiance mature pour des joueurs qui veulent une fantasy sans filtre.",
    atmosphere: 'Sombre, brutale, littéraire',
    players: '3 à 5 joueurs',
    duration: 'One-shot ou mini-chronique',
    audience: 'Joueurs confirmés',
    sigil: 'skull',
  },
  {
    slug: 'vampire',
    name: 'Vampire',
    subtitle: 'Gothique & politique',
    accent: 'var(--vampire)',
    pitch: "Immortel, affamé, et pris dans les intrigues de votre propre clan.",
    description:
      "Du roleplay dense, des rapports de pouvoir et une soif à gérer en toutes circonstances. Parfait pour un groupe qui préfère les dialogues à froid aux jets de dés bruyants.",
    atmosphere: 'Feutrée, politique, sensuelle',
    players: '3 à 5 joueurs',
    duration: 'Chronique recommandée',
    audience: 'Amateurs de roleplay',
    sigil: 'rose',
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
