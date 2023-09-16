import { Link } from 'react-router-dom';
import { Pokemon } from '../utils/pokeApiTypes';
import { usePokemonDataList } from '../utils/pokeApi';

function PokemonListPage() {
  const NUM_POKEMON = 151;
  const { data: pokemonDataList, isLoading } = usePokemonDataList(NUM_POKEMON.toString());

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
          <ul>
            {pokemonDataList?.map( (pokemon: Pokemon) => (
              <li key={pokemon.id} >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonListPage;
