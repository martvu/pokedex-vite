# Prosjekt 1

## Team 48

## Pokedex
This is a Pokedex app, using data from the [PokeApi](https://pokeapi.co/). 

# How to run project

```
npm install
```

```
npm run dev
```

# Prettier
We use prettier for code formatting

To format all files in the project run:

```
npx prettier . --write
```

To check if all files are formatted run:

```
npx prettier . --check
```

# Testing

Tests use Vitest, React testing library and jest-dom.
Mocking API calls use Mocking Service Worker (msw).


To run tests:

```
npm test
```

To run test coverage run:

```
npm run coverage
```

## Unit testing

pokeApi.test.tsx contains unit tests for the functions getPokemonData and getPokemonDataList used as the queryFn for the useQuery hooks. Currently no tests for the custom hooks (usePokemonData etc.) as these are just wrapped up useQuery, and should work properly as long as the queryFn's are working properly.

utils.test.tsx contains unit tests for the utility functions formatPokemonName and getTypeColorGradient.
In addition, props are state and are tested within the PokemonCard.test.tsx file.

- State: To test state, we mocked the context required to persist favorited pokemon id's to a context-array. We then favorited a mocked Pokemon-component by clicking the favorite button (using fireevent). After that, we verified that the id was indeed stored within localstorage. After that, we clicked the button again, before asserting that the id was removed from localstorage (within the same test).
- Props: To test state, we mocked a Pokemon-component. This was necessary, because we wanted to test the PokemonCard-component. The PokemonCard-component receives a Pokemon-component as its prop upon instantiation.

## Snapshot testing

We have included a snapshot test for the App component, PokemonList and PokemonInfoPage. The test was functional previous to the VM-deployment. However, we have struggled to get the path right (due to the project1 postix) and limited previous knowledge with snapshot-testing. The test remains included as we hope to get feedback on how this could be fixed, as this would aid us greatly in improving our knowledge before the start of project2. The test passes, because the test tests for a not found page, as the snapshot is of a not found page (not intentional, but due to not getting the path right).

## Mocking

For the tests, we have mocked the API calls using msw. This is done in the setupTests.ts file. This file is run before each test, and sets up the handlers for the API calls. There are also some mocks residing locally within the pokemoncard.test.tsx file. Inside of this file, localstorage, context and routing is mocked to allow the instantiation of the PokemonCard-components.

# Requirements and our solution:

The mainpage PokemonList is a list of all the Pokemons, and the user can click on a Pokemon to go directly to that Pokemons PokemonInfoPage. We decided to only include the 151 first pokemon for this small project to limit the amount of data fetched from the API. We use React Router in our app and Link to navigate between PokemonList and PokemonInfoPage. On the PokemonInfoPage the user can easily go back and forth between the Pokemons by clicking on a 'Back' and 'Next' button. Data is fetched from the Poke API. We have implemented custom hooks using the useQuery (Tanstack Query) hook to fetch data from the API.

To allow the user to filter PokemonCards, we have created a page "header" that contains filter and sorting functionality. Using this, the user is able to filter pokemons on type and to sort pokemon. When a filter is selected, the filter-value is added to session storage (technical requirement). There is also a search functionality to easily find the pokemon you want to see. 

A user can choose to favorite a Pokemon by clicking on a heart icon on the pokemon card. When the heart-icon is clicked, the id of the pokemon is added to a "favorites" array in localstorage. This allows the pokemon to remain favorited when the browser is restarted. The user can also filter on favorited pokemon, by clicking on the "favorites" button in the header. This will filter out all non-favorited pokemon. We have a context for this to share state between PokemonList and PokemonInfoPage. 

To make the website responsive, we utilize flex box and media queries with predefined width-settings based on screen-size. This makes the application self-adjustable. The application is responsive (technical requirement) on all screen sizes defined within the firefox inspector's Responsive Design Mode.

We tried our best to make the page resemble an understandable and user friendly (simple) pokedex. We hope the solution is good enough to fulfill the functional requirement that specifies the implementations of an aesthetically pleasing and tidy design.
