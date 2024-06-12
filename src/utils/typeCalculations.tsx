// src/types.ts
import * as typesData from './types.json';

type TypeEffectiveness = {
  [key: string]: {
    attack: {
      double: string[];
      half: string[];
      zero: string[];
    };
    defense: {
      double: string[];
      half: string[];
      zero: string[];
    };
  };
};

const types: TypeEffectiveness = typesData;

function calculateEffectiveness(pokemonTypes: string[]): { [key: string]: number } {
  const effectiveness: { [key: string]: number } = {};

  pokemonTypes.forEach(type => {
    if (!types[type]) return;

    const defense = types[type].defense;

    defense.double.forEach(t => {
      effectiveness[t] = (effectiveness[t] || 1) * 2;
    });

    defense.half.forEach(t => {
      effectiveness[t] = (effectiveness[t] || 1) * 0.5;
    });

    defense.zero.forEach(t => {
      effectiveness[t] = (effectiveness[t] || 1) * 0;
    });
  });

  return effectiveness;
}

export { calculateEffectiveness };
