import { describe } from "vitest";
import { formatPokemonName, getTypeColorGradient } from "../utils/utils";
import { test, expect } from "vitest";
import { TYPE_COLORS, TYPE_SECONDARY_COLORS } from "../utils/constants";


describe("formatPokemonName", () => {
  test("should return a string with the first letter capitalized", () => {
    const result = formatPokemonName("bulbasaur");
    expect(result).toBe("Bulbasaur");
  });
  test("should return male symbol", () => {
    const result = formatPokemonName("bulbasaur-m");
    expect(result).toBe("Bulbasaur ♂");
  });
  test("should return female symbol", () => {
    const result = formatPokemonName("bulbasaur-f");
    expect(result).toBe("Bulbasaur ♀");
  })
});

describe("getTypeColorGradient", () => {
  test("should return a string with the first letter capitalized", () => {
    const result = getTypeColorGradient({
      types: [{
        slot: 1,
        type: {
          name: "grass",
          url: ""
        }
      }],
      id: 0,
      name: "",
      base_experience: 0,
      height: 0,
      is_default: false,
      order: 0,
      weight: 0,
      abilities: [],
      forms: [],
      game_indices: [],
      held_items: [],
      location_area_encounters: "",
      moves: [],
      sprites: {
        front_default: "", other: { "official-artwork": { front_default: "" } },
        front_shiny: "",
        front_female: "",
        front_shiny_female: "",
        back_default: "",
        back_shiny: "",
        back_female: "",
        back_shiny_female: ""
      },
      species: {
        name: "", // Replace with the species name
        url: "", // Replace with the actual URL
      },
      stats: []
    })
    expect(result).toBe(`linear-gradient(45deg, ${TYPE_SECONDARY_COLORS['grass']} 0%, ${TYPE_COLORS['grass']} 100%)`);
  })});