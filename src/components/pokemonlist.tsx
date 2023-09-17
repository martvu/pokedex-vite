import { Link } from 'react-router-dom';
import { usePokemonDataList } from '../utils/pokeApi';
import Pokemoncard from './PokemonCard';
import { useEffect, useState } from 'react';

export default function PokemonList() {
  const NUM_POKEMON = 151;
  const { data: pokemonDataList, isLoading } = usePokemonDataList(NUM_POKEMON);
  const [favoritesArray, setFavoritesArray] = useState<number[]>(
    JSON.parse(localStorage.getItem("favoritesArray") || "[]")
  );
  // handle favoritesArray
  const onToggleFavorite = (pokemonId: number) => {
    if (favoritesArray.includes(pokemonId)) {
      setFavoritesArray(favoritesArray.filter((id:number) => id !== pokemonId));
    } else {
      setFavoritesArray([...favoritesArray, pokemonId]);
    }
  };

  // save favoritesArray
  useEffect(() => {
    localStorage.setItem("favoritesArray", JSON.stringify(favoritesArray));
  }, [favoritesArray]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link to="/pokemon">
        <button>Pokemon Info Page</button>
      </Link>
      <div>
        <div>
          <h1>Pokemon List</h1>
          <div className="pokemon-card-container">
            {pokemonDataList &&
              pokemonDataList.map((pokemon, index) => (
                <Pokemoncard key={index + 1} pokemonInfo={pokemon} favoritesArray={favoritesArray} onToggleFavorite={onToggleFavorite}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

