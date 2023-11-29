import './style/App.css';
import PokemonInfoPage from './pages/PokemonInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import useDarkTheme from './context/useDarkTheme';

function App() {
  const { darkMode } = useDarkTheme();
  return (
    <div className={`app bg-container ${darkMode ? 'dark-mode' : ''}`}>
      <Router basename="/project1">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonInfoPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
