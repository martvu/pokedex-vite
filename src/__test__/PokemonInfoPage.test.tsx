import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonInfoPage from '../pages/PokemonInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import { act } from 'react-dom/test-utils';
import { userEvent } from '@testing-library/user-event';
const queryClient = new QueryClient();

describe('PokemonInfoPage', () => {
  test('pokemonInfoPage renders', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<PokemonInfoPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/#001/i)).toBeInTheDocument();
    expect(await screen.findByText(/Seed Pokémon/i)).toBeInTheDocument();
    expect(await screen.findByText(/Grass/i)).toBeInTheDocument();
    expect(await screen.findByText(/Description/i)).toBeInTheDocument();

    await act(async () => {
      userEvent.click(screen.getByText(/Next/i));
    });
  });

  test('snapshot of pokemonInfoPage', async () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<PokemonInfoPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
