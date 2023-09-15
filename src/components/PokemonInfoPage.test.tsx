import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';
import PokemonInfoPage from './PokemonInfoPage';

const queryClient = new QueryClient();

global.fetch = vi.fn().mockResolvedValue({
  json: () =>
    Promise.resolve({
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
    }),
}); 

describe('PokemonInfoPage', () => {
  test('renders PokemonInfoPage component', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PokemonInfoPage />
      </QueryClientProvider>
    );
  });
});
