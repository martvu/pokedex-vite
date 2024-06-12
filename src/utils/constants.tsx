/* eslint-disable react-refresh/only-export-components */
import bug from '../assets/icons/bug.svg';
import dark from '../assets/icons/dark.svg';
import dragon from '../assets/icons/dragon.svg';
import electric from '../assets/icons/electric.svg';
import fairy from '../assets/icons/fairy.svg';
import fighting from '../assets/icons/fighting.svg';
import fire from '../assets/icons/fire.svg';
import flying from '../assets/icons/flying.svg';
import ghost from '../assets/icons/ghost.svg';
import grass from '../assets/icons/grass.svg';
import ground from '../assets/icons/ground.svg';
import ice from '../assets/icons/ice.svg';
import normal from '../assets/icons/normal.svg';
import poison from '../assets/icons/poison.svg';
import psychic from '../assets/icons/psychic.svg';
import rock from '../assets/icons/rock.svg';
import steel from '../assets/icons/steel.svg';
import water from '../assets/icons/water.svg';

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
  normal: normal,
  fire: fire,
  water: water,
  electric: electric,
  grass: grass,
  ice: ice,
  fighting: fighting,
  poison: poison,
  ground: ground,
  flying: flying,
  psychic: psychic,
  bug: bug,
  rock: rock,
  ghost: ghost,
  dragon: dragon,
  dark: dark,
  steel: steel,
  fairy: fairy,
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

