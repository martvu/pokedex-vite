import './App.css';
import PokemonInfoPage from './components/PokemonInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonListPage from './components/PokemonListPage';
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
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemon" element={<PokemonInfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;