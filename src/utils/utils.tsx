import { TYPE_COLORS, TYPE_SECONDARY_COLORS } from "./constants";
import { PokemonType } from "./pokeApiTypes";


export const formatPokemonName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/-m$/g, ' ♂')
    .replace(/-f$/g, ' ♀')
    .replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest);
};

// Remove if not needed
export const getTypeColorGradient = (typesArray: PokemonType[]) => {
  if (typesArray.length === 1) {
    return [
      TYPE_COLORS[typesArray[0].type.name],
      TYPE_SECONDARY_COLORS[typesArray[0].type.name],
    ];
  } else {
    return [
      TYPE_COLORS[typesArray[0].type.name],
      TYPE_COLORS[typesArray[1].type.name],
    ];
  } 
}; 