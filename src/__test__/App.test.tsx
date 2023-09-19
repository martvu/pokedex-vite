import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';
import { ThemeProvider } from '../context/ThemeContext';
const queryClient = new QueryClient();


// Snapshot is of 'Not Found' page
describe('Snapshot App', () => {
  test('snapshot of app', async () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});


