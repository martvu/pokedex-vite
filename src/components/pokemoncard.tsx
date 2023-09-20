import { useState } from 'react';
import { Pokemon, PokemonType } from '../utils/pokeApiTypes';
import '../styling/pokemoncard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { colors } from '../utils/mapping/cardBackground';

interface PokemoncardProps {
  pokemonInfo: Pokemon;
}

export default function Pokemoncard({ pokemonInfo }: PokemoncardProps) {
  // Name, type and number can be derived from the Pokemon
  const id: number = pokemonInfo.id;
  const types: PokemonType[] = pokemonInfo.types;
  const name: string = pokemonInfo.name;


  const gradientColors = types.map((type) => colors[type.type.name] || 'white');

  if (gradientColors.length === 1) {
    gradientColors.push('white');
  }

  const gradient = `linear-gradient(45deg, ${gradientColors.join(', ')})`;
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  function setFavorite() {
    const favoritesString = localStorage.getItem('favorites');
    let favoritesArray = favoritesString ? JSON.parse(favoritesString) : [];
    const index = favoritesArray.indexOf(id.toString());

    if (index !== -1) {
      favoritesArray.splice(index, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(id.toString());
      setIsFavorited(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <div
      className="pokemon-card"
      style={{background: gradient }}
    >
      <div className="header">
        <p>{name}</p>
        <button type='button' onClick={setFavorite} className="transparent-button">
          <span
            className={
              isFavorited ? 'favorite-icon-active' : 'favorite-icon-inactive'
            }
            data-testid="favorite-button"
          >
            <FavoriteBorderIcon />
          </span>
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
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
      </div>
      <div>#{id}</div>
    </div>
  );
}
