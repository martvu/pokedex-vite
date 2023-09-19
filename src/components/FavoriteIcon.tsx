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
      onClick={e => {
        e.preventDefault();
        toggleFavorite(pokemonDetails.id);
      }}
    >
      {isFavorite ? (
        <MdFavorite className="favorite-icon-active" />
      ) : (
        <MdFavoriteBorder className="favorite-icon-inactive" />
      )}
    </button>
  );
}
