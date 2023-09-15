import { useState } from 'react';
import { Pokemon, PokemonType } from '../utils/pokeApiTypes'
import '../styling/pokemoncard.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { colors } from '../utils/mapping/cardBackground';

interface PokemoncardProps {
  pokemonInfo: Pokemon;
}

export default function Pokemoncard ({pokemonInfo}: PokemoncardProps){
  
  // Name, type and number can be derived from the Pokemon
  const id: number = pokemonInfo.id
  const types: PokemonType[] = pokemonInfo.types
  const name: string = pokemonInfo.name

  // Generate a CSS gradient based on Pokémon types
  const gradientColors = types.map((type) => colors[type.type.name] || 'white');
  const gradient = `linear-gradient(to right, ${gradientColors.join(', ')})`

  const [isFavorited, setIsFavorited] = useState<boolean>(false);

// This function might have to be replaced into some other class
// If id exists in localstorage, id is removed
function setFavorite(){
  // Retrieving the string
  let favoritesString:string|null = localStorage.getItem("favorites")

  if (favoritesString == null){
    // Create array of favorites
    const idAsArray:number[] = [id]
    const idAsString:string = JSON.stringify(idAsArray)

    // Favorite to localstorage and to state
    localStorage.setItem("favorites", idAsString)
    setIsFavorited(true)

    console.log("Creating new array and setting id:", id)
    return
  }

  else{ 
    // Retrieve and mutate array
    const favoritesArray:string[] = JSON.parse(favoritesString)
    const index = favoritesArray.indexOf(id.toString());

    if (index !== -1) {
      // This function has been called on a card that was already favorited
      favoritesArray.splice(index, 1)
      const favorites:string = JSON.stringify(favoritesArray)

      //localStorage.removeItem("favorites")
      localStorage.setItem("favorites", favorites)
      setIsFavorited(false)
      console.log("Removing id:", id)

      return
    }
    else {
      // Add this id to favorites
      const newFavoritesArray:string[] =[...favoritesArray, id.toString()]
      const favorites:string = JSON.stringify(newFavoritesArray)
      console.log("Adding id:", id)

      localStorage.removeItem("favorites")
      setIsFavorited(true)
      localStorage.setItem("favorites", favorites)

      return
    }
  }
}

//TODO not necessary to use this function as of right now (using state instead)
// Favorite is derived from local storage
function isFavorite(){
  const idToCheck:string = id.toString()

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
    <div className='pokemon-card' style={{ background: gradient }}>
      <div className='header'>
        <p>{name}</p>
        <button onClick={setFavorite} className='transparent-button'>
          <span className={isFavorited ? "favorite-icon-active" : "favorite-icon-inactive"}>
            <FavoriteBorderIcon />
          </span>
        </button>
      </div>
      <div className='pokemon-types'>
      {types.map((type, index) => (
          <div key={index} className="type">
            {type.type.name}
          </div>
      ))}
      </div>
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      </div>
      <div>{id}</div>
    </div>
  )


}