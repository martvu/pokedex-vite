import { BiSearchAlt } from 'react-icons/bi';
import { SORT_BY, TYPES } from '../utils/constants';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';

interface FiltersProps {
  updateFilters: (newFilters?: Record<string, unknown>) => void;
  filters: {
    search: string;
    type: string;
    showFavorites: boolean;
    sortBy: string;
  };
}

function Filters({ updateFilters, filters }: FiltersProps) {
  const savedFilters = JSON.parse(sessionStorage.getItem('filters') || '{}');
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
            <label htmlFor="filter-select" className="filter-text">
              Type:
            </label>
            <select
              id="filter-select"
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
            <label htmlFor="filter-select" className="filter-text">
              Sort By
            </label>
            <select
              id="filter-select"
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
