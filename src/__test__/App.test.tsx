import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

const queryClient = new QueryClient();

describe('App', () => {
  test('app routing works', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      );
  });
}) 