import { Link } from 'react-router-dom';
import pokeball from '../assets/img/pb-icon.svg';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <header className="header">
      <div className="pokeball-header-icon">
        <img src={pokeball} alt="pokeball icon" />
        <div className="header-link-container">
          <Link className="link" to="/project1">
            <h1>Pokedex</h1>
          </Link>
        </div>
        <span className="switch-container"> 
        <ThemeSwitch />
      </span>
      </div>
    </header>
  );
}

export default Header;
