// Type definitions for PokeAPI v2 2.0, source: https://github.com/lokshunhung/pokeapi-types

// TODO: Remove unused types
export interface NamedAPIResourceList {
  /** The total number of resources available from this API. */
  count: number;
  /** The URL for the next page in the list. */
  next: string;
  /** The URL for the previous page in the list. */
  previous: string;
  /** A list of named API resources. */
  results: NamedAPIResource[];
}

export interface FlavorText {
  /** The localized flavor text for an API resource in a specific language. */
  flavor_text: string;
  /** (Language) The language this name is in. */
  language: NamedAPIResource;
  /** (Version) The game version this flavor text is extracted from. */
  version: NamedAPIResource;
}

export interface Name {
  /** The localized name for an API resource in a specific language. */
  name: string;
  /** (Language) The language this name is in. */
  language: NamedAPIResource;
}

export interface NamedAPIResource {
  /** The name of the referenced resource. */
  name: string;
  /** The URL of the referenced resource. */
  url: string;
}

export interface PokemonSpeciesGender {
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
  rate: number;
  /** (PokemonSpecies) A Pokémon species that can be the referenced gender. */
  pokemon_species: NamedAPIResource;
}

export interface Pokemon {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The base experience gained for defeating this Pokémon. */
  base_experience: number;
  /** The height of this Pokémon in decimetres. */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species. */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;
  /** The weight of this Pokémon in hectograms. */
  weight: number;
  /** (PokemonForm[]) A list of forms this Pokémon can take on. */
  forms: NamedAPIResource[];
  /** A list of game indices relevant to Pokémon item by generation. */
  location_area_encounters: string;
  /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites */
  sprites: PokemonSprites;
  /** (PokemonSpecies) The species this Pokémon belongs to. */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon. */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has. */
  types: PokemonType[];
}

export const emptyPokemon: Pokemon = {
  id: 0,
  name: '',
  base_experience: 0,
  height: 0,
  is_default: false,
  order: 0,
  weight: 0,
  forms: [],
  location_area_encounters: '',
  sprites: {
    front_default: '',
    front_shiny: '',
    back_default: '',
    back_shiny: '',
    front_female: '',
    front_shiny_female: '',
    back_female: '',
    back_shiny_female: '',
  },
  species: {
    name: '',
    url: '',
  },
  stats: [],
  types: [],
};

export interface PokemonType {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** (Type) The type the referenced Pokémon has. */
  type: NamedAPIResource;
}

export interface PokemonStat {
  /** (Stat) The stat the Pokémon has. */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pokémon has in the stat. */
  effort: number;
  /** The base value of the stat. */
  base_stat: number;
}

export interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: string;
  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny: string;
  /** The female depiction of this Pokémon from the front in battle. */
  front_female: string;
  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female: string;
  /** The default depiction of this Pokémon from the back in battle. */
  back_default: string;
  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny: string;
  /** The female depiction of this Pokémon from the back in battle. */
  back_female: string;
  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female: string;
  /** Undocumented property. Might contain keys = "dream_world", "home", "official-artwork". */
  other?: {
    [key in string]?: {
      [spriteName in string]?: string | null;
    };
  };
  /** Undocumented property. Might contain keys = "generation-i", "generation-ii", ... */
  versions?: {
    [version in string]?: {
      [gameTitle in string]?: {
        [spriteName in string]?: string;
      };
    };
  };
}

export interface PokemonColor {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** (PokemonSpecies[]) A list of the Pokémon species that have this color. */
  pokemon_species: NamedAPIResource[];
}

export interface PokemonSpecies {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
  order: number;
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
  gender_rate: number;
  /** The base capture rate; up to 255. The higher the number, the easier the catch. */
  capture_rate: number;
  /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
  base_happiness: number;
  /** Whether or not this is a baby Pokémon. */
  is_baby: boolean;
  /** Whether or not this is a legendary Pokémon. */
  is_legendary: boolean;
  /** Whether or not this is a mythical Pokémon. */
  is_mythical: boolean;
  /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
  hatch_counter: number;
  /** Whether or not this Pokémon has visual gender differences. */
  has_gender_differences: boolean;
  /** Whether or not this Pokémon has multiple forms and can switch between them. */
  forms_switchable: boolean;
  /** (GrowthRate) The rate at which this Pokémon species gains levels. */
  growth_rate: NamedAPIResource;
  /** (EggGroup[]) A list of egg groups this Pokémon species is a member of. */
  egg_groups: NamedAPIResource[];
  /** (PokemonColor) The color of this Pokémon for Pokédex search. */
  color: NamedAPIResource;
  /** (PokemonShape) The shape of this Pokémon for Pokédex search. */
  shape: NamedAPIResource;
  /** (PokemonSpecies) The Pokémon species that evolves into this Pokemon_species. */
  evolves_from_species: NamedAPIResource;
  /** (PokemonHabitat) The habitat this Pokémon species can be encountered in. */
  habitat: NamedAPIResource;
  /** (Generation) The generation this Pokémon species was introduced in. */
  generation: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of flavor text entries for this Pokémon species. */
  flavor_text_entries: FlavorText[];
  /** Descriptions of different forms Pokémon take on within the Pokémon species. */
  genera: Genus[];
}

export const emptyNamedAPIResource: NamedAPIResource = {
  name: '',
  url: '',
};

export const emptyPokemonSpecies: PokemonSpecies = {
  id: 0,
  name: '',
  order: 0,
  gender_rate: 0,
  capture_rate: 0,
  /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
  base_happiness: 0,
  /** Whether or not this is a baby Pokémon. */
  is_baby: false,
  /** Whether or not this is a legendary Pokémon. */
  is_legendary: false,
  /** Whether or not this is a mythical Pokémon. */
  is_mythical: false,
  /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
  hatch_counter: 0,
  /** Whether or not this Pokémon has visual gender differences. */
  has_gender_differences: false,
  /** Whether or not this Pokémon has multiple forms and can switch between them. */
  forms_switchable: false,
  /** (GrowthRate) The rate at which this Pokémon species gains levels. */
  growth_rate: emptyNamedAPIResource,
  /** (EggGroup[]) A list of egg groups this Pokémon species is a member of. */
  egg_groups: [],
  /** (PokemonColor) The color of this Pokémon for Pokédex search. */
  color: emptyNamedAPIResource,

  /** (PokemonShape) The shape of this Pokémon for Pokédex search. */
  shape: emptyNamedAPIResource,
  /** (PokemonSpecies) The Pokémon species that evolves into this Pokemon_species. */
  evolves_from_species: emptyNamedAPIResource,
  /** (PokemonHabitat) The habitat this Pokémon species can be encountered in. */
  habitat: emptyNamedAPIResource,
  /** (Generation) The generation this Pokémon species was introduced in. */
  generation: emptyNamedAPIResource,
  /** The name of this resource listed in different languages. */
  names: [],
  /** A list of flavor text entries for this Pokémon species. */
  flavor_text_entries: [
    {
      flavor_text: '',
      language: emptyNamedAPIResource,
      version: emptyNamedAPIResource,
    },
  ],
  /** The genus of this Pokémon species listed in multiple languages. */
  genera: [],
};

export interface Genus {
  /** The localized genus for the referenced Pokémon species */
  genus: string;
  /** (Language) The language this genus is in. */
  language: NamedAPIResource;
}
