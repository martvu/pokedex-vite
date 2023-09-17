import './App.css';
import PokemonInfoPage from './components/PokemonInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonListPage from './components/PokemonList';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemon" element={<PokemonInfoPage />} />
          {/* TODO create Not Found page if time*/}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;