import { usePokemonDataList } from '../utils/pokeApi';
import PokemonCard from '../components/PokemonCard';
import { createContext, useState } from 'react';
import { Pokemon } from '../utils/pokeApiTypes';
import Header from '../components/Header';
import Filters from '../components/Filters';
import loadingIcon from '../assets/img/poke-loading.gif';

export interface FavoriteContextProps {
  favoritesArray: number[];
  setFavoritesArray: (favoritesArray: number[]) => void;
}

export const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined
);

export default function PokemonList() {
  const NUM_POKEMON = 151;
  const {
    data: pokemonDataList,
    isLoading,
    error,
  } = usePokemonDataList(NUM_POKEMON);
  // handle filters
  const [displayedPokemonList, setDisplayedPokemonList] = useState<Pokemon[]>(
    []
  );
  const [favoritesArray, setFavoritesArray] = useState<number[]>(
    JSON.parse(localStorage.getItem('favoritesArray') || '[]')
  );

  if (error) {
    return <div>Error fetching data </div>;
  }

  return (
    <FavoriteContext.Provider value={{ favoritesArray, setFavoritesArray }}>
      <Header />
      <Filters
        favoritesArray={favoritesArray}
        pokemonDataList={pokemonDataList as Pokemon[]}
        setDisplayedPokemonList={setDisplayedPokemonList}
      />
      {isLoading && (
        <div className={`loading-screen pokemon-text`}>
          <img src={loadingIcon} alt="loading icon" />
        </div>
      )}
      {(error as Error) && (
        <div className="error-screen pokemon-text">
          <h3>An error has occured</h3>
        </div>
      )}
      {!error && !isLoading && displayedPokemonList?.length === 0 && (
        <div className="no-results pokemon-text">
          <h3>No Pokemon Found!</h3>
        </div>
      )}
      {!isLoading && (
        <ul className="pokemon-list-container">
          {displayedPokemonList?.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemonDetails={pokemon} />
          ))}
        </ul>
      )}
    </FavoriteContext.Provider>
  );
}
