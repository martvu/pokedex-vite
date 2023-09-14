import { Link } from 'react-router-dom';
import { Pokemon } from '../utils/pokeApiTypes';
import { getPokemonDataList } from '../utils/pokeApi';
import { useQuery } from '@tanstack/react-query';

function PokemonListPage() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  const { data: pokemonDataList, isLoading } = useQuery(['pokemonList', url], () =>
    getPokemonDataList(url)
  );

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
