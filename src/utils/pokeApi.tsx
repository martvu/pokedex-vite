import { NamedAPIResource } from './pokeApiTypes';

export const getPokemonData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPokemonDataList = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const pokemonList = await Promise.all(
      data.results.map((pokemon: NamedAPIResource) =>
        getPokemonData(pokemon.url)
      )
    );
    return pokemonList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
