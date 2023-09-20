
import { Pokemon, NamedAPIResource, PokemonAbility, PokemonSprites, PokemonType, PokemonStat } from '../pokeApiTypes';  // Replace with the actual path to your types file
import {expect, test} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Pokemoncard from '../../components/pokemoncard';

// Mocking localstorage and its functions
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

const mockPikachu: Pokemon = {
  id: 25, 
  name: "Pikachu", 
  base_experience: 112, 
  height: 4, 
  is_default: true,
  order: 25,
  weight: 60,
  abilities: [
    {
      is_hidden: false,
      slot: 1,
      ability: {
        name: "Static",
        url: "https://pokeapi.co/api/v2/ability/1/", 
      },
    },
  ] as PokemonAbility[],

  forms: [] as NamedAPIResource[],

  game_indices: [] as any[], 

  held_items: [] as any[], 

  location_area_encounters: "", 

  moves: [] as any[], 

  sprites: {
    front_default: "https://example.com/pikachu-front.png",
    front_shiny: "https://example.com/pikachu-front-shiny.png", 
    front_female: "https://example.com/pikachu-front-female.png", 
    front_shiny_female: "https://example.com/pikachu-front-shiny-female.png", 
    back_default: "https://example.com/pikachu-back.png",
    back_shiny: "https://example.com/pikachu-back-shiny.png", 
    back_female: "https://example.com/pikachu-back-female.png",
    back_shiny_female: "https://example.com/pikachu-back-shiny-female.png", 
  } as PokemonSprites,

  species: {
    name: "pikachu-species", 
    url: "https://pokeapi.co/api/v2/pokemon-species/25/", 
  } as NamedAPIResource,

  stats: [
    {
      stat: {
        name: "hp", 
        url: "https://pokeapi.co/api/v2/stat/1/", 
      },
      effort: 0,
      base_stat: 35, 
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
;
  

test('Props Test: Component displays correct information from pokemonInfo prop', async () => {

  const element = document.createElement('div')
  expect(element).not.toBeNull()

  const { getByText } = render(<Pokemoncard pokemonInfo={mockPikachu} />);
  // Assert that the component displays the correct name
  expect(getByText('Pikachu').textContent).to.equal('Pikachu');
  expect(getByText('Pikachu').textContent, 'Pikachu');
  
  // Assert that the component displays the correct ID
  expect(getByText('#25').textContent).to.equal('#25');
  
  // Assert that the component displays the correct type
  expect(getByText('electric').textContent).to.equal('electric');
});

test('Favorite Button Test: Test the functionality of the favorite button', () => {

  const { queryAllByTestId  } = render(<Pokemoncard pokemonInfo={mockPikachu} />);

  // Contains span and svg (therefore -> query ALL)
  const favoriteButtons = queryAllByTestId ('favorite-button');
  expect(favoriteButtons.length).toBeGreaterThan(0);

  // This is the span element
  const favoriteButton = favoriteButtons[0];
  expect(favoriteButton.className).toContain('favorite-icon-inactive');

  // Simulate a click on the button to add to favorites
  fireEvent.click(favoriteButton);
  expect(favoriteButton.className).toContain('favorite-icon-active');

  // Simulate a click on the button to remove from favorites
  fireEvent.click(favoriteButton);

  // Assert that the button has the "favorite-icon-inactive" class again
  expect(favoriteButton.className).toContain('favorite-icon-inactive');
});

test('Favorite Button Test: Test adding ID to localStorage when the favorite button is clicked', () => {
  const { queryAllByTestId } = render(<Pokemoncard pokemonInfo={mockPikachu} />);

  // Contains span and svg (therefore -> query ALL)
  const favoriteButtons = queryAllByTestId('favorite-button');
  expect(favoriteButtons.length).toBeGreaterThan(0);

  // This is the span element
  const favoriteButton = favoriteButtons[0];
  expect(favoriteButton.className).toContain('favorite-icon-inactive');

  // Mock localStorage
  localStorage.setItem('favorites', JSON.stringify([]));

  // Simulate a click on the button to add to favorites
  fireEvent.click(favoriteButton);
  expect(favoriteButton.className).toContain('favorite-icon-active');

  // Check if the ID is added to localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  expect(favorites).toContain(mockPikachu.id.toString());

  // Simulate a click on the button to remove from favorites
  fireEvent.click(favoriteButton);

  // Check if the ID is removed from localStorage
  const updatedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  expect(updatedFavorites).not.toContain(mockPikachu.id.toString());
});

