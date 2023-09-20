import { beforeAll, afterAll, afterEach } from 'vitest';
import { server } from './mocks/server.tsx';
import '@testing-library/jest-dom/vitest'

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
