import { expect, test, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Pokemon,
  NamedAPIResource,
  PokemonSprites,
  PokemonStat,
  PokemonType,
} from '../utils/pokeApiTypes';
import { ThemeProvider } from '../context/ThemeContext';
import { useState } from 'react';
import { FavoriteContext } from '../pages/PokemonList';

// Create a mock context
// Mock context provider
export function MockFavoriteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoritesArray, setFavoritesArray] = useState<number[]>(
    JSON.parse(localStorage.getItem('favoritesArray') || '[]')
  );

  return (
    <FavoriteContext.Provider value={{ favoritesArray, setFavoritesArray }}>
      {children}
    </FavoriteContext.Provider>
  );
}

function PokemonCardWithMockContext({
  pokemonDetails,
}: {
  pokemonDetails: Pokemon;
}) {
  return (
    <MockFavoriteContextProvider>
      <PokemonCard pokemonDetails={pokemonDetails} />
    </MockFavoriteContextProvider>
  );
}
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
  name: 'Pikachu',
  base_experience: 112,
  height: 4,
  is_default: true,
  order: 25,
  weight: 60,
  forms: [] as NamedAPIResource[],
  location_area_encounters: '',
  sprites: {
    front_default: 'https://example.com/pikachu-front.png',
    front_shiny: 'https://example.com/pikachu-front-shiny.png',
    front_female: 'https://example.com/pikachu-front-female.png',
    front_shiny_female: 'https://example.com/pikachu-front-shiny-female.png',
    back_default: 'https://example.com/pikachu-back.png',
    back_shiny: 'https://example.com/pikachu-back-shiny.png',
    back_female: 'https://example.com/pikachu-back-female.png',
    back_shiny_female: 'https://example.com/pikachu-back-shiny-female.png',
  } as PokemonSprites,
  species: {
    name: 'pikachu-species',
    url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
  } as NamedAPIResource,
  stats: [
    {
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
      effort: 0,
      base_stat: 35,
    } as PokemonStat,
  ],

  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/',
      },
    } as PokemonType,
    {
      slot: 2,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/13/',
      },
    } as PokemonType,
  ],
};

describe('PokemonCard', () => {
  test('Props Test: Component displays correct information from pokemonDetail prop', async () => {
    render(
      <ThemeProvider>
        <Router>
          <PokemonCardWithMockContext pokemonDetails={mockPikachu} />
        </Router>
      </ThemeProvider>
    );
    const element = document.createElement('div');
    expect(element).not.toBeNull();

    expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
    expect(await screen.findByText(/electric/i)).toBeInTheDocument();
  });
});

test('Favorite Button Test: Test the functionality of the favorite button', () => {
  const { queryByTestId } = render(
    <ThemeProvider>
      <Router>
        <PokemonCardWithMockContext pokemonDetails={mockPikachu} />
      </Router>
    </ThemeProvider>
  );
  // Contains span and svg (therefore -> query ALL)
  const favoriteButton = queryByTestId('test-favorite-icon');

  // expect to find the button
  expect(favoriteButton).not.toBeNull();
  if (favoriteButton === null) return;

  // This is the span element
  expect(favoriteButton.className).toContain('favorite-icon-inactive');

  // Simulate a click on the button to add to favorites
  fireEvent.click(favoriteButton);
  expect(favoriteButton.className).toContain('favorite-icon-active');
  fireEvent.click(favoriteButton);
  expect(favoriteButton.className).toContain('favorite-icon-inactive');
});
