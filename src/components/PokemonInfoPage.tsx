import { getPokemonData } from '../utils/pokeApi';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TYPE_COLORS, STAT_COLORS } from '../utils/constants';
import pokeBall from '../assets/img/pb-icon.svg';
import { FlavorText, PokemonStat, PokemonType } from '../utils/pokeApiTypes';
import { formatPokemonName, getTypeColorGradient } from '../utils/utils';

function PokemonInfoPage() {
  const [id, setId] = useState(1);
  const maxNumPokemon = 151;
  const [cardColor, setCardColor] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const {
    data: pokemonDetails,
    isLoading,
    error,
  } = useQuery(['pokemon', url], () => getPokemonData(url));
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const { data: speciesData, isLoading: isLoadingSpecies } = useQuery(
    ['species', speciesUrl],
    () => getPokemonData(speciesUrl)
  );

  console.log(pokemonDetails);
  console.log(speciesData);
  useEffect(() => {
    if (!pokemonDetails) {
      console.log("no pokemon details");
      return
    };
    const typeColorGradient = getTypeColorGradient(pokemonDetails.types);
    setCardColor({
      background: `linear-gradient(to bottom, ${typeColorGradient[0]} 10%, ${typeColorGradient[1]} 100%`,
    });
  }, [pokemonDetails]);

  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <>
    {!isLoading && !isLoadingSpecies && pokemonDetails && speciesData && (
      <div className="info-bg-container">
        <div className="info-home-btn">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>

        {/* <input
      type="number"
      value={id}
      min={1}
      max={maxNumPokemon}
      onChange={e => setId(parseInt(e.target.value))}
    />  */}
        <div className="pokemon-card info" style={cardColor}>
          <div className="pokemon-name-id">
            <h1>{formatPokemonName(pokemonDetails?.name)}</h1>
            <h4 className="pokemon-text">
              {'#' + ('00' + pokemonDetails?.id).slice(-3)}
            </h4>
          </div>
          <div className="info-pokemon-img">
            <img className="pokeball-icon" src={pokeBall} alt="pokeball icon" />
            <img
              className="pokemon-sprite"
              src={
                pokemonDetails?.sprites?.other?.['official-artwork']
                  ?.front_default || '#'
              }
              alt={pokemonDetails.name}
            />
          </div>
          <div className="info-pokemon-data">
            <div className="type-list">
              {pokemonDetails.types.map((type: PokemonType) => (
                <span
                  key={type.slot}
                  className="type-badge"
                  style={{ backgroundColor: `${TYPE_COLORS[type.type.name]}` }}
                >
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </span>
              ))}
            </div>
            <div className="pokemon-genus">
              {isLoadingSpecies ? 'Loading...' : speciesData?.genera[7]?.genus}
            </div>
          </div>
        </div>
        <div>
          <button 
            onClick={() => setId(id - 1)} 
            disabled={id === 1}
            className="prev-btn">
            Prev
          </button>
          <button 
            onClick={() => setId(id + 1)} 
            disabled={id === maxNumPokemon}
            className="next-btn">
            Next
          </button>
        </div>
        <div className="pokemon-description">
          <h5 className="pokemon-text info-text">Description</h5>
          {isLoadingSpecies ? (
            <p>Loading...</p>
          ) : (
            <p>
              {
                speciesData?.flavor_text_entries
                  .slice()
                  .reverse()
                  .find((flavor: FlavorText) => flavor?.language?.name === 'en')
                  ?.flavor_text
              }
            </p>
          )}
        </div>
        <div className="pokemon-dimensions">
          <div className="pokemon-height">
            <h5>Height</h5>
            <span>{pokemonDetails.height / 10}m</span>
          </div>
          <div className="pokemon-weight">
            <h5>Weight</h5>
            <span>{pokemonDetails.weight / 10}kg</span>
          </div>
        </div>
        <div className="pokemon-stats">
          <h5 className="pokemon-text info-text">Stats</h5>
          <div className="parameter-container">
            {pokemonDetails?.stats.map((stat: PokemonStat) => {
              return (
                <div key={stat.stat.name} className="parameter-section">
                  <h5 className="info-text">{stat.stat.name}</h5>
                  <div className="statbar-container">
                    <div
                      className="statbar-segment"
                      style={{
                        backgroundColor: STAT_COLORS[stat.stat.name],
                        width: `${(stat.base_stat / 255) * 100}%`,
                      }}
                    >
                      <span>{stat.base_stat}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pokemon-gender">
          <h5>Gender Ratio</h5>
          <div className="gender-ratio-container">
            {isLoadingSpecies ? (
              <span>Loading...</span>
            ) : speciesData.gender_rate === -1 ? (
              <span>Gender Unknown</span>
            ) : (
              <>
                <div
                  className="gender-ratio-segment"
                  style={{
                    backgroundColor: '#3355FF',
                    width: `${100 - speciesData.gender_rate * 12.5}%`,
                    borderRadius:
                      speciesData.gender_rate === 0 ? '1rem' : '1rem 0 0 1rem',
                  }}
                ></div>
                <div
                  className="gender-ratio-segment"
                  style={{
                    backgroundColor: '#FF77DD',
                    width: `${speciesData.gender_rate * 12.5}%`,
                    borderRadius:
                      speciesData.gender_rate === 8 ? '1rem' : '0 1rem 1rem 0',
                  }}
                ></div>
              </>
            )}
          </div>
          <div
            className="gender-percentages"
            style={{
              opacity: isLoadingSpecies
                ? 0
                : speciesData.gender_rate === -1
                ? 0
                : 1,
            }}
          >
            <span style={{ color: '#6982ff' }}>
              {isLoadingSpecies ? '-' : 100 - speciesData.gender_rate * 12.5}%
              male,{' '}
            </span>
            <span style={{ color: '#FF77DD' }}>
              {isLoadingSpecies ? '-' : speciesData.gender_rate * 12.5}% female
            </span>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default PokemonInfoPage;
