import { Link } from 'react-router-dom';

function PokemonListPage() {
  return (
    <div>
      <Link to="/pokemon">
        <button>Pokemon Info Page</button>
      </Link>
    </div>
  );
}

export default PokemonListPage;
