import { act, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from "@testing-library/user-event";
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
      expect(await screen.findByText(/#1/i)).toBeInTheDocument();
      const elements = await screen.getAllByText('grass');
      expect(elements).toHaveLength(2);
  });
}) 

describe('App', () => {
  test('app routing works', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      );
      await act(async () => {
        userEvent.click(screen.getByText(/Pokemon Info Page/i));
      });
      expect(await screen.findByText(/#001/i)).toBeInTheDocument();
      expect(await screen.findByText(/Description/i)).toBeInTheDocument(); 
      
      await act(async () => {
        userEvent.click(screen.getByText(/Next/i));
      }
      );
  });
}) 

//TODO snapshot testing (when ui is finalised)

describe('Snapshot', () => {
  test('snapshot', async () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      );
    expect(asFragment()).toMatchSnapshot();
  })
});
