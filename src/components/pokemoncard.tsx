import { Pokemon, PokemonType } from '../utils/pokeApiTypes'

export default function Pokemoncard ({pokemonInfo }: {pokemonInfo:Pokemon}){
  // Name, type and number can be derived from the Pokemon
  const id: number = pokemonInfo.id
  const types: PokemonType[] = pokemonInfo.types
  const name: string = pokemonInfo.name

  // Favorite is derived from local storage
  // Create a helper function to iterate through the array 
  // to see if you can find this pokemons id..
  // in this functions jsx: use conditional css classes to render the heart

  return (
    <div className='pokemon-card'>
      <div className='header'>
        <p>{name}</p>
        <div className='heart'></div>
      </div>
      <div className='pokemon-types'>
      {types.map((type, index) => (
          <div key={index} className="type">
            {type.type.name}
          </div>
      ))}
      </div>
      <div className='pokemon-picture'></div>
      <div>{id}</div>
    </div>
  )


}