import { getPokemonData, getPokemonDataList } from "../utils/pokeApi"
import { useState, useEffect } from "react";
import { Pokemon } from "../utils/pokeApiTypes";
import Pokemoncard from "./pokemoncard";

export default function PokemonList(){
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); // State to store the list of Pokémon
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(); //TODO could possibly be moved out one layer

    async function getAll() {
        try {
            const data = await getPokemonDataList("https://pokeapi.co/api/v2/pokemon?limit=151")
            setPokemonList(data);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    }
    
    async function getOne() {
        try {
            const data = await getPokemonData("https://pokeapi.co/api/v2/pokemon/1/");
            setSelectedPokemon(data);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    }

    useEffect(() => {
        // Fetch the Pokémon when the component mounts
        getAll();
      }, []);

    return (
        <div>
            <button onClick={getAll}>get all</button>
            <button onClick={getOne}>get one</button>
            <div>
                <h2>Pokémon List</h2>
                <div className="pokemon-card-container">
                    {pokemonList.map((pokemon, index) => (
                        <Pokemoncard key={index + 1} pokemonInfo={pokemon} />
                    ))}
                </div>
            </div>
        </div>
    )
}