import { TYPE_COLORS } from "./constants";
import { Pokemon, PokemonType } from "./pokeApiTypes";


export const formatPokemonName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/-m$/g, ' ♂')
    .replace(/-f$/g, ' ♀')
    .replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest);
};

export const getTypeColorGradient = (pokemonDetails: Pokemon) => {
  const types: PokemonType[] = pokemonDetails.types;
  const gradientColors = types.map(
    type => TYPE_COLORS[type.type.name] || 'white'
  );
  if (gradientColors.length === 1) {
    gradientColors.push('white');
  }
  return `linear-gradient(45deg, ${gradientColors.join(', ')})`;
}; 