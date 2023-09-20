import { Pokemon } from '../utils/pokeApiTypes.tsx';
import { Link } from 'react-router-dom';
import { TYPE_COLORS, TYPE_ICONS } from '../utils/constants.tsx';
import { formatPokemonName, getTypeColorGradient } from '../utils/utils.tsx';
import pokeballIcon from '../assets/img/pb-icon.svg';
import { FavoriteIcon } from './FavoriteIcon.tsx';

export interface PokemonCardProps {
  pokemonDetails: Pokemon;
}

export default function PokemonCard({ pokemonDetails }: PokemonCardProps) {
  const gradient = getTypeColorGradient(pokemonDetails);

  return (
    <Link
      to={`/project1/pokemon/${pokemonDetails.id}`}
      className="pokemon-card-container"
      style={{ background: gradient }}
    >
      <div className="poketext pokemon-name">
        {formatPokemonName(pokemonDetails.name) || 'Missing name'}
      </div>
      <div className="poketext pokemon-id">
        {'#' + ('00' + pokemonDetails.id).slice(-3)}
      </div>
      <FavoriteIcon pokemonDetails={pokemonDetails} />
      <div className="sprite-bg-container">
        <img
          loading="lazy"
          className="sprite-bg"
          src={pokeballIcon}
          alt="pokeball background"
        />
      </div>
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
              } 
              alt={type.type.name}
            />
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </span>
        ))}
      </div>
    </Link>
  );
}
