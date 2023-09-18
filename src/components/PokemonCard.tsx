import { Pokemon } from '../utils/pokeApiTypes';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TYPE_COLORS, TYPE_ICONS } from '../utils/constants';
import { formatPokemonName, getTypeColorGradient } from '../utils/utils';
import pokeballIcon from '../assets/img/pb-icon.svg';

interface PokemonCardProps {
  pokemonDetails: Pokemon;
  favoritesArray: number[];
  onToggleFavorite: (id: number) => void;
}

export default function PokemonCard({
  pokemonDetails,
  onToggleFavorite,
  favoritesArray,
}: PokemonCardProps) {
  const gradient = getTypeColorGradient(pokemonDetails);

  return (
    <div className="pokemon-card-container" style={{ background: gradient }}>
      <div className="poketext pokemon-name">
        {formatPokemonName(pokemonDetails.name) || 'Missing name'}
      </div>
      <div className="poketext pokemon-id">
        {'#' + ('00' + pokemonDetails.id).slice(-3)}
      </div>
      <div
        className="favorite-button"
        onClick={() => onToggleFavorite(pokemonDetails.id)}
      >
        {favoritesArray.includes(pokemonDetails.id) ? (
          <MdFavorite className="favorite-icon-active" />
        ) : (
          <MdFavoriteBorder className="favorite-icon-inactive" />
        )}
      </div>
      <div className="sprite-bg-container">
        <img
          loading="lazy"
          className="sprite-bg"
          src={pokeballIcon}
          alt="pokeball background"
        />
      </div>
      <Link to={`/pokemon/${pokemonDetails.id}`}>
        <div className="sprite-container" data-testid="link-infopage">
          <img
            loading="lazy"
            className="pokemon-sprite"
            src={
              pokemonDetails?.sprites?.other?.['official-artwork']
                ?.front_default || '#'
            }
            alt={pokemonDetails.name}
          />
        </div>
      </Link>
      <div className="type-container">
        {pokemonDetails.types.map(type => (
          <span
            key={type.slot}
            className="poketext type-icon"
            style={{ backgroundColor: `${TYPE_COLORS[type.type.name]}` }}
          >
            <img
              loading="lazy"
              src={
                TYPE_ICONS[type.type.name]
              } /* { '../assets/icons/' + type.type.name + '.svg'} */
              alt={type.type.name}
            />
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}
