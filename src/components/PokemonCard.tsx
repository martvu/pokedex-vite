import { Pokemon, PokemonType } from '../utils/pokeApiTypes';
import '../styling/pokemoncard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../utils/mapping/cardBackground';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  pokemonInfo: Pokemon;
  favoritesArray: number[];
  onToggleFavorite: (id: number) => void;
}

export default function PokemonCard({ pokemonInfo, favoritesArray, onToggleFavorite }: PokemonCardProps) {
  // Name, type and number can be derived from the Pokemon
  const id: number = pokemonInfo.id;
  const types: PokemonType[] = pokemonInfo.types;
  const name: string = pokemonInfo.name;

  const gradientColors = types.map((type) => colors[type.type.name] || 'white');
  if (gradientColors.length === 1) {
    gradientColors.push('white');
  }
  const gradient = `linear-gradient(45deg, ${gradientColors.join(', ')})`;

  return (
    <div
      className="pokemon-card"
      style={{background: gradient }}
    >
      <div className="header">
        <p>{name}</p>
        <button
        className="transparent-button"
        onClick={() => onToggleFavorite(pokemonInfo.id)}
      >
        {favoritesArray.includes(pokemonInfo.id) ? (
          <FavoriteIcon className="favorite-icon-active" />
        ) : (
          <FavoriteBorderIcon className="favorite-icon-inactive" />
        )}
      </button>
      </div>
      <div className="pokemon-types">
        {types.map((type, index) => (
          <div key={index} className="type">
            <p>{type.type.name}</p>
          </div>
        ))}
      </div>
      <div style={{ maxHeight: '80px' }}>
        <Link to={`/pokemon/${pokemonInfo.id}`}>
        <img
          src={pokemonInfo.sprites?.front_default || ''} 
        />
        </Link>
        
      </div>
      <div>#{id}</div>
    </div>
  );
}
