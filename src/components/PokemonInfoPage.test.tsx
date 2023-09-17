import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonInfoPage from './PokemonInfoPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

describe('PokemonInfoPage', () => {
  test('renders the pokemon info page', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
          <Route path="/" element={<PokemonInfoPage />} />
        </Routes>
      </Router>
      </QueryClientProvider>
      );
 
      await screen.findByText(/Bulbasaur/i);
  });
}) 

