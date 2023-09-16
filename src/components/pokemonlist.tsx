import { getPokemonData, getPokemonDataList } from "../utils/pokeApi"
import { useState, useEffect } from "react";
import Pokemoncard from "./pokemoncard";

export default function PokemonList(){
    const [pokemonData, setPokemonData] = useState(null);

    async function getAll(){
        const data = getPokemonDataList("https://pokeapi.co/api/v2/pokemon?limit=151")
        console.log(data)
        return;
    }
    async function getOne() {
        try {
            const data = await getPokemonData("https://pokeapi.co/api/v2/pokemon/1/");
            setPokemonData(data);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    }

    useEffect(() => {
        // Fetch the Pokémon when the component mounts
        getOne();
      }, []);

    return (
        <div>
            <button onClick={getAll}>get all</button>
            <button onClick={getOne}>get one</button>
            {pokemonData && <Pokemoncard pokemonInfo={pokemonData} />}
        </div>
    )
}