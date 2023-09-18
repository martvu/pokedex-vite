import { Link } from 'react-router-dom';
import pokeball from '../assets/img/pb-icon.svg';

function Header() {
  return (
    <header className="header">
      <div className="pokeball-header-icon">
        <img src={pokeball} alt="pokeball icon" />
        <div className="header-link-container">
          <Link className="link" to="/">
            <h1>Pokedex</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
