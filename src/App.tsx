import './style/App.css';
import PokemonInfoPage from './components/PokemonInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import useDarkTheme from './context/useDarkTheme';

function App() {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`app bg-container ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        <Routes>
          <Route path="/project1" element={<PokemonList />} />
          <Route path="/project1/pokemon/:id" element={<PokemonInfoPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
