import { describe, test, expect } from 'vitest';
import { setFavorite, isFavorite } from '../../components/pokemoncard';

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
    setFavorite(pikachu.id);
    expect(isFavorite(pikachu.id)).toBe(true);
  })
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
