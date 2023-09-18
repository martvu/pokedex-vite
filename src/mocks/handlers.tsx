import { rest } from 'msw';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/:id/', (req, res, ctx) => {
    const id = req.params.id;
    if (id === '1') {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          name: 'bulbasaur',
          types: [
            {
              slot: 1,
              type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/',
              },
            },
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/',
              },
            },
          ],
          stats: [
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/',
              },
            },
            {
              base_stat: 49,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/',
              },
            }
          ],
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
              },
            },
          },
        })
      );
    }
    if (id === '2') {
      return res(
        ctx.status(200),
        ctx.json({
          id: 2,
          name: 'ivysaur',
          types: [
            {
              slot: 1,
              type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/',
              },
            },
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/',
              },
            },
          ],
        })
      );
    }
    // Add more conditions for other Pokémon IDs as needed
    if (id === '3') {
      return res(
        ctx.status(200), // Return a 404 response for unknown IDs
        ctx.json({
          id: 3,
          name: 'Venusaur',
        })
      );
    }
    return res(
      ctx.status(404), // Return a 404 response for unknown IDs
      ctx.json({
        name: 'Pokemon not found',
      })
    );
  }),

  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit');
    if (limit === '151') {
      return res(
        ctx.json({
          results: [
            { name: 'pokemon1', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'pokemon2', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
          ],
        })
      );
    }
  }),

  rest.get(
    'https://pokeapi.co/api/v2/pokemon-species/:id/',
    (req, res, ctx) => {
      const id = req.params.id;
      if (id === '1') {
        return res(
          ctx.status(200),
          ctx.json({
            flavor_text_entries: [
              {
                flavor_text:
                  'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s\nrays, the seed grows progressively larger.',
                language: {
                  name: 'en',
                },
              },
            ],
            genera: [
              {
                genus: 'Samen-Pokémon',
                language: {
                  name: 'de',
                },
              },
              {
                genus: 'Pokémon Semilla',
                language: {
                  name: 'es',
                },
              },
              {
                genus: 'Pokémon Graine',
                language: {
                  name: 'fr',
                },
              },
              {
                genus: '씨앗포켓몬',
                language: {
                  name: 'ko',
                },
              },
              {
                genus: 'SeedyPokémon',
                language: {
                  name: 'en',
                },
              },
              {
                genus: 'Seeda Pokémon',
                language: {
                  name: 'en',
                },
              },
              {
                genus: 'Seede Pokémon',
                language: {
                  name: 'en',
                },
              },
              {
                genus: 'Seed Pokémon',
                language: {
                  name: 'en',
                },
              },
            ],
          })
        );
      }
      if (id === '2') {
        return res(
          ctx.status(200),
          ctx.json({
            flavor_text_entries: [
              {
                flavor_text:
                  'There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong.If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.',
                language: {
                  name: 'en',
                },
              },
            ],
            genera: [
              {
                genus: 'Samen-Pokémon',
                language: {
                  name: 'de',
                },
              },
              {
                genus: 'Pokémon Semilla',
                language: {
                  name: 'es',
                },
              },
              {
                genus: 'Pokémon Graine',
                language: {
                  name: 'fr',
                },
              },
              {
                genus: '씨앗포켓몬',
                language: {
                  name: 'ko',
                },
              },
              {
                genus: 'Seed Pokémon',
                language: {
                  name: 'en',
                },
              },
              {
                genus: 'Seed Pokémon',
                language: {
                  name: 'en',
                },
              },
              {
                genus: 'Seed Pokémon',
                language: {
                  name: 'en',
                },
              },
              {
                genus: 'Seed Pokémon',
                language: {
                  name: 'en',
                },
              },
            ],
          })
        );
      }
      if (id === '3') {
        return res(
          ctx.status(200),
          ctx.json({
            flavor_text_entries: [
              {
                flavor_text:
                  'There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.',
                language: {
                  name: 'en',
                },
              },
            ],
          })
        );
      }
    }
  ),
];

/* rest.get('https://pokeapi.co/api/v2/pokemon/2/', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 2,
        name: 'ivysaur',
      })
    );
  }), */
