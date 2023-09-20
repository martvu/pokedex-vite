import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project1',
  test: {
    globals: true,
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
  },
});
