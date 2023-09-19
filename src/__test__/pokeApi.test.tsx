import { describe, test, expect } from 'vitest';
import { getPokemonData, getPokemonDataList } from '../utils/pokeApi';

describe('getPokemonData', () => {
  test('should return pokemon data', async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    const result = await getPokemonData(url);
    expect(result.id).toEqual(1);
    expect(result.name).toEqual('bulbasaur');
  });
});

describe('getPokemonDataList', () => {
  test('should return list of pokemon data', async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const result = await getPokemonDataList(url);
    expect(result[0].id).toEqual(1);
    expect(result[0].name).toEqual('bulbasaur');
  });
});
