import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonList from '../pages/PokemonList';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';

const queryClient = new QueryClient();

const renderPokemonList = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MemoryRouter initialEntries={['/project1']}>
          <PokemonList />
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

describe('PokemonList', () => {
  test('pokemonlist renders', async () => {
    renderPokemonList();

    expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();
    expect(await screen.findByText(/ivysaur/i)).toBeInTheDocument();
    expect(await screen.findByText(/#001/i)).toBeInTheDocument();
    expect(await screen.findByText(/#002/i)).toBeInTheDocument();
    expect(await screen.findByText(/type/i)).toBeInTheDocument();
    expect(await screen.findByText(/pokedex/i)).toBeInTheDocument();
  });
});

describe('Snapshot PokemonList', () => {
  test('snapshot of pokemonlist', async () => {
    const { asFragment } = renderPokemonList();
    expect(asFragment()).toMatchSnapshot();
  });
});
