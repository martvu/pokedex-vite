import { usePokemonDataList } from '../utils/pokeApi';
import PokemonCard from './PokemonCard';
import { useEffect, useState } from 'react';
import { Pokemon } from '../utils/pokeApiTypes';
import Header from './Header';
import Filters from './Filters';
import { formatPokemonName } from '../utils/utils';
import loadingIcon from '../assets/img/poke-loading.gif';
interface FilterType {
  search: string;
  showFavorites: boolean;
  type: string;
  sortBy: string;
}

const emptyFilters: FilterType = {
  search: '',
  showFavorites: false,
  type: 'all',
  sortBy: 'id',
};

export default function PokemonList() {
  const NUM_POKEMON = 151;
  const {
    data: pokemonDataList,
    isLoading,
    error,
  } = usePokemonDataList(NUM_POKEMON);
  const [favoritesArray, setFavoritesArray] = useState<number[]>(
    JSON.parse(localStorage.getItem('favoritesArray') || '[]')
  );

  // handle favoritesArray
  const onToggleFavorite = (pokemonId: number) => {
    if (favoritesArray.includes(pokemonId)) {
      setFavoritesArray(
        favoritesArray.filter((id: number) => id !== pokemonId)
      );
    } else {
      setFavoritesArray([...favoritesArray, pokemonId]);
    }
  };

  // save favoritesArray
  useEffect(() => {
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray));
  }, [favoritesArray]);

  // handle filters
  const [displayedPokemonList, setDisplayedPokemonList] = useState<Pokemon[]>(
    []
  );
  const [filters, setFilters] = useState(
    sessionStorage.getItem('filters')
      ? JSON.parse(sessionStorage.getItem('filters') || '{}')
      : emptyFilters
  );

  useEffect(() => {
    // filter on type
    let filteredPokemon = pokemonDataList?.filter((pokemon: Pokemon) => {
      return (
        filters.type === 'all' ||
        pokemon.types
          .map((type: { type: { name: string } }) => type.type.name)
          .includes(filters.type)
      );
    });

    // filter on search
    if (filters?.search !== '') {
      filteredPokemon =
        pokemonDataList?.filter(
          (pokemon: Pokemon) =>
            formatPokemonName(pokemon.name)
              ?.toLowerCase()
              .includes(filters?.search.toLowerCase())
        ) || [];
    }
    // filter on favorites
    if (filters.showFavorites) {
      filteredPokemon =
        filteredPokemon?.filter((pokemon: Pokemon) =>
          favoritesArray.includes(pokemon.id)
        ) || [];
    }
    // Sort
    if (filters.sortBy === 'A-Z') {
      filteredPokemon?.sort((p1, p2) =>
        p1.species.name.localeCompare(p2.species.name)
      );
    } else if (filters.sortBy === 'high to low') {
      filteredPokemon?.sort((p1, p2) => p2.id - p1.id);
    }

    setDisplayedPokemonList(filteredPokemon || []);
  }, [pokemonDataList, filters, favoritesArray]);

  const updateFilters = (newFilters?: Record<string, unknown>) => {
    setFilters({ ...filters, ...newFilters });
    // Store the updated filters in sessionStorage
    sessionStorage.setItem(
      'filters',
      JSON.stringify({ ...filters, ...newFilters })
    );
  };

  if (error) {
    return <div>Error fetching data </div>;
  }

  return (
    <>
      <div className="bg-container">
        <Header />
        <Filters updateFilters={updateFilters} filters={filters} />
        <div className="pokemon-list">
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
                <PokemonCard
                  key={pokemon.id}
                  pokemonDetails={pokemon}
                  onToggleFavorite={onToggleFavorite}
                  favoritesArray={favoritesArray}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
