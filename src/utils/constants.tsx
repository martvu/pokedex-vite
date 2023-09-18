/* eslint-disable react-refresh/only-export-components */
export const MAX_NO_OF_POKEMON: number = 151;

export const TYPES: string[] = [
  'all',
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export const TYPE_ICONS: Record<string, string> = {
  normal: "/icons/normal.svg",
  fire: "/icons/fire.svg",
  water: "/icons/water.svg",
  electric: "/icons/electric.svg",
  grass: "/icons/grass.svg",
  ice: "/icons/ice.svg",
  fighting: "/icons/fighting.svg",
  poison: "/icons/poison.svg",
  ground: "/icons/ground.svg",
  flying: "/icons/flying.svg",
  psychic: "/icons/psychic.svg",
  bug: "/icons/bug.svg",
  rock: "/icons/rock.svg",
  ghost: "/icons/ghost.svg",
  dragon: "/icons/dragon.svg",
  dark: "/icons/dark.svg",
  steel: "/icons/steel.svg",
  fairy: "/icons/fairy.svg",
};

export const TYPE_COLORS: Record<string, string> = {
  normal: '#a8a77a',
  fire: '#ee8130',
  water: '#6390f0',
  electric: '#f7d02c',
  grass: '#7ac74c',
  ice: '#96d9d6',
  fighting: '#c22e28',
  poison: '#a33ea1',
  ground: '#e2bf65',
  flying: '#a98ff3',
  psychic: '#f95587',
  bug: '#a6b91a',
  rock: '#b6a136',
  ghost: '#735797',
  dragon: '#6f35fC',
  dark: '#705746',
  steel: '#b7b7ce',
  fairy: '#d685ad',
};

export const TYPE_SECONDARY_COLORS: Record<string, string> = {
  normal: '#d7d6ab',
  fire: '#d12929',
  water: '#185ceb',
  electric: '#f3a800',
  grass: '#b0e50e',
  ice: '#5dfbe5',
  fighting: '#d11313',
  poison: '#6a3469',
  ground: '#c3a200',
  flying: '#b8a7e9',
  psychic: '#ff004e',
  bug: '#7a8b01',
  rock: '#856f00',
  ghost: '#6204db',
  dragon: '#362f46',
  dark: '#221a14',
  steel: '#ebebed',
  fairy: '#f1a2c9',
};

export const SORT_BY: string[] = ['ID', 'A-Z', 'high to low'];

export const STAT_COLORS: Record<string, string> = {
  hp: '#ff0100',
  attack: '#f08030',
  defense: '#f9d02f',
  'special-attack': '#6790f0',
  'special-defense': '#78c84f',
  speed: '#f95887',
};
