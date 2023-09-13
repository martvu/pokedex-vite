import { getPokemonData } from '../utils/pokeApi';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TYPE_COLORS, STAT_COLORS } from '../utils/constants';
import pokeBall from '../assets/img/pb-icon.svg';
import { Pokemon, PokemonType, emptyPokemon } from '../utils/pokeApiTypes';

function PokemonInfoPage() {
  const [id, setId] = useState(1);
  const maxNumPokemon = 151;
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>(emptyPokemon);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const { data: pokemonDetails, isLoading } = useQuery(['pokemon', url], () =>
    getPokemonData(url)
  );

  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const { data: speciesData } = useQuery(['species', speciesUrl], () =>
    getPokemonData(speciesUrl)
  );

  useEffect(() => {
    setCurrentPokemon(pokemonDetails);
  }, [pokemonDetails]);
  console.log(pokemonDetails);
  console.log(speciesData);
  return (
    <div className="info-container">
      <input
        type="number"
        value={id}
        min={1}
        max={maxNumPokemon}
        onChange={e => setId(parseInt(e.target.value))}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h1>{pokemonDetails.name}</h1>
            <h4 className="pokemon-text">
              {'#' + ('00' + pokemonDetails?.id).slice(-3)}
            </h4>
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
          <h3 className="pokemon-text">{pokemonDetails?.species?.name}</h3>
          <div className="pokemon-genera">
            {isLoading ? 'Loading...' : speciesData?.genera[7]?.genus}
          </div>
          <div className="pokemon-description right-section">
            <h5 className="pokemon-text info-text">Description</h5>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <p>
                {
                  speciesData?.flavor_text_entries
                    .slice()
                    .reverse()
                    .find(flavor => flavor?.languag?.name === 'en')?.flavor_text
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
        </>
      )}

      <button onClick={() => setId(id - 1)} disabled={id === 1}>
        Previous
      </button>
      <button onClick={() => setId(id + 1)} disabled={id === maxNumPokemon}>
        Next
      </button>
    </div>
    /*  <div className="pokemon-info-page">
    <div
      className="modal-container"
    >
      <div className="info-box-sprite info-text">
        <h4 className="pokemon-text">
          {"#" + ("00" + pokemonDetails?.id).slice(-3)}
        </h4>
        <img
          className="pokeball-icon"
          src={pokeBall}
          alt="pokeball icon"
        />
        <div className="modal-sprite-container">
          <img
            className="pokemon-sprite"
            src={
              pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default || "#"
            }
            alt={pokemonDetails.name}
          /> 
        </div>
        <h3 className="pokemon-text">
          {pokemonDetails.species.name}
        </h3>
        <div className="pokemon-genera">
          {isLoading ? "Loading..." : speciesInfo?.genera[7].genus}
        </div>
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
        <div className="pokemon-gender">
          <h5>Gender Ratio</h5>
          <div className="gender-ratio-container">
            {isLoading ? (
              <span>Loading...</span>
            ) : speciesInfo.gender_rate === -1 ? (
              <span>Gender Unknown</span>
            ) : (
              <>
                <div
                  className="gender-ratio-segment"
                  style={{
                    backgroundColor: "#3355FF",
                    width: `${100 - speciesInfo.gender_rate * 12.5}%`,
                    borderRadius:
                      speciesInfo.gender_rate === 0
                        ? "1rem"
                        : "1rem 0 0 1rem",
                  }}
                ></div>
                <div
                  className="gender-ratio-segment"
                  style={{
                    backgroundColor: "#FF77DD",
                    width: `${speciesInfo.gender_rate * 12.5}%`,
                    borderRadius:
                      speciesInfo.gender_rate === 8
                        ? "1rem"
                        : "0 1rem 1rem 0",
                  }}
                ></div>
              </>
            )}
          </div>
          <div
            className="gender-percentages"
            style={{
              opacity: isLoading ? 0 : speciesInfo.gender_rate === -1 ? 0 : 1,
            }}
          >
            <span style={{ color: "#6982ff" }}>
              {isLoading ? "-" : 100 - speciesInfo.gender_rate * 12.5}% male,{" "}
            </span>
            <span style={{ color: "#FF77DD" }}>
              {isLoading ? "-" : speciesInfo.gender_rate * 12.5}% female
            </span>
          </div>
        </div>
      </div>
      <div className="info-box-right">
        <div className="pokemon-description right-section">
          <h5 className="pokemon-text info-text">Description</h5>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <p>
              {
                speciesInfo.flavor_text_entries
                  .slice()
                  .reverse()
                  .find((flavor) => flavor.language.name === "en").flavor_text
              }
            </p>
          )}
        </div>
        <div className="pokemon-stats right-section">
          <h5 className="pokemon-text info-text">Stats</h5>
          <div className="parameter-container">
            {pokemonDetails.stats.map((stat) => {
              return (
                <div key={stat.stat.name} className="parameter-section">
                  <h6 className="info-text">
                    {stat.stat.name}
                  </h6>
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
      </div>
    </div>
  </div> */
  );
}

export default PokemonInfoPage;
