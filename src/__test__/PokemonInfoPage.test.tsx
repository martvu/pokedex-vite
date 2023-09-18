import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonList from '../components/PokemonList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from '../App';

const queryClient = new QueryClient();

describe('PokemonList', () => {
  test('pokemonlist renders', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<PokemonList />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      );
    
      expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();
      expect(await screen.findByText(/#001/i)).toBeInTheDocument();
      expect(await screen.findByText(/type/i)).toBeInTheDocument();
      expect(await screen.findByText(/pokedex/i)).toBeInTheDocument();
  });
}) 


describe('Snapshot test', () => {
  test('snapshot', async () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      );
    expect(asFragment()).toMatchSnapshot();
  })
});
