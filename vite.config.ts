import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
    environmentMatchGlobs: [
      // all tests in tests/dom will run in jsdom
      ['__test__/pokemonCard.test.tsx', 'jsdom'],
      ['/src/utils/__test__/pokemonCard.test.tsx', 'jsdom'],
    ]
  },
});
