import { Pokemon, PokemonType } from '../utils/pokeApiTypes'

// Favorite is derived from local storage
function isFavorite({pokemonId}:{pokemonId:number}){
  let idToCheck:string = pokemonId.toString()
  let favoritesArray: string[] = []

  // Retrieving the string
  let favoritesAsString: string|null = localStorage.getItem("favorites")
  
  // Retrieved array
  if (favoritesAsString != null) {
    favoritesArray = JSON.parse(favoritesAsString)

    //Check to see if id exists in array
    if (favoritesArray.includes(idToCheck)) {
      console.log(`The id '${idToCheck}' exists in favoritesArray.`);
      return true;
    }
    else{
      console.log(`The id '${idToCheck}' does not exist in favoritesArray.`);
      return false;
    }
  }
  // use conditional css classes to render the heart
}

export default function Pokemoncard ({pokemonInfo }: {pokemonInfo:Pokemon}){
  // Name, type and number can be derived from the Pokemon
  const id: number = pokemonInfo.id
  const types: PokemonType[] = pokemonInfo.types
  const name: string = pokemonInfo.name


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