import './App.css';
import PokemonCard from './components/PokemonCard';
import { usePokemonData } from './utils/pokeApi';

function App() {
  // access data from the usePokemonData hook
  const { data, isError, isLoading, error } = usePokemonData('bulbasaur');
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    const castedError = error as Error;
    return <div>There was an error {castedError.message} </div>
  }

  if (!data) {
    return <div>No data available yet...</div>;
  }
  return (
    <div className='container'>
      <PokemonCard pokemonInfo={data}/>
    </div>
  )
}

export default App;
