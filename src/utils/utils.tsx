import { TYPE_COLORS, TYPE_SECONDARY_COLORS } from './constants';
import { Pokemon } from './pokeApiTypes';

export const formatPokemonName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/-m$/g, ' ♂')
    .replace(/-f$/g, ' ♀')
    .replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest);
};

export const getTypeColorGradient = (pokemonDetails: Pokemon) => {
  const typesArray = pokemonDetails.types;
  const col1 = TYPE_COLORS[typesArray[0].type.name] || '#fff';
  const col2 =
    TYPE_COLORS[typesArray[1]?.type.name] ||
    TYPE_SECONDARY_COLORS[typesArray[0].type.name] ||
    '#fff';
  return `linear-gradient(45deg, ${col2} 0%, ${col1} 100%)`;
};
