import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Pokemon } from '../utils/pokeApiTypes.tsx';
import { useToggleFavoriteContext } from '../context/UseToggleFavoriteContext.tsx'; // adjust the path accordingly

interface FavoriteIconProps {
  pokemonDetails: Pokemon;
}

export function FavoriteIcon({ pokemonDetails }: FavoriteIconProps) {
  const { toggleFavorite, isFavorite } =
    useToggleFavoriteContext(pokemonDetails);
  return (
    <button
      type="button"
      className="favorite-button"
      data-testid={`pokemon-details-${pokemonDetails.id}`}
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(pokemonDetails.id);
      }}
    >
      <span
        className={
          isFavorite ? 'favorite-icon-active' : 'favorite-icon-inactive'
        }
        data-testid="test-favorite-icon"
      >
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </span>   
    </button>
  );
}
