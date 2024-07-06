
## Pokedex

This is a Pokedex app, using data from the [PokeApi](https://pokeapi.co/).

# Develop

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
