import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonInfoPage from '../pages/PokemonInfoPage';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
const queryClient = new QueryClient();

const renderPokemonInfoPage = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MemoryRouter initialEntries={['/project1']}>
          <PokemonInfoPage />
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

describe('PokemonInfoPage', () => {
  test('pokemonInfoPage renders', async () => {
    renderPokemonInfoPage();

    expect(await screen.findByText(/#001/i)).toBeInTheDocument();
    expect(await screen.findByText(/Seed Pokémon/i)).toBeInTheDocument();
    expect(await screen.findByText(/Grass/i)).toBeInTheDocument();
    expect(await screen.findByText(/Description/i)).toBeInTheDocument();

  });

  test('snapshot of pokemonInfoPage', async () => {
    const { asFragment } = renderPokemonInfoPage()
    expect(asFragment()).toMatchSnapshot();
  });
});
