# Prosjekt 1

## Pokedex

### Team 48
# How to run
```
npm install
```
```
npm run dev
```
# Vitest

To run all tests run:

```
npm test
```

To run test coverage run:

```
npm run coverage
```
# Testing
Testing is using Vitest, React testing library and jest-dom. 
Mocking API calls use Mocking Service Worker (msw). 

## Unit testing
pokeApi.test.tsx contains unit tests for the functions getPokemonData and getPokemonDataList used as the queryFn for the useQuery hooks. Currently no tests for the custom hooks (usePokemonData etc.) as these are just wrapped up useQuery, and should work properly as long as the queryFn's are working properly.

utils.test.tsx contains unit tests for the utility functions. 

## Snapshot testing
We have included a snapshot test for the App component. 

## Mocking
For the tests, we have mocked the API calls using msw. This is done in the setupTests.ts file. This file is run before each test, and sets up the handlers for the API calls.

## UI testing
We tested the UI manually on different screen sized and devices (mac and iphone).