import './App.css';
import Pokemoncard from './components/pokemoncard';
import { Pokemon, NamedAPIResource, PokemonAbility, PokemonSprites, PokemonType, PokemonStat } from './utils/pokeApiTypes';  // Replace with the actual path to your types file


const pikachu: Pokemon = {
  id: 25, 
  name: "Pikachu", // Replace with the desired name
  base_experience: 112, // Replace with the desired base experience
  height: 4, // Replace with the desired height
  is_default: true, // Replace with the desired value
  order: 25, // Replace with the desired order
  weight: 60, // Replace with the desired weight
  abilities: [
    {
      is_hidden: false, // Replace with the desired value
      slot: 1, // Replace with the desired slot
      ability: {
        name: "Static", // Replace with the ability name
        url: "https://pokeapi.co/api/v2/ability/1/", // Replace with the actual URL
      },
    },
  ] as PokemonAbility[],

  forms: [] as NamedAPIResource[], // Replace with the desired forms

  game_indices: [] as any[], // Replace with the desired game indices

  held_items: [] as any[], // Replace with the desired held items

  location_area_encounters: "", // Replace with the desired location area encounters

  moves: [] as any[], // Replace with the desired moves

  sprites: {
    front_default: "https://example.com/pikachu-front.png", // Replace with the desired sprite URLs
    front_shiny: "https://example.com/pikachu-front-shiny.png", // Replace with the desired sprite URLs
    front_female: "https://example.com/pikachu-front-female.png", // Replace with the desired sprite URLs
    front_shiny_female: "https://example.com/pikachu-front-shiny-female.png", // Replace with the desired sprite URLs
    back_default: "https://example.com/pikachu-back.png", // Replace with the desired sprite URLs
    back_shiny: "https://example.com/pikachu-back-shiny.png", // Replace with the desired sprite URLs
    back_female: "https://example.com/pikachu-back-female.png", // Replace with the desired sprite URLs
    back_shiny_female: "https://example.com/pikachu-back-shiny-female.png", // Replace with the desired sprite URLs
  } as PokemonSprites,

  species: {
    name: "pikachu-species", // Replace with the species name
    url: "https://pokeapi.co/api/v2/pokemon-species/25/", // Replace with the actual URL
  } as NamedAPIResource,

  stats: [
    {
      stat: {
        name: "hp", // Replace with the stat name
        url: "https://pokeapi.co/api/v2/stat/1/", // Replace with the actual URL
      },
      effort: 0, // Replace with the effort value
      base_stat: 35, // Replace with the base stat value
    } as PokemonStat,
  ],

  types: [
    {
      slot: 1, // Replace with the desired slot
      type: {
        name: "electric", // Replace with the type name
        url: "https://pokeapi.co/api/v2/type/13/", // Replace with the actual URL
      },
    } as PokemonType,
  ],
};

function App() {
  return (
    <div>
      <div> Hello</div>
      <Pokemoncard pokemonInfo={pikachu}></Pokemoncard>
    </div>
  )
}

export default App;
