import { Pokemon, PokemonType } from '../utils/pokeApiTypes'
import '../styling/pokemoncard.css'


interface PokemoncardProps {
  pokemonInfo: Pokemon;
}

export default function Pokemoncard ({pokemonInfo}: PokemoncardProps){
  // Name, type and number can be derived from the Pokemon
  const id: number = pokemonInfo.id
  const types: PokemonType[] = pokemonInfo.types
  const name: string = pokemonInfo.name

  // This function might have to be replaced into some other class
// If id exists in localstorage, id is removed
function setFavorite(pokemonId:number){
  // Retrieving the string
  let favoritesString:string|null = localStorage.getItem("favorites")

  if (favoritesString == null){
    // Create array of favorites
    const idAsArray:number[] = [pokemonId]
    const idAsString:string = JSON.stringify(idAsArray)
    localStorage.setItem("favorites", idAsString)
    return
  }

  else{ 
    // Retrieve and mutate array
    const favoritesArray:string[] = JSON.parse(favoritesString)
    const index = favoritesArray.indexOf(pokemonId.toString());

    if (index !== -1) {
      // This function has been called on a card that was already favorited
      favoritesArray.splice(index, 1)
      const favorites:string = JSON.stringify(favoritesArray)

      //localStorage.removeItem("favorites")
      localStorage.setItem("favorites", favorites)
      return
    }
    else {
      // Add this id to favorites
      const newFavoritesArray:string[] =[...favoritesArray, pokemonId.toString()]
      const favorites:string = JSON.stringify(newFavoritesArray)
  
      localStorage.removeItem("favorites")
      localStorage.setItem("favorites", favorites)

      return
    }
  }
}

// Favorite is derived from local storage
function isFavorite(pokemonId:number){
  const idToCheck:string = pokemonId.toString()

  // Retrieving the string
  const favoritesAsString: string|null = localStorage.getItem("favorites")
  
  // Retrieved array
  if (favoritesAsString != null) {
    const favoritesArray:string[] = JSON.parse(favoritesAsString)

    //Check to see if id exists in array
    if (favoritesArray.includes(idToCheck)) {
      return true;
    }
    else{
      return false;
    }
  }
  return false;
  // use conditional css classes to render the heart
}

  return (
    <div className='pokemon-card'>
      <div className='header'>
        <p>{name}</p>
        <div className='heart'></div>
        <button className={`heart ${isFavorite(id) ? 'active' : ''}`}></button>
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