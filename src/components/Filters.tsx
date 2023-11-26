import { BiSearchAlt } from 'react-icons/bi';
import { SORT_BY, TYPES } from '../utils/constants';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { Pokemon } from '../utils/pokeApiTypes';
import { formatPokemonName } from '../utils/utils';

interface FiltersProps {
  pokemonDataList: Pokemon[];
  favoritesArray: number[];
  setDisplayedPokemonList: (arg0: Pokemon[]) => void;
}
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

function Filters({
  pokemonDataList,
  favoritesArray,
  setDisplayedPokemonList,
}: FiltersProps) {
  const savedFilters = JSON.parse(sessionStorage.getItem('filters') || '{}');

  const [filters, setFilters] = useState(
    sessionStorage.getItem('filters')
      ? JSON.parse(sessionStorage.getItem('filters') || '{}')
      : emptyFilters
  );

  const updateFilters = (newFilters?: Record<string, unknown>) => {
    setFilters({ ...filters, ...newFilters });
    // Store the updated filters in sessionStorage
    sessionStorage.setItem(
      'filters',
      JSON.stringify({ ...filters, ...newFilters })
    );
  };
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonDataList, filters, favoritesArray]);

  return (
    <>
      <div className="filter-container">
        <div className="search-bar-container">
          <BiSearchAlt className="search-icon" />
          <input
            className="search-bar"
            type="text"
            placeholder={savedFilters.search || 'Search Pokemon'}
            onChange={e =>
              updateFilters({
                search: e.target.value.trim(),
              })
            }
          />
        </div>
        <button
          onClick={() =>
            updateFilters({ showFavorites: !filters.showFavorites })
          }
          className={`filter-favorite-btn ${
            filters.showFavorites ? 'show' : ''
          }`}
          title="Show Favorites"
        >
          {!filters.showFavorites ? (
            <MdFavoriteBorder className="favorite-icon" />
          ) : (
            <MdFavorite className="favorite-icon-active" />
          )}
        </button>
        <button
          className="filter-reset-btn"
          title="Reset Filters"
          onClick={() => {
            updateFilters({
              search: '',
              showFavorites: false,
              type: 'all',
              sortBy: 'id',
            });
          }}
        >
          <GrPowerReset className="reset-icon" />
        </button>
        <div className="filter-options-container">
          <div className="filter-select">
            <label htmlFor="type-select" className="filter-text">
              Type:
            </label>
            <select
              id="type-select"
              value={filters.type}
              onChange={e =>
                updateFilters({
                  type: e.target.value,
                })
              }
            >
              {TYPES.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-select">
            <label htmlFor="sort-select" className="filter-text">
              Sort By
            </label>
            <select
              id="sort-select"
              value={filters.sortBy}
              onChange={e =>
                updateFilters({
                  sortBy: e.target.value,
                })
              }
            >
              {SORT_BY.map(sortMethod => (
                <option key={sortMethod} value={sortMethod}>
                  {sortMethod.charAt(0).toUpperCase() + sortMethod.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
