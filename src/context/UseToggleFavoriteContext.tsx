import { Pokemon } from '../utils/pokeApiTypes.tsx';
import { useContext, useEffect } from 'react';
import { FavoriteContext } from '../pages/PokemonList.tsx';

export function useToggleFavoriteContext(pokemonDetails: Pokemon) {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(
      'useToggleFavoriteContext must be used within a FavoriteContextProvider'
    );
  }
  const { favoritesArray, setFavoritesArray } = context;

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

  return {
    toggleFavorite: (pokemonId: number) => {
      onToggleFavorite(pokemonId); // Call the onToggleFavorite function from the context
    },
    isFavorite: favoritesArray.includes(pokemonDetails.id), // Check if the current Pokemon is a favorite
    allFavorites: favoritesArray, // Return the favoritesArray
  };
}
