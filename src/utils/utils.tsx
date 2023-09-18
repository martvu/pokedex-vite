import { TYPE_COLORS, TYPE_SECONDARY_COLORS } from "./constants";
import { Pokemon, PokemonType } from "./pokeApiTypes";


export const formatPokemonName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/-m$/g, ' ♂')
    .replace(/-f$/g, ' ♀')
    .replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest);
};

export const getTypeColorGradient = (pokemonDetails: Pokemon) => {
  const typesArray: PokemonType[] = pokemonDetails.types;
  let gradientColors = [];
  if (typesArray.length === 1) {
    gradientColors = [
      TYPE_COLORS[typesArray[0].type.name],
      TYPE_SECONDARY_COLORS[typesArray[0].type.name],
    ];
  } else {
    gradientColors = [
      TYPE_COLORS[typesArray[0].type.name],
      TYPE_COLORS[typesArray[1].type.name],
    ];
  } 
  return `linear-gradient(45deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;
}; 