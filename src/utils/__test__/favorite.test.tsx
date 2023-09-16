/*
import { describe, test, expect, beforeEach } from 'vitest';
import setFavorite from "../../components/pokemoncard"

import { Pokemon, NamedAPIResource, PokemonAbility, PokemonSprites, PokemonType, PokemonStat } from '../pokeApiTypes';  // Replace with the actual path to your types file

const mockPikachu: Pokemon = {
    id: 25, 
    name: "Pikachu", // Replace with the desired name
    base_experience: 112, // Replace with the desired base experience
    height: 4, // Replace with the desired height
    is_default: true, // Replace with the desired value
    order: 25, // Replace with the desired order
    weight: 60, // Replace with the desired weight
    abilities: [
      {
        is_hidden: false, // Replace with the desired value
        slot: 1, // Replace with the desired slot
        ability: {
          name: "Static", // Replace with the ability name
          url: "https://pokeapi.co/api/v2/ability/1/", // Replace with the actual URL
        },
      },
    ] as PokemonAbility[],
  
    forms: [] as NamedAPIResource[], // Replace with the desired forms
  
    game_indices: [] as any[], // Replace with the desired game indices
  
    held_items: [] as any[], // Replace with the desired held items
  
    location_area_encounters: "", // Replace with the desired location area encounters
  
    moves: [] as any[], // Replace with the desired moves
  
    sprites: {
      front_default: "https://example.com/pikachu-front.png", // Replace with the desired sprite URLs
      front_shiny: "https://example.com/pikachu-front-shiny.png", // Replace with the desired sprite URLs
      front_female: "https://example.com/pikachu-front-female.png", // Replace with the desired sprite URLs
      front_shiny_female: "https://example.com/pikachu-front-shiny-female.png", // Replace with the desired sprite URLs
      back_default: "https://example.com/pikachu-back.png", // Replace with the desired sprite URLs
      back_shiny: "https://example.com/pikachu-back-shiny.png", // Replace with the desired sprite URLs
      back_female: "https://example.com/pikachu-back-female.png", // Replace with the desired sprite URLs
      back_shiny_female: "https://example.com/pikachu-back-shiny-female.png", // Replace with the desired sprite URLs
    } as PokemonSprites,
  
    species: {
      name: "pikachu-species", // Replace with the species name
      url: "https://pokeapi.co/api/v2/pokemon-species/25/", // Replace with the actual URL
    } as NamedAPIResource,
  
    stats: [
      {
        stat: {
          name: "hp", // Replace with the stat name
          url: "https://pokeapi.co/api/v2/stat/1/", // Replace with the actual URL
        },
        effort: 0, // Replace with the effort value
        base_stat: 35, // Replace with the base stat value
      } as PokemonStat,
    ],
  
    types: [
      {
        slot: 1, 
        type: {
          name: "electric", 
          url: "https://pokeapi.co/api/v2/type/13/", 
        },
      } as PokemonType,
      {
        slot: 2, 
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/13/", 
        },
      } as PokemonType,
    ],
  };

// Define a base structure for localStorageMock
const localStorageMock: Record<string, any> = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: (index: number) => null,
    length: 0,
  };
  
  // Define the custom implementations for getItem, setItem, and length
  localStorageMock.getItem = (key: string) => localStorageMock[key] || null;
  localStorageMock.setItem = (key: string, value: string) => {
    localStorageMock[key] = value;
    localStorageMock.length = Object.keys(localStorageMock).length;
  };
  localStorageMock.length = Object.keys(localStorageMock).length;
  
  // Mock the window object
  globalThis.localStorage = localStorageMock as Storage;

  
describe('setFavorite', () => {
  test('setFavorite adds a Pokemon to favorites and isFavorite returns true', async () => {
    const pikachu = { id: 25, name: 'Pikachu' };
    setFavorite(pokemonInfo={mockPikachu});
    expect(isFavorite(pikachu.id)).toBe(true);
  })
});

describe('setFavorite', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  test('setFavorite adds a Pokemon to favorites and isFavorite returns true', () => {
    const pikachu = { id: 25, name: 'Pikachu' };

    // Call setFavorite with Pikachu's id
    setFavorite(pikachu.id);

    // Now, check if Pikachu is in favorites
    expect(isFavorite(pikachu.id)).toBe(true);
  });

  test('setFavorite removes a Pokemon from favorites and isFavorite returns false', () => {
    const pikachu = { id: 25, name: 'Pikachu' };

    // Call setFavorite with Pikachu's id
    setFavorite(pikachu.id);

    // Now, check if Pikachu is in favorites (should be true)
    expect(isFavorite(pikachu.id)).toBe(true);

    // Call setFavorite again to remove Pikachu from favorites
    setFavorite(pikachu.id);

    // Now, check if Pikachu is still in favorites (should be false)
    expect(isFavorite(pikachu.id)).toBe(false);
  });
});


describe('setFavorite duplicates', () => {
    test('setFavorite handles duplicates correctly', async () => {
        const pikachu = { id: 25, name: 'Pikachu' };
        setFavorite(pikachu.id);
        expect(isFavorite(pikachu.id)).toBe(true);

        // Attempt to add Pikachu again -> this should remove the id from favorites
        setFavorite(pikachu.id);
        expect(isFavorite(pikachu.id)).toBe(false);
        })
  });

  */
