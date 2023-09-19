import { usePokemonData, useSpeciesData } from '../utils/pokeApi';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  TYPE_COLORS,
  STAT_COLORS,
  MAX_NO_OF_POKEMON,
} from '../utils/constants';
import { FlavorText, PokemonStat, PokemonType } from '../utils/pokeApiTypes';
import { formatPokemonName, getTypeColorGradient } from '../utils/utils';
import Header from './Header';

export default function PokemonInfoPage() {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState<number>(id ? parseInt(id) : 1);
  const {
    data: pokemonDetails,
    isLoading,
    error,
  } = usePokemonData(currentId.toString());
  const {
    data: speciesData,
    isLoading: isLoadingSpecies,
    error: speciesError,
  } = useSpeciesData(currentId.toString());

  let gradient = 'black';
  if (pokemonDetails) {
    gradient = getTypeColorGradient(pokemonDetails);
  }

  return (
    <>
      <Header />
      <div className="filler-div"></div>
      <div className="info-page-container">
        <div className="info-home-btn"></div>
        {isLoading || isLoadingSpecies && <div>Loading...</div>}
        {error || speciesError && <div>Error fetching data</div>}
        {pokemonDetails && speciesData && (
          <>
            <div className="info-pokemon-card" style={{ background: gradient }}>
              <div className="pokemon-name-id">
                <h1>{formatPokemonName(pokemonDetails?.name)}</h1>
                <h4 className="pokemon-text">
                  {'#' + ('00' + pokemonDetails?.id).slice(-3)}
                </h4>
              </div>
              <div className="info-pokemon-img">
                <img
                  className="info-pokemon-sprite"
                  src={
                    pokemonDetails?.sprites?.other?.['official-artwork']
                      ?.front_default || '#'
                  }
                  alt={pokemonDetails.name}
                />
              </div>
              <div className="info-pokemon-data">
                <div className="info-type-list">
                  {pokemonDetails.types.map((type: PokemonType) => (
                    <span
                      key={type.slot}
                      className="info-type-badge"
                      style={{
                        backgroundColor: `${TYPE_COLORS[type.type.name]}`,
                      }}
                    >
                      {type.type.name.charAt(0).toUpperCase() +
                        type.type.name.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="pokemon-genus">
                  {isLoadingSpecies
                    ? 'Loading...'
                    : speciesData?.genera[7]?.genus}
                </div>
              </div>
            </div>
            <div>
              <Link to={`/project1/pokemon/${(currentId - 1).toString()}`}>
                <button
                  onClick={() => setCurrentId(currentId - 1)}
                  disabled={currentId === 1}
                  className="prev-btn"
                >
                  Prev
                </button>
              </Link>
              <Link to={`/project1/pokemon/${(currentId + 1).toString()}`}>
                <button
                  onClick={() => setCurrentId(currentId + 1)}
                  disabled={currentId === MAX_NO_OF_POKEMON}
                  className="next-btn"
                >
                  Next
                </button>
              </Link>
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
                      .find(
                        (flavor: FlavorText) => flavor?.language?.name === 'en'
                      )?.flavor_text
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
          </>
        )}
      </div>
    </>
  );
}
